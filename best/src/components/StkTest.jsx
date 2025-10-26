import React, { useState } from "react";

const StkTest = () => {
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setResponse(null);

    try {
      const res = await fetch(
        "https://bestcarstkpush.onrender.com/stkpush", // your backend route
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ phone, amount }),
        }
      );

      const data = await res.json();
      setResponse(data);
    } catch (err) {
      setResponse({ error: "Failed to connect to the server." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "50px auto", textAlign: "center" }}>
      <h2 style={{color: "green",}}>MPESA payment</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter phone (e.g. 254712345678)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{ width: "100%", padding: "10px", margin: "10px 0" }}
          required
        />
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{ width: "100%", padding: "10px", margin: "10px 0" }}
          required
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {loading ? "Sending..." : "Send STK Push"}
        </button>
      </form>

      {response && (
        <pre
          style={{
            textAlign: "left",
            background: "#f3f3f3",
            padding: "10px",
            borderRadius: "5px",
            marginTop: "20px",
          }}
        >
          {JSON.stringify(response, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default StkTest;
