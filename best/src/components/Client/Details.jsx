import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Details = () => {

const Navigate = useNavigate()
  const container = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "40px",
    padding: "60px 20px",
  };

  const imageSection = {
    flex: "1 1 400px",
    display: "flex",
    justifyContent: "center",
  };

  const imgStyle = {
    width: "100%",
    maxWidth: "450px",
    height: "auto",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  };

  const detailsSection = {
    flex: "1 1 400px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  };

  const title = {
    fontSize: "28px",
    fontWeight: "700",
    color: "#333",
  };

  const category = {
    color: "gray",
    fontSize: "14px",
  };

  const description = {
    fontSize: "16px",
    color: "#555",
    lineHeight: "1.6",
  };

  const priceRow = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  const currentPrice = {
    fontSize: "20px",
    fontWeight: "700",
    color: "#007bff",
  };

  const oldPrice = {
    fontSize: "16px",
    color: "#999",
    textDecoration: "line-through",
  };

  const stars = {
    color: "#f5a623",
    fontSize: "16px",
  };

  const buttonRow = {
    display: "flex",
    gap: "16px",
    marginTop: "20px",
  };

  const addToCart = {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "10px 18px",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
  };

  const buyNow = {
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    padding: "10px 18px",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
  };

  return (
    <div style={container}>
            <div style={imageSection}>
        <img
        onClick={() =>(Navigate('/'))}
    
          src="/Pictures/Laptops.png"
          alt="Apple MacBook Air 15”"
          style={imgStyle}
        />
      </div>

      <div style={detailsSection}>
        <h2 style={title}>Apple MacBook Air 15” w/ Touch ID (2023) - Space Grey</h2>
        <p style={category}>Category: Computers & Laptops</p>
        <div style={stars}>★★★★★ (245 reviews)</div>

        <div style={priceRow}>
          <span style={currentPrice}>KES 159,999.00</span>
          <span style={oldPrice}>KES 179,999.00</span>
        </div>

        <p style={description}>
          The Apple MacBook Air 15” (2023) with M2 chip delivers exceptional
          performance in a lightweight, elegant design. With a stunning Retina
          display, Magic Keyboard, and all-day battery life, it’s the ultimate
          laptop for professionals, creators, and students.
        </p>

        <ul style={{ color: "#444", lineHeight: "1.8" }}>
          <li> Apple M2 Chip (8-core CPU, 10-core GPU)</li>
          <li>15.3-inch Liquid Retina Display</li>
          <li>8GB Unified Memory, 256GB SSD Storage</li>
          <li>Magic Keyboard with Touch ID</li>
          <li>Up to 18 hours battery life</li>
        </ul>

        <div style={buttonRow}>
          <button style={addToCart}>🛒 Add to Cart</button>
          <button style={buyNow}>Buy Now</button>
        </div>
      </div>
      <Footer/>
    </div>
    
  );
};

export default Details;
