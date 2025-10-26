import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

// Environment
const PORT = process.env.PORT || 8080;
const FRONTEND_URLS = [
  "http://localhost:5173",                     // Local dev
  "https://bestcart-deliveries.onrender.com"  // Deployed frontend
];

const app = express();
app.use(cors({
  origin: FRONTEND_URLS,
  methods: ["GET", "POST"],
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: FRONTEND_URLS,
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

// Basic test route
app.get("/", (req, res) => {
  res.send("Backend server is running!");
});

// Start server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

