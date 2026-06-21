import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-black text-white py-4 border-top border-secondary">
      <div className="container">

        <div className="row align-items-center gy-4">

          {/* Left */}

          <div className="col-lg-4 text-center text-lg-start">
            <h4 className="fw-bold text-primary mb-1">
              Pranay Hazra
            </h4>

            <p className="text-secondary mb-0">
              Full Stack MERN Developer
            </p>
          </div>

          {/* Center */}

          <div className="col-lg-4 text-center">

            <a
              href="https://github.com/PranayHazra-007"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white fs-4 mx-3"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/pranay-hazra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white fs-4 mx-3"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:pranayhazra034@gmail.com"
              className="text-white fs-4 mx-3"
            >
              <FaEnvelope />
            </a>

          </div>

          {/* Right */}

          <div className="col-lg-4 text-center text-lg-end">

            <button
              onClick={scrollToTop}
              className="btn btn-primary rounded-circle"
            >
              <FaArrowUp />
            </button>

          </div>

        </div>

        <hr className="border-secondary my-4" />

        <div className="text-center text-secondary">
          © 2026 Pranay Hazra. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;