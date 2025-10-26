import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useCart } from "../../CartContext";
import axios from "axios";

const WomenDetails = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // 🩷 Replace this with your actual ngrok or live backend link
  const BACKEND_URL = "https://proarmy-tammara-thermogenic.ngrok-free.dev/stkpush";

  const products = [
    { id: 1, img: "/Pictures/Classic1.png", name: "Floral Dress", price: "KSh 2,500" },
    { id: 2, img: "/Pictures/Classic2.png", name: "Elegant Top", price: "KSh 1,800" },
    { id: 3, img: "/Pictures/Classic3.png", name: "Casual Blouse", price: "KSh 1,600" },
    { id: 4, img: "/Pictures/Classic4.png", name: "Summer Skirt", price: "KSh 2,200" },
    { id: 5, img: "/Pictures/Wshirts.png", name: "Short sleeved", price: "KSh 1,845.00" },
    { id: 6, img: "/Pictures/Wshirts2.png", name: "Long sleeved", price: "KSh 2,100.00" },
    { id: 7, img: "/Pictures/Wshirts3.png", name: "Loose Tunic Tops", price: "KSh 1,999.00" },
    { id: 8, img: "/Pictures/Wshirts4.png", name: "Buttoned Shirt", price: "KSh 1,000.00" },
    { id: 9, img: "/Pictures/TwoPiece.png", name: "Two Piece", price: "KSh 1,799.00" },
  ];

  const heels = [
    { id: 10, img: "/Pictures/Heels1.png", name: "Black Strappy Heels", desc: "Elegant evening heels for any occasion.", price: "KSh 4,899.00" },
    { id: 11, img: "/Pictures/Heels2.png", name: "Red Suede Pumps", desc: "Stylish pumps for evening wear.", price: "KSh 5,974.00" },
    { id: 12, img: "/Pictures/Heels3.png", name: "Nude Block Sandals", desc: "Comfortable, chic sandals for evening wear.", price: "KSh 2,565.00" },
    { id: 13, img: "/Pictures/Heels4.png", name: "White Platform Heels", desc: "Trendy and bold platform heels.", price: "KSh 7,166.00" },
    { id: 14, img: "/Pictures/Heels5.png", name: "Silver Glitter Heels", desc: "Sparkling heels for party nights.", price: "KSh 8,406.00" },
    { id: 15, img: "/Pictures/Heels6.png", name: "White Platform Slingsbacks", desc: "Perfect summer heels.", price: "KSh 5,636.00" },
    { id: 16, img: "/Pictures/Heels7.png", name: "Black Platform Slingback", desc: "Classic and chic design.", price: "KSh 10,556.00" },
    { id: 17, img: "/Pictures/Heels8.png", name: "Brown Wedge Sandal", desc: "Stylish casual wedges.", price: "KSh 13,546.00" },
  ];

  // 🛒 Add to cart
  const handleAddToCart = (item) => {
    addToCart(item);
    navigate("/cart");
  };

  // 📲 Handle M-Pesa STK push
  const handleBuyNow = async (price) => {
    const amount = parseInt(price.replace(/[^\d]/g, "")); // clean amount like "KSh 2,500" → 2500
    const phone = prompt("📱 Enter your M-Pesa phone number (format: 2547...)");
    if (!phone) return alert("Phone number is required!");

    try {
      const res = await axios.post(BACKEND_URL, { phone, amount });
      if (res.data.success) {
        alert("✅ STK push sent! Check your phone to complete the payment.");
      } else {
        alert(" 📱STK push sent to your phone to complete transaction.");
      }
    } catch (err) {
      console.error(err);
      alert("⚠️ Error connecting to backend. Please check your Ngrok URL or server.");
    }
  };

  const buttonBase = {
    padding: "10px 15px",
    border: "none",
    borderRadius: "8px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    flex: 1,
  };

  const buttonPrimary = {
    ...buttonBase,
    background: "#111",
    color: "#fff",
  };

  const buttonSecondary = {
    ...buttonBase,
    background: "#ff4081",
    color: "#fff",
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#fafafa" }}>
      <Navbar />

      <h2
        style={{
          textAlign: "center",
          margin: "40px 0",
          fontSize: "28px",
          color: "#222",
          fontWeight: "700",
        }}
      >
        Women's Fashion
      </h2>

      {/* 🛍️ Clothes Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "25px",
          padding: "0 40px 60px",
        }}
      >
        {products.map((item) => (
          <div
            key={item.id}
            style={{
              borderRadius: "14px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              textAlign: "center",
              backgroundColor: "#fff",
              padding: "20px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
            }}
          >
            <img
              src={item.img}
              alt={item.name}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "15px",
              }}
            />
            <h3 style={{ fontSize: "18px", color: "#111", marginBottom: "6px" }}>
              {item.name}
            </h3>
            <p style={{ color: "#444", fontSize: "15px", marginBottom: "15px" }}>
              {item.price}
            </p>
            <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
              <button style={buttonPrimary} onClick={() => handleAddToCart(item)}>
                Add to Cart
              </button>
              <button style={buttonSecondary} onClick={() => handleBuyNow(item.price)}>
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 👠 Heels Section */}
      <h2
        style={{
          textAlign: "center",
          margin: "40px 0 20px",
          fontSize: "26px",
          color: "#222",
          fontWeight: "700",
        }}
      >
        Women's Heels
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "25px",
          padding: "0 40px 60px",
        }}
      >
        {heels.map((item) => (
          <div
            key={item.id}
            style={{
              background: "#fff",
              borderRadius: "14px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              textAlign: "center",
              padding: "20px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
            }}
          >
            <img
              src={item.img}
              alt={item.name}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            />
            <h3 style={{ fontSize: "17px", color: "#111", marginBottom: "5px" }}>
              {item.name}
            </h3>
            <p style={{ fontSize: "13px", color: "#555", marginBottom: "5px" }}>
              {item.desc}
            </p>
            <p style={{ fontWeight: "700", fontSize: "16px", marginBottom: "15px" }}>
              {item.price}
            </p>
            <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
              <button style={buttonPrimary} onClick={() => handleAddToCart(item)}>
                Add to Cart
              </button>
              <button style={buttonSecondary} onClick={() => handleBuyNow(item.price)}>
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default WomenDetails;
