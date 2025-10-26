import express from "express";

const app = express();
const PORT = 8000;

// Simple test route
app.get("/", (req, res) => {
  res.send("✅ Ngrok is live and your server is running!");
});

// Another test route
app.get("/hello", (req, res) => {
  res.json({ message: "Hello Manswab! Your Ngrok tunnel works perfectly 🎉" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
