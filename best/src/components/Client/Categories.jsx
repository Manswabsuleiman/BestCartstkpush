import React, { useState, useEffect } from "react";

const Categories = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

                      useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const container = {
    padding: "40px 20px",
    backgroundColor: "#f9f9f9",
  };

  const title = {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "30px",
    textAlign: "center",
  };

  const grid = {
    display: "grid",
    gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
    gap: "20px",
    justifyItems: "center",
    alignItems: "center",
  };

  const imgStyle = {
    width: "85%",
    maxWidth: "260px",
    borderRadius: "12px",
    objectFit: "cover",
    transition: "transform 0.3s ease",
    cursor: "pointer",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  };

  const handleHover = (e, scale) => {
    e.target.style.transform = `scale(${scale})`;
  };

  return (
    <div style={container}>
      <h2 style={title}>Shop by Categories</h2>

      <div style={grid}>
        {["Phones", "Camera", "Gaming", "Bestwatch"].map((item) => (
          <img
            key={item}
            src={`./Pictures/${item}.png`}
            alt={item}
            style={imgStyle}
            onMouseEnter={(e) => handleHover(e, 1.05)}
            onMouseLeave={(e) => handleHover(e, 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
