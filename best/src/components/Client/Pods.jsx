import React, { useState, useEffect } from "react";
import axios from "axios"; // ✅ import axios for backend calls
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { useCart } from "../../CartContext";

const Pods = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const product = {
    id: 2,
    name: "Wireless AirPods Pro (2nd Gen)",
    category: "Audio & Accessories",
    price: 3000,
    oldPrice: 3500,
    image: "/Pictures/Pods.png",
    description:
      "Experience the next level of wireless audio with the new AirPods Pro (2nd Gen). Enjoy immersive sound, active noise cancellation, and a comfortable fit designed for all-day listening. With the latest H2 chip, you get improved sound quality, longer battery life, and seamless connectivity with your Apple devices.",
  };

  // ✅ Your backend Ngrok URL for STK push
  const API_URL = "https://bestcartstkpush-server.onrender.com";

  const handleAddToCart = () => {
    addToCart(product);
    navigate("/cart");
  };

  // ✅ STK Push handler
  const handleBuyNow = async (price) => {
    try {
      const amount = price.toString().replace(/[^0-9]/g, ""); // extract numeric value
      const phone = "254757080514"; // 👈 replace with user's phone if dynamic

      const response = await axios.post(API_URL, { phone, amount });

      console.log("✅ Payment initiated:", response.data);
      alert("STK Push sent to your phone!");
    } catch (error) {
      console.error("❌ Error sending payment:", error);
      alert("Payment failed. Check console for details.");
    }
  };

  const pageWrapper = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: "#f9f9f9",
  };

  const container = {
    flex: "1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: isMobile ? "30px 15px" : "50px 20px",
  };

  const card = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: isMobile ? "center" : "flex-start",
    gap: isMobile ? "20px" : "40px",
    maxWidth: "1000px",
    width: "100%",
    background: "#fff",
    borderRadius: "16px",
    padding: isMobile ? "20px" : "30px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    textAlign: isMobile ? "center" : "left",
  };

  const image = {
    width: isMobile ? "80%" : "300px",
    height: "auto",
    objectFit: "contain",
    cursor: "pointer",
  };

  const info = { flex: 1 };

  const title = {
    fontSize: isMobile ? "22px" : "26px",
    fontWeight: "700",
    marginBottom: "12px",
  };

  const category = {
    fontSize: "14px",
    color: "gray",
    marginBottom: "8px",
  };

  const descriptionStyle = {
    fontSize: isMobile ? "15px" : "16px",
    color: "#333",
    lineHeight: "1.6",
    marginBottom: "20px",
  };

  const priceWrapper = {
    display: "flex",
    justifyContent: isMobile ? "center" : "flex-start",
    alignItems: "center",
    marginBottom: "20px",
  };

  const price = {
    fontSize: isMobile ? "18px" : "20px",
    fontWeight: "700",
    color: "#007bff",
  };

  const oldPrice = {
    textDecoration: "line-through",
    color: "#999",
    fontSize: isMobile ? "14px" : "16px",
    marginLeft: "10px",
  };

  const button = {
    padding: "12px 24px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    width: isMobile ? "100%" : "auto",
  };

  const buyNowBtn = {
    color: "#fff",
    marginTop: "18px",
    background: "green",
    border: "none",
    borderRadius: "15px",
    padding: "12px 24px",
    fontSize: "16px",
    cursor: "pointer",
    width: isMobile ? "100%" : "auto",
  };

  return (
    <div style={pageWrapper}>
      <div style={container}>
        <div style={card}>
          <img
            onClick={() => navigate("/")}
            src={product.image}
            alt={product.name}
            style={image}
          />

          <div style={info}>
            <p style={category}>{product.category}</p>
            <h2 style={title}>{product.name}</h2>
            <p style={descriptionStyle}>{product.description}</p>

            <div style={priceWrapper}>
              <span style={price}>KES {product.price.toLocaleString()}</span>
              <span style={oldPrice}>KES {product.oldPrice.toLocaleString()}</span>
            </div>

            <button onClick={handleAddToCart} style={button}>
              Add to Cart
            </button>

            {/* ✅ Buy Now triggers STK Push */}
            <button onClick={() => handleBuyNow(product.price)} style={buyNowBtn}>
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Pods;
