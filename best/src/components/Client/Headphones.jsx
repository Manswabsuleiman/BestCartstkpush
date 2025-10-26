import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../CartContext"; 
import Footer from "./Footer";

const Products = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const section = { padding: "40px 20px", backgroundColor: "#f9f9f9" };
  const grid = { display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" };
  const card = { border: "1px solid #eee", borderRadius: "12px", padding: "16px", textAlign: "center", backgroundColor: "#fff", transition: "transform 0.3s ease, box-shadow 0.3s ease", cursor: "pointer" };
  const imgStyle = { width: "100%", height: "180px", objectFit: "contain", borderRadius: "8px", marginBottom: "12px" };
  const productName = { fontSize: "15px", fontWeight: "500", marginBottom: "8px", color: "#333" };

  const products = [
    { id: 1, name: "Apple MacBook Air 15”", category: "Computers & Laptops", price: 159999, oldPrice: 179999, image: "/Pictures/Laptops.png", path: "/product/macbook" },
    { id: 2, name: "Noise Cancelling Headphones", category: "Audio Devices", price: 6999, oldPrice: 7300, image: "/Pictures/Headset.png", path: "/product/headphones" },
    { id: 3, name: "PlayStation 5 Console", category: "Gaming Consoles", price: 44999, oldPrice: 99999, image: "/Pictures/PS5.png", path: "/product/PS5" },
    { id: 4, name: "Wireless AirPods Pro", category: "Audio & Accessories", price: 3000, oldPrice: 3500, image: "/Pictures/Pods.png", path: "/product/pods" },
  ];

  return (
    <>
      <div style={section}>
        <h2 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "30px" }}>Products</h2>
        <div style={grid}>
          {products.map((product) => (
            <div key={product.id} style={card}>
              <img
                src={product.image}
                alt={product.name}
                style={imgStyle}
                onClick={() => navigate(product.path)}
              />
              <p style={productName}>{product.name}</p>
              <div style={{ fontWeight: "700", marginBottom: "10px" }}>KES {product.price.toLocaleString()}</div>
              <button
                onClick={() => {
                  addToCart({ ...product, quantity: 1 });
                  navigate("/cart"); 
                }}
                style={{ padding: "8px 16px", border: "none", borderRadius: "6px", background: "#222", color: "#fff", cursor: "pointer" }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
