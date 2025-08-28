import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaRobot,
  FaCloud,
  FaChartLine,
  FaUsers,
  FaCogs,
  FaBriefcase,
  FaStar,
  FaBell,
  FaPlayCircle,
} from "react-icons/fa";

export default function Dashboard() {
  const navigate = useNavigate();

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token"); // clear auth token/session
    navigate("/"); // redirect to login page
  };

  const products = [
    { title: "AI Chatbot", icon: <FaRobot />, img: "https://picsum.photos/id/1005/400/250" },
    { title: "Cloud AI Platform", icon: <FaCloud />, img: "https://picsum.photos/id/1015/400/250" },
    { title: "Analytics Dashboard", icon: <FaChartLine />, img: "https://picsum.photos/id/1011/400/250" },
    { title: "ZofioPro Recruiter", icon: <FaUsers />, img: "https://picsum.photos/id/1006/400/250", link: "/recruiter" },
  ];

  const demos = [
    {
      title: "AI Chatbot Demo",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
      profile: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "John Doe",
      role: "Product Manager",
      description:
        "Explore an in-depth demonstration of our AI Chatbot, highlighting its advanced features, seamless interaction, and real-world applications.",
    },
    {
      title: "Cloud AI Platform Demo",
      video: "https://www.w3schools.com/html/movie.mp4",
      profile: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Jane Smith",
      role: "AI Engineer",
      description:
        "Experience the full capabilities of our Cloud AI Platform, designed for scalable, intelligent solutions across enterprise applications.",
    },
  ];

  const services = [
    { icon: <FaUsers />, title: "AI User Insights" },
    { icon: <FaCogs />, title: "Automation Solutions" },
    { icon: <FaChartLine />, title: "Data Analytics" },
  ];

  const notifications = [
    "New AI Chatbot feature released!",
    "Cloud AI Platform maintenance scheduled.",
    "Analytics Dashboard updated with new charts.",
  ];

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
        <div className="container">
          <a className="navbar-brand fw-bold text-info" href="#">ZOFIO AI</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#products">AI Products</a></li>
              <li className="nav-item"><a className="nav-link" href="#clients">Clients</a></li>
              <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
              <li className="nav-item"><a className="nav-link" href="#careers">Careers</a></li>
              <li className="nav-item ms-3">
                <FaBell className="text-info" size={20} />
              </li>
              <li className="nav-item ms-3">
                <button
                  className="btn btn-sm btn-outline-info"
                  onClick={() => navigate("/recruiter")}
                >
                  ZofioPro
                </button>
              </li>
              <li className="nav-item ms-3">
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="text-center text-light d-flex align-items-center justify-content-center"
        style={{
          height: "100vh",
          backgroundImage: "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.div
          className="bg-dark bg-opacity-75 p-5 rounded"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="fw-bold display-4 text-info">ZOFIO AI Dashboard</h1>
          <p className="lead">Innovative AI • Cloud • Analytics • Future Tech</p>
        </motion.div>
      </section>

      {/* AI Products Section */}
      <section id="products" className="container py-5">
        <h2 className="text-center mb-4 fw-bold text-info">Our AI Products</h2>
        <div className="row g-4">
          {products.map((p, i) => (
            <motion.div key={i} className="col-md-4" whileHover={{ scale: 1.05 }}>
              <div className="card shadow h-100">
                <img src={p.img} className="card-img-top" alt={p.title} />
                <div className="card-body text-center">
                  <div className="display-5 text-info">{p.icon}</div>
                  <h5 className="card-title mt-2">{p.title}</h5>
                  <p className="text-warning">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </p>
                  {p.link ? (
                    <button
                      className="btn btn-info text-white"
                      onClick={() => navigate(p.link)}
                    >
                      Explore
                    </button>
                  ) : (
                    <button className="btn btn-info text-white">Learn More</button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Product Demo Videos Section */}
      <section id="demos" className="container py-5">
        <h2 className="text-center mb-5 fw-bold text-info">Product Demo Videos</h2>
        <div className="row g-4">
          {demos.map((demo, i) => (
            <motion.div key={i} className="col-md-6" whileHover={{ scale: 1.03 }}>
              <div className="card shadow-lg overflow-hidden h-100 border-0">
                <div className="position-relative">
                  <video
                    className="card-img-top"
                    src={demo.video}
                    controls
                    style={{ borderRadius: "0.5rem" }}
                  />
                  <motion.div
                    className="position-absolute top-50 start-50 translate-middle text-white"
                    whileHover={{ scale: 1.2 }}
                    style={{ fontSize: "3rem", cursor: "pointer", opacity: 0.8 }}
                  >
                    <FaPlayCircle />
                  </motion.div>
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">{demo.title}</h5>
                  <div className="d-flex align-items-center justify-content-center mt-3">
                    <img
                      src={demo.profile}
                      alt={demo.name}
                      className="rounded-circle me-3 border border-info"
                      width={55}
                      height={55}
                    />
                    <div className="text-start">
                      <p className="mb-0 fw-bold">{demo.name}</p>
                      <small className="text-muted">{demo.role}</small>
                    </div>
                  </div>
                  <p className="mt-3 text-muted">{demo.description}</p>
                  <button className="btn btn-info mt-2 text-white">
                    Watch Demo
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Notifications Section */}
      <section id="notifications" className="container py-5">
        <h2 className="text-center mb-4 fw-bold text-info">Notifications</h2>
        <div className="list-group">
          {notifications.map((note, i) => (
            <div key={i} className="list-group-item list-group-item-action">
              {note}
            </div>
          ))}
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="bg-light py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4 text-info">Our Clients</h2>
          <p>
            Trusted by <span className="fw-bold text-dark">10,000+ Businesses</span> worldwide 🌍
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container py-5">
        <h2 className="text-center mb-4 fw-bold text-info">AI Services</h2>
        <div className="row g-4 text-center">
          {services.map((s, i) => (
            <motion.div key={i} className="col-md-4" whileHover={{ scale: 1.05 }}>
              <div className="card p-4 shadow h-100">
                <div className="display-4 text-info">{s.icon}</div>
                <h5 className="mt-3">{s.title}</h5>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="bg-dark text-light py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4 text-info">Careers</h2>
          <p>We’re building the future with AI – and you can be part of it</p>
          <button className="btn btn-outline-info">
            <FaBriefcase /> Join Our Team
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        © 2025 ZOFIO AI | Building the Future of Intelligence
      </footer>
    </div>
  );
}
