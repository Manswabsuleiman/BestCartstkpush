import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import Shoes from "./Shoes";
import Watches from "./Watches";
import Footer from "./Footer";
import { useCart } from "../../CartContext";

const MensDetails = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const suits = [
    {
      id: 1,
      img: "/Pictures/Suit2.png",
      name: "Classic Navy Suit",
      price: 15000,
      desc: "Tailored elegance for business and formal occasions.",
    },
    {
      id: 2,
      img: "/Pictures/Suit3.png",
      name: "Slim Fit Charcoal Suit",
      price: 18500,
      desc: "A sleek modern fit designed for ultimate confidence.",
    },
    {
      id: 3,
      img: "/Pictures/Suit4.png",
      name: "Royal Blue 3-Piece",
      price: 22000,
      desc: "Stand out with this luxurious 3-piece masterpiece.",
    },
    {
      id: 4,
      img: "/Pictures/Jacket1.png",
      name: "College Jacket",
      price: 4500,
      desc: "Luxurious masterpiece",
    },
    {
      id: 5,
      img: "/Pictures/Jacket2.png",
      name: "Jacket",
      price: 3500,
      desc: "Cold Jacket",
    },
    {
      id: 6,
      img: "/Pictures/Jacket3.png",
      name: "Black North Face",
      price: 1300,
      desc: "Parkas are typically made to withstand extremely cold temperatures.",
    },
    {
      id: 7,
      img: "/Pictures/Jacket4.png",
      name: "Rain Coat",
      price: 1800,
      desc: "Particular attire for rainy weather.",
    },
  ];

  const responsiveStyles = `
    @media (max-width: 768px) {
      .suit-card {
        flex-direction: column !important;
        text-align: center !important;
      }
      .suit-image {
        width: 100% !important;
        text-align: center !important;
      }
      .suit-image img {
        width: 80% !important;
        margin: 0 auto !important;
      }
      .suit-info {
        margin-left: 0 !important;
        margin-top: 15px !important;
      }
      .floral-grid {
        flex-wrap: wrap !important;
        gap: 10px !important;
      }
      .floral-grid img {
        width: 45% !important;
      }
    }
  `;

  return (
    <div style={{ backgroundColor: "#f8f8f8", minHeight: "100vh" }}>
      <Navbar />

      <style>{responsiveStyles}</style>

      <div
        style={{
          padding: "50px 20px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "700",
            textAlign: "center",
            marginBottom: "40px",
            color: "#222",
            letterSpacing: "0.5px",
          }}
        >
          Men's Fashion Collection
        </h2>

        {suits.map((suit) => (
          <div
            key={suit.id}
            className="suit-card"
            style={{
              display: "flex",
              alignItems: "center",
              background: "#fff",
              borderRadius: "16px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              padding: "20px",
              marginBottom: "25px",
              transition: "all 0.3s ease",
            }}
          >
            <div
              className="suit-image"
              style={{
                flex: "0 0 280px",
                borderRadius: "12px",
                overflow: "hidden",
                textAlign: "center",
              }}
            >
              <img
                src={suit.img}
                alt={suit.name}
                style={{
                  width: "50%",
                  height: "auto",
                  display: "block",
                  borderRadius: "12px",
                  margin: "0 auto",
                }}
              />
            </div>
 
            <div
              className="suit-info"
              style={{
                flex: "1",
                marginLeft: "30px",
                textAlign: "left",
              }}
            >
              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: "700",
                  color: "#111",
                  marginBottom: "10px",
                }}
              >
                {suit.name}
              </h3>

              <p
                style={{
                  fontSize: "16px",
                  color: "#555",
                  lineHeight: "1.6",
                  marginBottom: "20px",
                  maxWidth: "90%",
                }}
              >
                {suit.desc}
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "#1a1a1a",
                    margin: 0,
                  }}
                >
                  KSh {suit.price.toLocaleString()}
                </p>

                <button
                  onClick={() => {
                    addToCart(suit);
                    navigate("/cart");
                  }}
                  style={{
                    padding: "10px 22px",
                    border: "none",
                    borderRadius: "8px",
                    background: "linear-gradient(135deg, #111, #444)",
                    color: "#fff",
                    fontSize: "15px",
                    fontWeight: "500",
                    cursor: "pointer",
                    marginTop: "10px",
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}

        <div
          style={{
            padding: "40px 20px",
            backgroundColor: "#fafafa",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "28px",
              fontWeight: "700",
              marginBottom: "30px",
              color: "#222",
            }}
          >
            Florals
          </h2>

          <div
            className="floral-grid"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "0px",
              flexWrap: "nowrap",
            }}
          >
            <img
              onClick={() => navigate("/floral/1")}
              src="/Pictures/Floral.png"
              alt="Floral Shirt 1"
              style={{
                width: "23%",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            />
            <img
              onClick={() => navigate("/floral/2")}
              src="/Pictures/Floral2.png"
              alt="Floral Shirt 2"
              style={{
                width: "23%",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            />
            <img
              onClick={() => navigate("/floral/3")}
              src="/Pictures/Floral3.png"
              alt="Floral Shirt 3"
              style={{
                width: "23%",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            />
          </div>
        </div>

        <Shoes />
        <Watches />
        <Footer />
      </div>
    </div>
  );
};

export default MensDetails;


