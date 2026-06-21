import React from "react";
import useScrollSpy from "../hooks/useScrollSpy"
import scrollToSection from "../utills/scrollToSection";

const Navbar = () => {
  const activeSection = useScrollSpy([
    "home",
    "about",
    "skills",
    "projects",
    "contact",
  ]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top shadow">
      <div className="container">

        {/* Logo */}
        <button
          className="navbar-brand btn btn-link text-decoration-none fw-bold fs-3 text-primary p-0"
          onClick={() => scrollToSection("home")}
        >
          Pranay Hazra<span className="text-white"></span>
        </button>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-lg-center">

            <li className="nav-item">
              <button
                className={`nav-link btn btn-link text-decoration-none ${
                  activeSection === "home"
                    ? "text-primary fw-bold"
                    : "text-white"
                }`}
                onClick={() => scrollToSection("home")}
              >
                Home
              </button>
            </li>

            <li className="nav-item">
              <button
                className={`nav-link btn btn-link text-decoration-none ${
                  activeSection === "about"
                    ? "text-primary fw-bold"
                    : "text-white"
                }`}
                onClick={() => scrollToSection("about")}
              >
                About
              </button>
            </li>

            <li className="nav-item">
              <button
                className={`nav-link btn btn-link text-decoration-none ${
                  activeSection === "skills"
                    ? "text-primary fw-bold"
                    : "text-white"
                }`}
                onClick={() => scrollToSection("skills")}
              >
                Skills
              </button>
            </li>

            <li className="nav-item">
              <button
                className={`nav-link btn btn-link text-decoration-none ${
                  activeSection === "projects"
                    ? "text-primary fw-bold"
                    : "text-white"
                }`}
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </button>
            </li>

            <li className="nav-item">
              <button
                className={`nav-link btn btn-link text-decoration-none ${
                  activeSection === "contact"
                    ? "text-primary fw-bold"
                    : "text-white"
                }`}
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </button>
            </li>

            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
              <a
                href="/resume.pdf"
                download
                className="btn btn-primary"
              >
                Download CV
              </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;