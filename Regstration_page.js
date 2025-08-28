import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

export default function RegisterPage() {
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("✅ Registration successful! Please login.");
        navigate("/");
      } else {
        alert("❌ " + data.message);
      }
    } catch (err) {
      console.error(err);
      alert("❌ Server error");
    }
  };

  // Background animation
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .auth-bg {
        background: url("https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80")
          no-repeat center center/cover;
        position: relative;
        overflow: hidden;
      }
      .auth-bg::before {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(
          135deg,
          rgba(13, 202, 240, 0.4),
          rgba(102, 16, 242, 0.35)
        );
        animation: gradientShift 10s ease-in-out infinite alternate;
        z-index: 0;
      }
      .auth-bg > * {
        position: relative;
        z-index: 1;
      }
      @keyframes gradientShift {
        0% { background-position: left top; filter: hue-rotate(0deg); }
        100% { background-position: right bottom; filter: hue-rotate(25deg); }
      }
    `;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  return (
    <div className="auth-bg d-flex align-items-center justify-content-center vh-100">
      <div className="card shadow-lg p-4 border-0" style={{
        width: "420px", borderRadius: "18px",
        background: "rgba(255, 255, 255, 0.88)", backdropFilter: "blur(12px)"
      }}>
        <div className="text-center mb-4">
          <h2 style={{
            background: "linear-gradient(90deg,#0dcaf0,#6610f2)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
          }}>ZOFIO AI</h2>
          <p className="text-muted">Create your account</p>
        </div>

        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Username</label>
            <div className="input-group">
              <span className="input-group-text bg-light border-0"><FaUser /></span>
              <input type="text" className="form-control border-0 shadow-sm" placeholder="Enter username" required />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <div className="input-group">
              <span className="input-group-text bg-light border-0"><FaEnvelope /></span>
              <input type="email" className="form-control border-0 shadow-sm" placeholder="Enter email" required />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <div className="input-group">
              <span className="input-group-text bg-light border-0"><FaLock /></span>
              <input type="password" className="form-control border-0 shadow-sm" placeholder="Enter password" required />
            </div>
          </div>

          <button type="submit" className="btn w-100 fw-semibold text-white shadow-sm"
            style={{ background: "linear-gradient(90deg,#0dcaf0,#6610f2)", borderRadius: "10px" }}>
            Register
          </button>
        </form>

        <p className="text-center mt-3">Already have an account?{" "}
          <Link to="/" style={{ color: "#6610f2", fontWeight: "600" }}>Login</Link>
        </p>
      </div>
    </div>
  );
}
