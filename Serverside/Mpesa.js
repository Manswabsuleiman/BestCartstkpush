import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Basic route
app.get("/", (req, res) => {
  res.send(`Your server is live and running on port ${PORT}`);
});

function generateTimestamp() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  return `${year}${month}${day}${hours}${minutes}${seconds}`;
}

const generateToken = async (req, res, next) => {
  try {
    const consumer = process.env.MPESA_CONSUMER_KEY;
    const secret = process.env.MPESA_CONSUMER_SECRET;

    if (!consumer || !secret) {
      throw new Error("Missing consumer key or secret in the .env file");
    }

    const auth = Buffer.from(`${consumer}:${secret}`).toString("base64");

    const { data } = await axios.get(
      "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
      {
        headers: { Authorization: `Basic ${auth}` },
      }
    );

    req.token = data.access_token;
    console.log("Access token generated successfully");
    next();
  } catch (err) {
    console.error("Token error:", err.response?.data || err.message);
    res.status(400).json({ error: "Failed to generate access token" });
  }
};

//STK push route

app.post("/stkpush", generateToken, async (req, res) => {
  try {
    const { phone, amount } = req.body;

    if (!phone || !amount) {
      return res.status(400).json({ error: "Phone and amount are required" });
    }

    const formattedPhone = phone.startsWith("254")
      ? phone
      : `254${phone.slice(1)}`;

    const timestamp = generateTimestamp();
    const shortCode = "174379";
    const passkey = process.env.MPESA_PASSKEY;
    const password = Buffer.from(shortCode + passkey + timestamp).toString("base64");

    const stkRequest = {
      BusinessShortCode: shortCode,
      Password: password,
      Timestamp: timestamp,
      TransactionType: "CustomerPayBillOnline",
      Amount: amount,
      PartyA: formattedPhone,
      PartyB: shortCode,
      PhoneNumber: formattedPhone,
      CallBackURL: "https://proarmy-tammara-thermogenic.ngrok-free.dev/stk_callback",
      AccountReference: "Test",
      TransactionDesc: "Testing STK Push",
    };

    console.log("STK Push Request Body:", stkRequest);

    const { data } = await axios.post(
      "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
      stkRequest,
      {
        headers: {
          Authorization: `Bearer ${req.token}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("STK Push Response:", data);
    res.status(200).json(data);
  } catch (error) {
    console.error("STK Push Error:", error.response?.data || error.message);
    res.status(400).json({
      error: "Failed to send STK push request",
      details: error.response?.data || error.message,
    });
  }
});


app.post("/stk_callback", (req, res) => {
  console.log(" Callback received from M-Pesa");
  console.log(JSON.stringify(req.body, null, 2));

  const callbackData = req.body?.Body?.stkCallback;

  if (!callbackData) {
    return res.status(400).json({ message: "Invalid callback format" });
  }

  if (callbackData.ResultCode === 0) {
    const metadata = callbackData.CallbackMetadata?.Item || [];
    console.log("Payment successful!");
    console.log("Metadata:", metadata);
  } else {
    console.log("Payment failed:", callbackData.ResultDesc);
  }

  res.status(200).json({ message: "Callback received successfully" });
});

app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
