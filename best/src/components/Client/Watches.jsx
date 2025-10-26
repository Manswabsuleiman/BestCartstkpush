import React from "react";
import axios from "axios"; // 👈 add axios for backend calls
import { useNavigate } from "react-router-dom";

const Watches = () => {
  const navigate = useNavigate();

  // ✅ Replace this link with your actual Ngrok HTTPS URL
  const API_URL = "https://bestcarstkpush.onrender.com/stkpush";

  const handleBuyNow = async (price) => {
    try {
      // Example: extract amount from "KSh 8,778"
      const amount = price.replace(/[^0-9]/g, "");

      // 👇 Set your test phone number in international format
      const phone = "254757080514";

      const response = await axios.post(API_URL, { phone, amount });

      console.log("✅ Payment initiated:", response.data);
      alert("STK Push sent to your phone!");
    } catch (error) {
      console.error("❌ Error sending payment:", error);
      alert("Payment failed. Check console for details.");
    }
  };

  const watches = [
    { id: 1, name: "Rolex Submariner", img: "/Pictures/Watch1.png", price: "KSh 8778" },
    { id: 2, name: "Omega Seamaster", img: "/Pictures/Watch2.png", price: "KSh 15546" },
    { id: 3, name: "Tag Heuer Carrera", img: "/Pictures/Watch3.png", price: "KSh 10352" },
    { id: 4, name: "Audemars Piguet Royal Oak", img: "/Pictures/Watch4.png", price: "KSh 23065" },
    { id: 5, name: "Patek Philippe Nautilus", img: "/Pictures/Watch5.png", price: "KSh 17999" },
    { id: 6, name: "Breitling Navitimer", img: "/Pictures/Watch6.png", price: "KSh 14999" },
    { id: 7, name: "Hublot Classic Fusion", img: "/Pictures/Watch7.png", price: "KSh 22643" },
    { id: 8, name: "Cartier Santos", img: "/Pictures/Watch8.png", price: "KSh 21579" },
    { id: 9, name: "Olevs Watch", img: "/Pictures/WatchBiden.png", price: "KSh 23654" },
  ];

  return (
    <div style={{ backgroundColor: "#f8f8f8", paddingBottom: "60px" }}>
      <h2
        style={{
          textAlign: "center",
          margin: "50px 0 40px",
          fontSize: "30px",
          color: "#222",
          fontWeight: "700",
          letterSpacing: "0.5px",
        }}
      >
        Luxury Watches
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "24px",
          padding: "0 40px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {watches.map((watch) => (
          <div
            key={watch.id}
            style={{
              background: "#fff",
              borderRadius: "14px",
              boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
              padding: "20px",
              textAlign: "center",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.08)";
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "200px",
              }}
            >
              <img
                src={watch.img}
                alt={watch.name}
                style={{
                  width: "100%",
                  maxWidth: "200px",
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: "10px",
                }}
              />
            </div>

            <div style={{ marginTop: "15px" }}>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#111",
                  marginBottom: "6px",
                }}
              >
                {watch.name}
              </h3>
              <p
                style={{
                  color: "#007BFF",
                  fontWeight: "700",
                  fontSize: "16px",
                  marginBottom: "16px",
                }}
              >
                {watch.price}
              </p>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                marginTop: "auto",
              }}
            >
              <button
                onClick={() => navigate(`/watch/${watch.id}/details`)}
                style={{
                  background: "#111",
                  color: "#fff",
                  padding: "8px 16px",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                View Details
              </button>

              {/* ✅ Buy Now button triggers STK Push */}
              <button
                onClick={() => handleBuyNow(watch.price)}
                style={{
                  background: "linear-gradient(135deg, #007BFF, #0056b3)",
                  color: "#fff",
                  padding: "8px 16px",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watches;
