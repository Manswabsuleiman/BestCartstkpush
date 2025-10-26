import React, { useState, useEffect } from "react";

const Homepage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: isMobile ? "10px" : "20px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "2fr 1fr",
          gap: "20px",
        }}
      >
        <div
          style={{
            position: "relative",
            borderRadius: "12px",
            overflow: "hidden",
            backgroundColor: "#d3d6dc",
          }}
        >
          <img
            src="./Pictures/Headphones.png"
            alt="Headphones"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: isMobile ? "15%" : "20%",
              left: isMobile ? "8%" : "10%",
              color: "#fff",
            }}
          >
            <h2
              style={{
                fontSize: isMobile ? "20px" : "28px",
                fontWeight: "700",
                marginBottom: "8px",
              }}
            >
              Noise Cancelling
            </h2>
            <h3
              style={{
                fontSize: isMobile ? "16px" : "22px",
                marginBottom: "10px",
              }}
            >
              Headphone
            </h3>
            <p
              style={{
                fontSize: isMobile ? "13px" : "14px",
                lineHeight: "1.6",
                maxWidth: "300px",
              }}
            >
              Boso Over-Ear Headphone <br /> Wifi, Voice Assistant, <br /> Low
              Latency Game Mode
            </p>
            <button
              style={{
                marginTop: "15px",
                padding: isMobile ? "8px 16px" : "10px 20px",
                backgroundColor: "#007bff",
                border: "none",
                borderRadius: "6px",
                color: "#fff",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: isMobile ? "14px" : "16px",
              }}
            >
              BUY NOW
            </button>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              overflow: "hidden",
              padding: isMobile ? "16px" : "20px",
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              justifyContent: "space-between",
              alignItems: "center",
              textAlign: isMobile ? "center" : "left",
            }}
          >
            <div>
              <h4 style={{ fontSize: "16px", fontWeight: "700" }}>XOMIA</h4>
              <h3 style={{ fontSize: "18px", margin: "8px 0" }}>
                Sport Water Resistance Watch
              </h3>
              <button
                style={{
                  padding: "8px 14px",
                  backgroundColor: "#000",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  marginTop: isMobile ? "10px" : "0",
                }}
              >
                SHOP NOW
              </button>
            </div>
            <img
              src="./Pictures/Watch.png"
              alt="Watch"
              style={{
                width: isMobile ? "100px" : "120px",
                height: "auto",
                objectFit: "contain",
                marginTop: isMobile ? "10px" : "0",
              }}
            />
          </div>

          <div
            style={{
              backgroundColor: "#0a2540",
              borderRadius: "12px",
              color: "#fff",
              padding: isMobile ? "16px" : "20px",
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              justifyContent: "space-between",
              alignItems: "center",
              textAlign: isMobile ? "center" : "left",
              gap: isMobile ? "10px" : "0",
            }}
          >
            <div>
              <h3 style={{ fontSize: "20px", fontWeight: "700" }}>
                OKODO HERO 11+ BLACK
              </h3>
              <p style={{ marginTop: "10px", fontSize: "16px" }}>
                FROM <span style={{ fontWeight: "700" }}>$169</span>
              </p>
            </div>
            <img
              src="./Pictures/Camera.png"
              alt="Camera"
              style={{
                width: isMobile ? "100px" : "120px",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: "20px",
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "12px",
            padding: isMobile ? "16px" : "20px",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <div>
            <h3 style={{ fontSize: "18px", fontWeight: "600" }}>Sono Playgo 5</h3>
            <p style={{ margin: "6px 0" }}>
              from <span style={{ fontWeight: "700" }}>$569</span>
            </p>
            <a
              href="#"
              style={{
                color: "#007bff",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              DISCOVER NOW
            </a>
          </div>
          <img
            src="./Pictures/PS5.png"
            alt="PS5"
            style={{
              width: isMobile ? "100px" : "120px",
              height: "auto",
              objectFit: "contain",
              marginTop: isMobile ? "10px" : "0",
            }}
          />
        </div>

        <div
          style={{
            backgroundColor: "#2d2f33",
            borderRadius: "12px",
            padding: isMobile ? "16px" : "20px",
            color: "#fff",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <div>
            <h3 style={{ fontSize: "18px", fontWeight: "600" }}>
              Logitek Bluetooth Keyboard
            </h3>
            <p style={{ fontSize: "14px" }}>Best for all devices</p>
          </div>
          <img
            src="./Pictures/Keyboard.png"
            alt="Keyboard"
            style={{
              width: isMobile ? "100px" : "120px",
              height: "auto",
              objectFit: "contain",
              marginTop: isMobile ? "10px" : "0",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
