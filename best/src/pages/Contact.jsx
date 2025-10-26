import React, { useState } from "react";
import Navbar from "../components/Client/Navbar";
import Footer from "../components/Client/Footer";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [position, setPosition] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Message sent!\n\nName: ${formData.name}\nEmail: ${formData.email}\nLocation: ${
        position ? `${position.lat}, ${position.lng}` : "Not selected"
      }`
    );
    setFormData({ name: "", email: "", message: "" });
  };

  const LocationMarker = () => {
    useMapEvents({
      click(e) {
        setPosition(e.latlng);
      },
    });

    return position ? <Marker position={position} /> : null;
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />

      <main style={{ backgroundColor: "#f9f9f9", padding: "50px 20px", flex: 1 }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontSize: "clamp(24px, 5vw, 32px)",
              fontWeight: "700",
              color: "#111",
              marginBottom: "16px",
            }}
          >
            Contact <span style={{ color: "#007BFF" }}>BEST - Cart</span>
          </h2>

          <p
            style={{
              fontSize: "clamp(14px, 2vw, 16px)",
              lineHeight: "1.7",
              marginBottom: "28px",
              padding: "0 10px",
            }}
          >
            Have a question or need assistance? You can also pin your delivery
            location on the map below — this helps us ensure faster and more
            accurate deliveries!
          </p>

          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              backgroundColor: "#fff",
              padding: "25px",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              width: "100%",
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              style={{ ...inputStyle, resize: "none" }}
            />

            <div
              style={{
                height: "300px",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <MapContainer
                center={[-1.286389, 36.817223]}
                zoom={13}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LocationMarker />
              </MapContainer>
            </div>

            {position && (
              <p style={{ fontSize: "13px", color: "#555" }}>
                📍 Selected Location: {position.lat.toFixed(5)}, {position.lng.toFixed(5)}
              </p>
            )}

            <button
              type="submit"
              style={{
                backgroundColor: "#007BFF",
                color: "#fff",
                border: "none",
                padding: "12px 28px",
                borderRadius: "8px",
                fontSize: "16px",
                cursor: "pointer",
                width: "fit-content",
                margin: "0 auto",
              }}
            >
              Send Message
            </button>
          </form>

          <div style={{ marginTop: "35px", fontSize: "14px", color: "#666" }}>
            <p>Address: Nairobi, Kenya</p>
            <p>Phone: +254 700 000 000</p>
            <p>Email: support@bestcart.com</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

const inputStyle = {
  padding: "12px",
  border: "1px solid #ccc",
  borderRadius: "6px",
  fontSize: "15px",
  width: "100%",
  boxSizing: "border-box",
};

export default Contact;
