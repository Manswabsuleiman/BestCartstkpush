import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../CartContext";

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
  const headerRow = { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px", flexWrap: "wrap" };
  const title = { fontSize: "28px", fontWeight: "700", color: "#222" };
  const grid = {
    display: "grid",
    gridTemplateColumns: isMobile ? "repeat(auto-fit, minmax(160px, 1fr))" : "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  };
  const card = {
    border: "1px solid #eee",
    borderRadius: "12px",
    padding: "16px",
    backgroundColor: "#fff",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  };
  const imgStyle = { width: "100%", maxWidth: "160px", height: "auto", maxHeight: "160px", objectFit: "contain", borderRadius: "8px", marginBottom: "12px" };
  const category = { fontSize: "13px", color: "gray", marginBottom: "4px" };
  const productName = { fontSize: "15px", fontWeight: "500", marginBottom: "8px", lineHeight: "1.4", color: "#333" };
  const priceRow = { display: "flex", justifyContent: "center", alignItems: "center", gap: "8px" };
  const currentPrice = { fontSize: "16px", fontWeight: "700", color: "#007bff" };
  const oldPrice = { fontSize: "14px", color: "#999", textDecoration: "line-through" };
  const stars = { color: "#f5a623", fontSize: "14px", marginBottom: "8px" };

  const handleHover = (e, scale) => {
    e.currentTarget.style.transform = `scale(${scale})`;
    e.currentTarget.style.boxShadow = scale === 1.03 ? "0 4px 12px rgba(0,0,0,0.1)" : "none";
  };

  const products = [
    { id: 1, name: "Apple MacBook Air 15” w/ Touch ID (2023) - Space Grey", image: "./Pictures/Laptops.png", category: "Computers & Laptops", price: "KES 159,999.00", oldPrice: "KES 179,999.00", path: "/product/macbook" },
    { id: 2, name: "Noise Cancelling Headphones", image: "./Pictures/Headset.png", category: "Audio Devices", price: "KES 6,999.00", oldPrice: "KES 7,300.00", path: "/product/headphones" },
    { id: 3, name: "PlayStation 5 Console", image: "./Pictures/PS5.png", category: "Gaming Consoles", price: "KES 44,999.00", oldPrice: "KES 99,999.00", path: "/product/PS5" },
    { id: 4, name: "Wireless AirPods Pro (2nd Gen)", image: "./Pictures/Pods.png", category: "Audio & Accessories", price: "KES 3,000.00", oldPrice: "KES 3,500.00", path: "/product/pods" },
  ];

  const formatPrice = (priceStr) => Number(priceStr.replace(/[^0-9.-]+/g, ""));

  return (
    <div style={section}>
      <div style={headerRow}>
        <h2 style={title}>Products</h2>
      </div>

      <div style={grid}>
        {products.map((product) => (
          <div
            key={product.id}
            style={card}
            onMouseEnter={(e) => handleHover(e, 1.03)}
            onMouseLeave={(e) => handleHover(e, 1)}
          >
            <img
              src={product.image}
              alt={product.name}
              style={imgStyle}
              onClick={() => navigate(product.path)}
            />
            <p style={category}>{product.category}</p>
            <p style={productName}>{product.name}</p>
            <div style={stars}>★★★★★</div>
            <div style={priceRow}>
              <span style={currentPrice}>{product.price}</span>
              <span style={oldPrice}>{product.oldPrice}</span>
            </div>

            <button
              onClick={() => {
                addToCart({
                  id: product.id,
                  name: product.name,
                  price: formatPrice(product.price),
                  img: product.image,
                  quantity: 1,
                });

                const cartSection = document.getElementById("cart-section");
                if (cartSection) {
                  cartSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              style={{
                marginTop: "10px",
                padding: "8px 16px",
                border: "none",
                borderRadius: "6px",
                background: "#222",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
