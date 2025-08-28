import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("✅ Login successful!");
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/dashboard");
      } else {
        alert("❌ " + data.message);
      }
    } catch (err) {
      console.error(err);
      alert("❌ Server error");
    }
  };

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .auth-bg {
        background: url("https://images.unsplash.com/photo-1531297484001-80022131f5a1")
          no-repeat center center/cover;
        position: relative; overflow: hidden;
      }
      .auth-bg::before {
        content: ""; position: absolute; inset: 0;
        background: linear-gradient(120deg, rgba(0, 201, 255, 0.35), rgba(146, 254, 157, 0.35));
        animation: gradientMove 12s ease-in-out infinite alternate; z-index: 0;
      }
      .auth-bg > * { position: relative; z-index: 1; }
      @keyframes gradientMove {
        0% { background-position: 0% 50%; filter: hue-rotate(0deg); }
        100% { background-position: 100% 50%; filter: hue-rotate(25deg); }
      }
    `;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  return (
    <div className="auth-bg d-flex align-items-center justify-content-center vh-100">
      <div className="card shadow-lg border-0 p-4" style={{
        width: "400px", borderRadius: "16px",
        background: "rgba(255, 255, 255, 0.9)", backdropFilter: "blur(10px)"
      }}>
        <div className="text-center mb-4">
          <h2 className="fw-bold text-info">ZOFIO AI</h2>
          <p className="text-muted">Sign in to your account</p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <div className="input-group">
              <span className="input-group-text bg-light"><FaUser /></span>
              <input type="email" className="form-control" placeholder="Enter email" required />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <div className="input-group">
              <span className="input-group-text bg-light"><FaLock /></span>
              <input type="password" className="form-control" placeholder="Enter password" required />
            </div>
          </div>

          <button type="submit" className="btn btn-info w-100 text-white fw-semibold shadow-sm">
            Sign In
          </button>
        </form>

        <div className="d-flex justify-content-between mt-3">
          <Link to="/forgot-password" className="small text-muted">Forgot password?</Link>
          <Link to="/register" className="small text-info fw-semibold">Create account</Link>
        </div>
      </div>
    </div>
  );
}
