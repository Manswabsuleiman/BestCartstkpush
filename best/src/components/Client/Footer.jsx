import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#001F3F",
        color: "white",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "40px",
        }}
      >
        <div style={{ flex: "1 1 250px", minWidth: "250px" }}>
          <h3>
            BEST - <span style={{ color: "blue" }}>Cart</span>
          </h3>
          <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>

          <div style={{ display: "flex", gap: "15px", marginTop: "20px", flexWrap: "wrap" }}>
            <span style={socialIconStyle}>Instagram</span>
            <span style={socialIconStyle}>Facebook</span>
            <span style={socialIconStyle}>Twitter</span>
            <span style={socialIconStyle}>LinkedIn</span>
          </div>
        </div>

        <div style={{ flex: "1 1 150px", minWidth: "150px" }}>
          <p style={sectionTitleStyle}>COMPANY</p>
          <ul style={listStyle}>
            <li>
              <a href="/about" style={linkStyle}>
                About
              </a>
            </li>
            <li>
              <a href="/contact" style={linkStyle}>
                Contact
              </a>
            </li>
            <li>
              <a href="/blog" style={linkStyle}>
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div style={{ flex: "1 1 180px", minWidth: "180px" }}>
          <p style={sectionTitleStyle}>SUPPORT</p>
          <ul style={listStyle}>
            <li>
              <a href="#" style={linkStyle}>
                Help Center
              </a>
            </li>
            <li>
              <a href="#" style={linkStyle}>
                Safety Information
              </a>
            </li>
            <li>
              <a href="#" style={linkStyle}>
                Cancellation Options
              </a>
            </li>
            <li>
              <a href="#" style={linkStyle}>
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" style={linkStyle}>
                Accessibility
              </a>
            </li>
          </ul>
        </div>

        <div style={{ flex: "1 1 250px", minWidth: "250px" }}>
          <p style={sectionTitleStyle}>STAY UPDATED</p>
          <p style={{ fontSize: "14px", marginTop: "12px", lineHeight: "1.6" }}>
            Subscribe to our newsletter for inspiration and special offers.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              marginTop: "15px",
              gap: "10px",
            }}
          >
            <input
              type="text"
              placeholder="Your email"
              style={{
                flex: "1 1 auto",
                minWidth: "180px",
                backgroundColor: "white",
                color: "#001F3F",
                border: "none",
                borderRadius: "4px",
                height: "36px",
                paddingLeft: "10px",
                outline: "none",
              }}
            />
            <button
              style={{
                backgroundColor: "#004080",
                border: "none",
                height: "36px",
                padding: "0 14px",
                color: "white",
                borderRadius: "4px",
                cursor: "pointer",
                fontWeight: "bold",
                flexShrink: 0,
              }}
            >
              →
            </button>
          </div>
        </div>
      </div>

      <hr
        style={{
          borderColor: "rgba(255, 255, 255, 0.2)",
          marginTop: "40px",
          marginBottom: "20px",
        }}
      />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "10px",
          paddingBottom: "30px",
        }}
      >
        <p style={{ fontSize: "13px" }}>
          © {new Date().getFullYear()}{" "}
          <a href="#" style={linkStyle}>
            BEST<span style={{ color: "blue" }}> - Cart</span>
          </a>
          . All rights reserved.
        </p>
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <a href="#" style={linkStyle}>
              Privacy
            </a>
          </li>
          <li>
            <a href="#" style={linkStyle}>
              Terms
            </a>
          </li>
          <li>
            <a href="#" style={linkStyle}>
              Sitemap
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const sectionTitleStyle = {
  fontSize: "16px",
  fontWeight: "bold",
  color: "white",
  marginBottom: "10px",
};

const listStyle = {
  listStyle: "none",
  margin: 0,
  padding: 0,
  display: "flex",
  flexDirection: "column",
  gap: "6px",
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "14px",
};

const socialIconStyle = {
  fontSize: "13px",
  color: "white",
  opacity: 0.8,
  cursor: "pointer",
};

export default Footer;
