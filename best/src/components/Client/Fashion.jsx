import React from "react";
import { useNavigate } from "react-router-dom";

const Fashion = () => {
  const navigate = useNavigate();

  const responsiveGrid = `
    @media (max-width: 768px) {
      .fashion-grid {
        grid-template-columns: 1fr !important;
      }
    }
    @media (min-width: 769px) {
      .fashion-grid {
        grid-template-columns: 1fr 1fr !important;
      }
    }
  `;

  return (
    <div
      style={{
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <style>{responsiveGrid}</style>

      <h2
        style={{
          fontSize: "28px",
          marginBottom: "30px",
          fontWeight: "600",
        }}
      >
        Browse Latest Fashion
      </h2>

      <div
        className="fashion-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
        }}
      >
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "12px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/men/details")}
        >
          <img
            src="./Pictures/Men.png"
            alt="Men's Fashion"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: "12px",
              transition: "transform 0.4s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0, 0.4)",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              fontWeight: "bold",
              borderRadius: "12px",
              textTransform: "uppercase",
            }}
          >
            Men’s Fashion
          </div>
        </div>

        <div
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "12px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/women/details")}
        >
          <img
            src="./Pictures/Fashion.png"
            alt="Women's Fashion"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: "12px",
              transition: "transform 0.4s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0, 0.4)",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              fontWeight: "bold",
              borderRadius: "12px",
              textTransform: "uppercase",
            }}
          >
            Women’s Fashion
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fashion;
