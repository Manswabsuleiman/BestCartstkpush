import React, { useState } from "react";

const Shoes = () => {
  const [quantities, setQuantities] = useState({});

  const handleIncrease = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const handleDecrease = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 0 ? prev[id] - 1 : 0,
    }));
  };

  const shoes = [
    {
      id: 1,
      img: "/Pictures/Shoe.png",
      name: "Classic Leather Sneakers",
      price: "5,499.00 KES",
      desc: "Timeless white leather sneakers for casual and semi-formal wear.",
    },
    {
      id: 2,
      img: "/Pictures/Shoe2.png",
      name: "Sport Runner X2",
      price: "4,499.00 KES",
      desc: "Designed for performance and comfort with breathable mesh upper.",
    },
    {
      id: 3,
      img: "/Pictures/Shoe4.png",
      name: "Urban Street Boots",
      price: "KES 6,999.00",
      desc: "Premium ankle boots crafted for a bold urban look and durability.",
    },
  ];

  return (
    <div style={{ backgroundColor: "#f8f8f8", minHeight: "100vh" }}>
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
          }}
        >
          Men's Shoe Collection
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "25px",
          }}
        >
          {shoes.map((shoe) => (
            <div
              key={shoe.id}
              style={{
                backgroundColor: "#fff",
                borderRadius: "16px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                padding: "20px",
                textAlign: "center",
                transition: "transform 0.3s ease",
              }}
            >
              <img
                src={shoe.img}
                alt={shoe.name}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "12px",
                  marginBottom: "15px",
                }}
              />

              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#111",
                  marginBottom: "10px",
                }}
              >
                {shoe.name}
              </h3>

              <p
                style={{
                  fontSize: "15px",
                  color: "#555",
                  lineHeight: "1.5",
                  marginBottom: "10px",
                }}
              >
                {shoe.desc}
              </p>

              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "#000",
                  marginBottom: "15px",
                }}
              >
                {shoe.price}
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <button
                  onClick={() => handleDecrease(shoe.id)}
                  style={{
                    background: "#222",
                    color: "#fff",
                    border: "none",
                    borderRadius: "6px",
                    width: "35px",
                    height: "35px",
                    fontSize: "18px",
                    cursor: "pointer",
                  }}
                >
                  -
                </button>

                <span style={{ fontSize: "18px", fontWeight: "600" }}>
                  {quantities[shoe.id] || 0}
                </span>

                <button
                  onClick={() => handleIncrease(shoe.id)}
                  style={{
                    background: "#222",
                    color: "#fff",
                    border: "none",
                    borderRadius: "6px",
                    width: "35px",
                    height: "35px",
                    fontSize: "18px",
                    cursor: "pointer",
                  }}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @media (max-width: 768px) {
            h2 {
              font-size: 24px !important;
            }

            img {
              height: 200px !important;
            }

            div {
              padding: 30px 10px !important;
            }
          }

          @media (max-width: 480px) {
            h2 {
              font-size: 22px !important;
            }

            img {
              height: 180px !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Shoes;
