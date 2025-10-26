import React from "react";
import axios from "axios"; // ✅ import axios for backend calls
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { useCart } from "../../CartContext";

const PS5 = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = {
    id: 1,
    name: "PlayStation 5 Console",
    category: "Gaming Consoles",
    price: 44999,
    oldPrice: 99999,
    image: "/Pictures/PS5.png",
    description:
      "Discover lightning-fast loading, deeper immersion, and next-gen gaming with the PlayStation 5.",
  };

  // ✅ Replace with your actual Ngrok backend URL
  const API_URL = "https://bestcarstkpush.onrender.com/stkpush";

  const handleAddToCart = () => {
    addToCart(product);
    navigate("/cart");
  };

  const handleBuyNow = async (price) => {
    try {
      // Extract numeric value from price
      const amount = price.toString().replace(/[^0-9]/g, "");

      // 👇 Set your test phone number in international format
      const phone = "254757080514";

      const response = await axios.post(API_URL, { phone, amount });

      console.log("✅ Payment initiated:", response.data);
      alert("STK Push sent to your phone!");
    } catch (error) {
      console.error("Error sending payment:", error);
      alert("Payment failed. Check console for details.");
    }
  };

  const container = {
    display: "flex",
    flexWrap: "wrap",
    gap: "40px",
    padding: "60px 20px",
    alignItems: "center",
    justifyContent: "center",
  };

  const imageContainer = {
    flex: "1 1 350px",
    textAlign: "center",
  };

  const imgStyle = {
    width: "100%",
    maxWidth: "400px",
    borderRadius: "12px",
    objectFit: "contain",
    cursor: "pointer",
  };

  const infoContainer = {
    flex: "1 1 400px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  };

  const title = {
    fontSize: "26px",
    fontWeight: "700",
  };

  const category = {
    fontSize: "14px",
    color: "gray",
  };

  const description = {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#444",
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

  const button = {
    marginTop: "20px",
    padding: "10px 18px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontWeight: "600",
    cursor: "pointer",
    width: "fit-content",
  };

  return (
    <div style={container}>
      <div style={imageContainer}>
        <img
          onClick={() => navigate("/")}
          src={product.image}
          alt={product.name}
          style={imgStyle}
        />
      </div>

      <div style={infoContainer}>
        <p style={category}>{product.category}</p>
        <h2 style={title}>{product.name}</h2>
        <div style={stars}>★★★★★ (63 reviews)</div>

        <p style={description}>{product.description}</p>

        <div style={priceRow}>
          <span style={currentPrice}>KES {product.price.toLocaleString()}</span>
          <span style={oldPrice}>KES {product.oldPrice.toLocaleString()}</span>
        </div>

        <button style={button} onClick={handleAddToCart}>
          Add to Cart
        </button>

        {/* ✅ Buy Now triggers STK Push */}
        <button
          onClick={() => handleBuyNow(product.price)}
          style={{
            color: "#fff",
            marginTop: "18px",
            background: "green",
            border: "none",
            borderRadius: "15px",
            padding: "10px 18px",
            cursor: "pointer",
          }}
        >
          Buy Now
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default PS5;
