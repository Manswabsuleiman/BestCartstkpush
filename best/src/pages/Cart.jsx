import React from "react";
import { useCart } from "../CartContext";
import Navbar from "../components/Client/Navbar";
import Footer from "../components/Client/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    toast.success("You will receive your product within 24 hours!");


  };

  return (
    <>
      <Navbar />

      <div style={{ padding: 20, maxWidth: "900px", margin: "0 auto" }}>
        <h1>Your Cart</h1>

        {cart.length === 0 ? (
          <h2 style={{marginLeft: "42%"}}>Your cart is empty!</h2>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px solid #ccc",
                  padding: "10px 0",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                  <img
                    src={item.img || item.image}
                    alt={item.name}
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                  <div>
                    <span style={{ fontWeight: 600 }}>{item.name}</span>
                    <div>Quantity: {item.quantity || 1}</div>
                  </div>
                </div>


              </div>
            ))}

            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px" }}>
              <button
                onClick={handlePlaceOrder}
                style={{
                  background: "#000000ff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  padding: "12px 25px",
                  fontSize: "16px",
                  cursor: "pointer",
                  padding: "10px 10px",
                  marginLeft: "20px",
                }}
              >
                Place Order
              </button>
            </div>
          </>
        )}

        <ToastContainer position="top-right" autoClose={6000} />
      </div>

      <Footer />
    </>
  );
};

export default Cart;
