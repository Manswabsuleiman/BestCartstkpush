import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useCart } from "../../CartContext";

const WatchDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const watches = [
    {
      id: 1,
      name: "Rolex Submariner",
      price: "KSh 8,778",
      desc: "A timeless diving watch combining elegance and functionality.",
      img: "/Pictures/Watch1.png",
    },
    {
      id: 2,
      name: "Omega Seamaster",
      price: "KSh 15,546.00",
      desc: "Built for adventure and precision, perfect for modern gentlemen.",
      img: "/Pictures/Watch2.png",
    },
    {
      id: 3,
      name: "Tag Heuer Carrera",
      price: "KSh 10,352.00",
      desc: "A racing-inspired masterpiece with sleek craftsmanship.",
      img: "/Pictures/Watch3.png",
    },
    {
      id: 4,
      name: "Audemars Piguet Royal Oak",
      price: "KSh 23,065.00",
      desc: "A luxury icon with a bold, distinctive design and power reserve.",
      img: "/Pictures/Watch4.png",
    },
    {
      id: 5,
      name: "Patek Philippe Nautilus",
      price: "KSh 17,999.00",
      desc: "A statement of sophistication and craftsmanship excellence.",
      img: "/Pictures/Watch5.png",
    },
    {
      id: 6,
      name: "Breitling Navitimer",
      price: "KSh 14,999.00",
      desc: "Perfect blend of aviation heritage and modern elegance.",
      img: "/Pictures/Watch6.png",
    },
    {
      id: 7,
      name: "Hublot Classic Fusion",
      price: "KSh 21,579.00",
      desc: "A sleek fusion of luxury and innovation with a modern feel.",
      img: "/Pictures/Watch8.png",
    },
    {
      id: 8,
      name: "Olev Watch",
      price: "KSh 23,654.00",
      desc: "A timeless wristwatch that defines elegance and precision.",
      img: "/Pictures/WatchBiden.png",
    },
  ];

  const watch = watches.find((item) => item.id === Number(id));

  if (!watch) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h2>Watch not found</h2>
        <button
          onClick={() => navigate(-1)}
          style={{
            padding: "10px 20px",
            background: "#222",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Go Back
        </button>
      </div>
    );
  }

  const containerStyle = {
    backgroundColor: "#f8f8f8",
    minHeight: "100vh",
  };

  const cardStyle = {
    maxWidth: "1000px",
    margin: "60px auto",
    padding: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#fff",
    borderRadius: "16px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
    flexWrap: "wrap", 
  };

  const imageContainer = {
    flex: "0 0 350px",
    padding: "20px",
    textAlign: "center",
  };

  const imageStyle = {
    width: "100%",
    maxWidth: "320px",
    borderRadius: "12px",
    objectFit: "cover",
  };

  const detailsStyle = {
    flex: 1,
    textAlign: "left",
    padding: "20px",
    minWidth: "300px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  };

  const addToCartBtn = {
    ...buttonStyle,
    background: "#222",
    color: "#fff",
  };

  const backBtn = {
    ...buttonStyle,
    background: "#ddd",
    marginLeft: "10px",
  };

  return (
    <div style={containerStyle}>
      <Navbar />

      <div style={cardStyle}>

        <div style={imageContainer}>
          <img src={watch.img} alt={watch.name} style={imageStyle} />
        </div>

        <div style={detailsStyle}>
          <h2 style={{ fontSize: "28px", fontWeight: "700", color: "#111" }}>
            {watch.name}
          </h2>

          <p
            style={{
              color: "#555",
              fontSize: "16px",
              lineHeight: "1.6",
              margin: "20px 0",
            }}
          >
            {watch.desc}
          </p>

          <h3
            style={{
              fontSize: "22px",
              fontWeight: "700",
              color: "#1a1a1a",
              marginBottom: "20px",
            }}
          >
            {watch.price}
          </h3>

          <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
            <button
              onClick={() => {
                addToCart(watch);
                navigate("/cart");
              }}
              style={addToCartBtn}
            >
              Add to Cart
            </button>

            <button onClick={() => navigate(-1)} style={backBtn}>
              Back
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WatchDetails;
