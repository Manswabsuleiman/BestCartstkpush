import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Client/Navbar";
import Footer from "../components/Client/Footer";

const About = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />

      <main
        style={{
          backgroundColor: "#f9f9f9",
          padding: "60px 20px",
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            width: "100%",
            textAlign: "center",
            color: "#333",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(24px, 5vw, 36px)",
              marginBottom: "24px",
              fontWeight: "700",
              color: "#111",
            }}
          >
            About <span style={{ color: "#007BFF" }}>BEST - Cart</span>
          </h2>

          <p
            style={{
              fontSize: "clamp(15px, 2vw, 18px)",
              lineHeight: "1.7",
              marginBottom: "24px",
              padding: "0 10px",
            }}
          >
            Welcome to <strong>BEST - Cart</strong>, your trusted destination for
            quality products at unbeatable prices. We’re passionate about making
            online shopping simple, secure, and enjoyable for everyone. Whether
            you’re looking for the latest gadgets, fashion essentials, or home
            must-haves, we’ve got you covered with a wide range of items you’ll
            love.
          </p>

          <p
            style={{
              fontSize: "clamp(15px, 2vw, 18px)",
              lineHeight: "1.7",
              marginBottom: "24px",
              padding: "0 10px",
            }}
          >
            At BEST - Cart, customer satisfaction is our top priority. That’s why
            we offer <strong>24/7 support</strong>, <strong>fast delivery</strong>,
            and <strong>secure payment options</strong> to give you the best
            shopping experience possible.
          </p>

          <p
            style={{
              fontSize: "clamp(15px, 2vw, 18px)",
              lineHeight: "1.7",
              marginBottom: "32px",
              padding: "0 10px",
            }}
          >
            We believe that shopping should be more than just buying — it should
            be about discovering great deals, enjoying seamless service, and
            trusting a brand that cares. That’s what makes us the
            <strong> BEST choice for smart shoppers.</strong>
          </p>

          <button
            onClick={() => navigate("/")}
            style={{
              backgroundColor: "#007BFF",
              color: "#fff",
              border: "none",
              padding: "12px 28px",
              borderRadius: "8px",
              fontSize: "16px",
              cursor: "pointer",
              transition: "background 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#007BFF")}
          >
            Start Shopping
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
