import React, { useState } from "react";
import Navbar from "../components/Client/Navbar";
import Footer from "../components/Client/Footer";

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const blogs = [
    {
      id: 1,
      title: "Top 10 Must-Have Gadgets of 2025",
      date: "September 18, 2025",
      image: "./Pictures/Gadget.png",
      snippet:
        "Discover the latest and most innovative gadgets that make life easier, smarter, and more fun in 2025.",
      content:
        "Technology evolves every year, and 2025 has brought some truly mind-blowing gadgets to the market. From AI-powered home assistants to foldable smartphones and next-gen wearables, these devices redefine convenience and style. Here’s our curated list of top picks every tech lover should own this year.",
    },
    {
      id: 2,
      title: "5 Smart Tips for Online Shopping Safety",
      date: "September 19, 2025",
      image: "./Pictures/Online.png",
      snippet:
        "Online shopping is convenient — but staying safe is crucial. Here’s how to protect your data and your wallet.",
      content:
        "Shopping online is easier than ever, but cyber threats are on the rise. Always use trusted websites, avoid public Wi-Fi when entering payment info, and keep your passwords strong. Learn how to spot fake sellers and ensure your shopping stays secure.",
    },
    {
      id: 3,
      title: "Eco-Friendly Packaging: Our Step Toward Sustainability",
      date: "August 20, 2025",
      image: "./Pictures/Friendly.png",
      snippet:
        "BEST - Cart is proud to introduce 100% recyclable packaging — small change, big impact.",
      content:
        "We believe in responsible shopping. Our new eco-friendly packaging initiative reduces waste and carbon footprint. Every order you make contributes to a cleaner planet. Discover how we’re turning sustainability into a lifestyle choice for our customers.",
    },
  ];

  return (
    <div>
      <Navbar />

      <div
        style={{
          backgroundColor: "#f9f9f9",
          padding: "60px 20px",
          textAlign: "center",
          color: "#333",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(24px, 5vw, 32px)",
            marginBottom: "20px",
            fontWeight: "700",
            color: "#111",
          }}
        >
          Our <span style={{ color: "#007BFF" }}>Blog</span>
        </h2>
        <p
          style={{
            fontSize: "clamp(14px, 2vw, 16px)",
            marginBottom: "50px",
            color: "#555",
            padding: "0 10px",
          }}
        >
          Explore tips, trends, and updates from the world of shopping, tech, and
          sustainability.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          {blogs.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              style={{
                backgroundColor: "#fff",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                transition: "transform 0.3s, box-shadow 0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 6px 15px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 10px rgba(0,0,0,0.1)";
              }}
            >
              <img
                src={post.image}
                alt={post.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
              <div style={{ padding: "20px" }}>
                <h3
                  style={{
                    fontSize: "clamp(18px, 3vw, 20px)",
                    fontWeight: "600",
                    marginBottom: "10px",
                    color: "#111",
                  }}
                >
                  {post.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#888",
                    marginBottom: "10px",
                  }}
                >
                  {post.date}
                </p>
                <p
                  style={{
                    fontSize: "15px",
                    color: "#555",
                    lineHeight: "1.6",
                  }}
                >
                  {post.snippet}
                </p>
                <button
                  style={{
                    marginTop: "15px",
                    backgroundColor: "#007BFF",
                    color: "#fff",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "6px",
                    fontSize: "14px",
                    cursor: "pointer",
                    transition: "background 0.3s",
                  }}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedPost && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.6)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 999,
              padding: "20px",
            }}
            onClick={() => setSelectedPost(null)}
          >
            <div
              style={{
                background: "#fff",
                borderRadius: "10px",
                maxWidth: "700px",
                width: "100%",
                padding: "30px",
                textAlign: "left",
                position: "relative",
                maxHeight: "90vh",
                overflowY: "auto",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPost(null)}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "15px",
                  background: "transparent",
                  border: "none",
                  fontSize: "22px",
                  cursor: "pointer",
                }}
              >
                ✖
              </button>
              <h2
                style={{
                  fontSize: "clamp(20px, 4vw, 26px)",
                  marginBottom: "10px",
                  color: "#111",
                }}
              >
                {selectedPost.title}
              </h2>
              <p
                style={{
                  fontSize: "14px",
                  color: "#888",
                  marginBottom: "20px",
                }}
              >
                {selectedPost.date}
              </p>
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                style={{
                  width: "100%",
                  maxHeight: "300px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "20px",
                }}
              />
              <p
                style={{
                  fontSize: "16px",
                  color: "#333",
                  lineHeight: "1.7",
                }}
              >
                {selectedPost.content}
              </p>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
