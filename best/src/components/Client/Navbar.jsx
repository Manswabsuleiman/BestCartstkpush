import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      style={{
        backgroundColor: "#f8f9fa",
        position: "sticky",
        top: 0,
        zIndex: 100,
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
        }}
      >
        <h2 style={{ fontSize: "1.4rem", margin: 0 }}>
          BEST - <span style={{ color: "blue" }}>Cart</span>
        </h2>

        {/* Hamburger menu for mobile */}
        <div
          onClick={() => setMenuOpen((s) => !s)}
          style={{
            cursor: "pointer",
            fontSize: "28px",
            display: isMobile ? "block" : "none",
            userSelect: "none",
          }}
          aria-hidden
        >
          ☰
        </div>

        {/* Desktop menu */}
        {!isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <NavLink to="/" style={linkStyle} end>Home</NavLink>
            <NavLink to="/about" style={linkStyle}>About</NavLink>
            <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
            <NavLink to="/blog" style={linkStyle}>Blog</NavLink>

            <button onClick={() => navigate("/cart")} style={cartBtn}>
              Add to Cart
            </button>

            {/*------------------------Clerk Auth-------------------*/}
            <SignedOut>
              <SignInButton>
                <button style={loginBtn}>Login</button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        )}
      </div>

      {isMobile && menuOpen && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#fff",
            borderTop: "1px solid #ddd",
            padding: "10px 20px",
            transition: "all 0.25s ease",
          }}
        >
          <NavLink to="/" onClick={() => setMenuOpen(false)} style={mobileLinkStyle} end>Home</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)} style={mobileLinkStyle}>About</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)} style={mobileLinkStyle}>Contact</NavLink>
          <NavLink to="/blog" onClick={() => setMenuOpen(false)} style={mobileLinkStyle}>Blog</NavLink>

          <button
            style={{ ...cartBtn, marginTop: 10 }}
            onClick={() => {
              setMenuOpen(false);
              navigate("/cart");
            }}
          >
            Add to Cart
          </button>

          {/* Clerk auth in mobile menu */}
          <SignedOut>
            <SignInButton>
              <button style={{ ...loginBtn, marginTop: 10 }}>Login</button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton style={{ marginTop: 10 }} />
          </SignedIn>
        </div>
      )}
    </nav>
  );
};

// Styles
const linkStyle = ({ isActive }) => ({
  textDecoration: "none",
  color: isActive ? "#007bff" : "#333",
  fontWeight: isActive ? 700 : 500,
  transition: "color 0.2s",
});

const mobileLinkStyle = {
  textDecoration: "none",
  color: "#333",
  fontWeight: 500,
  padding: "10px 0",
  borderBottom: "1px solid #eee",
};

const cartBtn = {
  padding: "8px 14px",
  backgroundColor: "#fff",
  border: "1px solid #ccc",
  borderRadius: 6,
  cursor: "pointer",
  fontWeight: 500,
};

const loginBtn = {
  padding: "8px 14px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: 6,
  cursor: "pointer",
  fontWeight: 500,
};

export default Navbar;
