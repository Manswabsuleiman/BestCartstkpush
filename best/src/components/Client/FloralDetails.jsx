import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useCart } from "../../CartContext"; 

const FloralDetails = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { id } = useParams();

  const floralItems = {
    1: {
      name: "Floral Paradise Shirt",
      price: "KSh 2,500",
      desc: "Vibrant tropical print with soft cotton comfort.",
      img: "/Pictures/Floral.png",
    },
    2: {
      name: "Blue Bloom Casual Shirt",
      price: "KSh 2,800",
      desc: "Casual yet stylish, perfect for a sunny day out.",
      img: "/Pictures/Floral2.png",
    },
    3: {
      name: "Dark Garden Slim Fit",
      price: "KSh 3,000",
      desc: "Elegant dark floral pattern for classy occasions.",
      img: "/Pictures/Floral3.png",
    },
  };

  const item = floralItems[id];

  if (!item) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        Item not found
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "#f8f8f8", minHeight: "100vh" }}>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "50px 20px",
          gap: "40px",
          flexWrap: "wrap", 
        }}
      >
        <img
          onClick={() => navigate("/men/details")}
          src={item.img}
          alt={item.name}
          style={{
            width: "300px",
            height: "auto",
            borderRadius: "12px",
            objectFit: "cover",
            cursor: "pointer",
            maxWidth: "90%",
          }}
        />

        <div
          style={{
            textAlign: "left",
            maxWidth: "500px",
            width: "100%",
            padding: "0 10px",
          }}
        >
          <h2
            style={{
              fontSize: "28px",
              fontWeight: "700",
              color: "#111",
              textAlign: "center",
            }}
          >
            {item.name}
          </h2>

          <p
            style={{
              fontSize: "16px",
              color: "#555",
              marginTop: "10px",
              lineHeight: "1.6",
              textAlign: "center",
            }}
          >
            {item.desc}
          </p>

          <h3
            style={{
              marginTop: "20px",
              fontSize: "22px",
              fontWeight: "700",
              color: "#1a1a1a",
              textAlign: "center",
            }}
          >
            {item.price}
          </h3>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              onClick={() => {
                addToCart(item);
                navigate("/cart");
              }}
              style={{
                marginTop: "20px",
                padding: "12px 28px",
                background: "linear-gradient(135deg, #111, #444)",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FloralDetails;
