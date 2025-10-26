import React from "react";

const Login = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        color: "#6b7280",
        maxWidth: "24rem",
        margin: "1rem",
        padding: "1.5rem",
        textAlign: "left",
        fontSize: "0.875rem",
        borderRadius: "0.75rem",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
      }}
    >
      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: 600,
          marginBottom: "1.5rem",
          textAlign: "center",
          color: "#1f2937",
        }}
      >
        Sign In
      </h2>

      <form>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          required
          style={{
            width: "100%",
            backgroundColor: "transparent",
            border: "1px solid rgba(107,114,128,0.3)",
            outline: "none",
            borderRadius: "9999px",
            padding: "0.625rem 1rem",
            margin: "0.75rem 0",
            boxSizing: "border-box",
          }}
        />

        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          required
          style={{
            width: "100%",
            backgroundColor: "transparent",
            border: "1px solid rgba(107,114,128,0.3)",
            outline: "none",
            borderRadius: "9999px",
            padding: "0.625rem 1rem",
            marginTop: "0.25rem",
            boxSizing: "border-box",
          }}
        />

        <div style={{ textAlign: "right", padding: "1rem 0" }}>
          <a href="#" style={{ color: "#2563eb", textDecoration: "underline" }}>
            Forgot Password
          </a>
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            marginBottom: "0.75rem",
            backgroundColor: "#6366f1",
            padding: "0.625rem 0",
            border: "none",
            borderRadius: "9999px",
            color: "white",
            cursor: "pointer",
          }}
        >
          Log in
        </button>
      </form>

      <p style={{ textAlign: "center", marginTop: "1rem" }}>
        Don’t have an account?{" "}
        <a href="#" style={{ color: "#3b82f6", textDecoration: "underline" }}>
          Signup
        </a>
      </p>
    </div>
  );
};

export default Login;
