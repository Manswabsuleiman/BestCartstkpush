import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", 
    methods: ["GET", "POST"],
  },
});

const conversations = new Map();

io.on("connection", (socket) => {
  console.log(`Connected: ${socket.id}`);
  conversations.set(socket.id, []);

  socket.on("send_message", (data) => {
    const history = conversations.get(socket.id) || [];

  
    history.push({ role: "user", content: data.text });
    conversations.set(socket.id, history);

    io.to(socket.id).emit("bot_typing", true);

    setTimeout(() => {
      const botReply = "Welcome to Best-Cart! How may I help you today?";

      history.push({ role: "assistant", content: botReply });
      conversations.set(socket.id, history);

      io.to(socket.id).emit("receive_message", {
        sender: "bot",
        text: botReply,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      });

      io.to(socket.id).emit("bot_typing", false);
    }, 1000); 
  });

  socket.on("disconnect", () => {
    console.log(`Disconnected: ${socket.id}`);
    conversations.delete(socket.id);
  });
});


app.get("/", (req, res) => {
  res.send("Backend server is running!");
});



server.listen(8080, () => console.log("Server running on http://localhost:8080"));
