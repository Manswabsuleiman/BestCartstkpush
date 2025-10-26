import React from "react";
import axios from "axios"; 
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useCart } from "../../CartContext";

const MacbookDetails = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = {
    id: 1,
    name: "Apple MacBook Air 15” w/ Touch ID (2023) - Space Grey",
    price: 159999, 
    desc: "Experience ultimate performance and portability with the new 15-inch MacBook Air featuring the M2 chip, stunning Retina display, and all-day battery life.",
    img: "/Pictures/Laptops.png",
  };

      //BACKENED URL AFTER DEPLOYMENT
  const API_URL = "https://bestcarstkpush.onrender.com/stkpush";

  const handleAddToCart = () => {
    addToCart(product);
    navigate("/cart"); 
  };

  // ✅ STK Push handler
  const handleBuyNow = async (price) => {
    try {
      const amount = price.toString().replace(/[^0-9]/g, ""); 
      const phone = "254757080514"; 

      const response = await axios.post(API_URL, { phone, amount });

      console.log("✅ Payment initiated:", response.data);
      alert("STK Push sent to your phone!");
    } catch (error) {
      console.error(" Error sending payment:", error);
      alert("Payment failed. Check console for details.");
    }
  };

  return (
    <div style={{ backgroundColor: "#f8f8f8", minHeight: "100vh" }}>
      <Navbar />

      <div
        style={{
          maxWidth: "1000px",
          margin: "60px auto",
          padding: "20px",
          display: "flex",
          alignItems: "center",
          background: "#fff",
          borderRadius: "16px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        }}
      >
        <div style={{ flex: "0 0 350px", paddingRight: "40px" }}>
          <img
            src={product.img}
            alt={product.name}
            style={{
              width: "80%",
              borderRadius: "12px",
              objectFit: "cover",
            }}
          />
        </div>

        <div style={{ flex: 1, textAlign: "left" }}>
          <h2 style={{ fontSize: "28px", fontWeight: "700", color: "#111" }}>
            {product.name}
          </h2>

          <p
            style={{
              color: "#555",
              fontSize: "16px",
              lineHeight: "1.6",
              margin: "20px 0",
            }}
          >
            {product.desc}
          </p>

          <h3
            style={{
              fontSize: "22px",
              fontWeight: "700",
              color: "#1a1a1a",
              marginBottom: "20px",
            }}
          >
            KES {product.price.toLocaleString()}
          </h3>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button
              onClick={handleAddToCart}
              style={{
                padding: "10px 20px",
                background: "#222",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>

            {/* ✅ Buy Now triggers STK Push */}
            <button
              onClick={() => handleBuyNow(product.price)}
              style={{
                padding: "10px 20px",
                background: "green",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Buy Now
            </button>

            <button
              onClick={() => navigate(-1)}
              style={{
                padding: "10px 20px",
                background: "#ddd",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Back
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MacbookDetails;
