import React, { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [attachedFile, setAttachedFile] = useState(null);
  const [messages, setMessages] = useState([]);
  const [botTyping, setBotTyping] = useState(false);
  const chatBoxRef = useRef(null);

  const socketRef = useRef(null); 

  const toggleChat = () => setIsOpen(!isOpen);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setAttachedFile(file);
  };

  const handleSend = () => {
    if (message.trim() === "" && !attachedFile) return;

    const msgData = {
      text: message,
      file: attachedFile ? attachedFile.name : null,
      sender: "user",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    // ✅ Send to backend
    socketRef.current.emit("send_message", msgData);

    // Show message immediately on UI
    setMessages((prev) => [...prev, msgData]);
    setMessage("");
    setAttachedFile(null);
  };

  useEffect(() => {
    // ✅ Initialize socket inside useEffect
    socketRef.current = io("http://localhost:8080", {
      reconnection: true,
    });

    const socket = socketRef.current;

    socket.on("connect", () => {
      console.log("✅ Socket connected:", socket.id);
    });

    socket.on("connect_error", (err) => {
      console.error("❌ Socket connection error:", err.message);
    });

    socket.on("receive_message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    socket.on("bot_typing", (isTyping) => {
      setBotTyping(isTyping);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  // ✅ Auto-scroll on new message
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages, botTyping]);

  return (
    <div>
      {/* Floating Chat Icon */}
      <img
        src="/Pictures/Chat.png"
        alt="Chat"
        onClick={toggleChat}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          cursor: "pointer",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          backgroundColor: "#fff",
          padding: "10px",
          zIndex: 999,
        }}
      />

      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "90px",
            right: "20px",
            width: "320px",
            height: "420px",
            backgroundColor: "#f9f9f9",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "#0078FF",
              color: "white",
              padding: "10px 15px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h4 style={{ margin: 0 }}>Chat with us</h4>
            <button
              onClick={toggleChat}
              style={{
                background: "none",
                border: "none",
                color: "white",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              ×
            </button>
          </div>

          {/* Chat Messages */}
          <div
            ref={chatBoxRef}
            className="chat-box"
            style={{
              flex: 1,
              padding: "10px",
              overflowY: "auto",
              background: "#fff",
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  marginBottom: "10px",
                  textAlign: msg.sender === "user" ? "right" : "left",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    backgroundColor:
                      msg.sender === "user" ? "#0078FF" : "#E9E9EB",
                    color: msg.sender === "user" ? "#fff" : "#000",
                    padding: "8px 10px",
                    borderRadius: "10px",
                    maxWidth: "80%",
                    wordWrap: "break-word",
                  }}
                >
                  {msg.text}
                  {msg.file && (
                    <div style={{ fontSize: "12px" }}>📎 {msg.file}</div>
                  )}
                </div>
                <div style={{ fontSize: "10px", color: "#888" }}>{msg.time}</div>
              </div>
            ))}

            {botTyping && (
              <div
                style={{ textAlign: "left", color: "#888", fontSize: "13px" }}
              >
                <em>Bot is typing...</em>
              </div>
            )}
          </div>

          <div
            style={{
              borderTop: "1px solid #ddd",
              padding: "10px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <label htmlFor="fileInput" style={{ cursor: "pointer" }}>
              <img
                src="/Pictures/attach.png"
                alt="Attach"
                style={{
                  width: "24px",
                  height: "24px",
                  objectFit: "contain",
                  opacity: 0.8,
                }}
              />
            </label>
            <input
              id="fileInput"
              type="file"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />

            <input
              type="text"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{
                flex: 1,
                padding: "8px",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />

            <button
              onClick={handleSend}
              style={{
                backgroundColor: "#0078FF",
                color: "white",
                border: "none",
                padding: "8px 12px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
