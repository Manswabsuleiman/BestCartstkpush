import React from "react";
import { Link } from "react-router-dom";

const FeaturedBrands = () => {
  const brandImages = ["Apple", "SONY", "Samsung", "Canon", "Lenovo"];

  const blogCardStyle = {
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    borderRadius: "12px",
    overflow: "hidden",
    backgroundColor: "#fff",
    transition: "transform 0.3s ease",
  };

  return (
    <div style={{ padding: "40px 20px", fontFamily: "sans-serif" }}>
      

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
        <h2 style={{ fontSize: "28px", fontWeight: "700", color: "#222", marginBottom: "20px" }}>
          Featured Brands
        </h2>
        <Link
          to="/brand-details"
          style={{
            fontSize: "15px",
            fontWeight: "600",
            color: "#007bff",
            textDecoration: "none",
            marginBottom: "20px",
          }}
        >
          View all →
        </Link>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
          gap: "25px",
          alignItems: "center",
          justifyItems: "center",
          marginBottom: "60px",
        }}
      >
        {brandImages.map((brand) => (
          <img
            key={brand}
            src={`./Pictures/${brand}.png`}
            alt={brand}
            style={{
              width: "100px",
              height: "auto",
              objectFit: "contain",
              cursor: "pointer",
              filter: "grayscale(20%)",
              transition: "transform 0.3s ease, filter 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.1)";
              e.target.style.filter = "none";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.filter = "grayscale(20%)";
            }}
          />
        ))}
      </div>

      <div style={{ padding: "40px 0", backgroundColor: "#fafafa" }}>
        <h2
          style={{
            fontSize: "26px",
            fontWeight: "bold",
            marginBottom: "40px",
            textAlign: "center",
            color: "#222",
          }}
        >
          Our Blogs
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "25px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              ...blogCardStyle,
              width: "100%",
              maxWidth: "460px",
            }}
          >
            <img
              src="./Pictures/OurBlogsMeta.png"
              alt="Meta Blog"
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
              }}
            />
            <div style={{ padding: "18px" }}>
              <p style={{ fontSize: "13px", color: "gray", marginBottom: "5px" }}>
                📅 August 8, 2023 • ⏱ 3 min read
              </p>
              <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "8px" }}>
                Meta Platforms plans to release free AI tools
              </h3>
              <p style={{ color: "#555", fontSize: "14px", lineHeight: "1.5" }}>
                The parent company of Facebook, Meta Platforms, is introducing software to help
                developers create AI-driven tools easily.
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "25px",
              width: "100%",
              maxWidth: "460px",
            }}
          >
            {[
              {
                img: "./Pictures/Headset.png",
                title: "8 Things You Probably Didn’t Know About Headphones",
                desc: "Owning headphones could mean different things for different people. For some, it’s about style — for others, quality sound.",
                date: "📅 March 28, 2023 • ⏱ 4 min read",
              },
              {
                img: "./Pictures/Bitcoin.png",
                title: "Analyzing the August 17th Bitcoin Price Drop",
                desc: "On August 17th, Bitcoin’s price dropped by more than 8% in 10 minutes — here’s what caused it.",
                date: "📅 August 17, 2023 • ⏱ 2 min read",
              },
            ].map((blog, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  ...blogCardStyle,
                  width: "100%",
                }}
              >
                <img
                  src={blog.img}
                  alt={blog.title}
                  style={{
                    width: "180px",
                    height: "120px",
                    objectFit: "cover",
                    flexShrink: 0,
                  }}
                />
                <div style={{ padding: "15px" }}>
                  <h3
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      color: i === 0 ? "#ff4500" : "#222",
                      marginBottom: "8px",
                    }}
                  >
                    {blog.title}
                  </h3>
                  <p
                    style={{
                      color: "#555",
                      fontSize: "13px",
                      lineHeight: "1.4",
                      marginBottom: "6px",
                    }}
                  >
                    {blog.desc}
                  </p>
                  <p style={{ fontSize: "12px", color: "gray" }}>{blog.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "30px",
          backgroundColor: "#fff",
          padding: "20px",
          marginTop: "40px",
          borderTop: "1px solid #eee",
        }}
      >
        <span style={{ fontSize: "15px", color: "#333" }}>🚚 Free Shipping over $1000</span>
        <span style={{ fontSize: "15px", color: "#333" }}>📞 24/7 Support</span>
      </div>
    </div>
  );
};

export default FeaturedBrands;

