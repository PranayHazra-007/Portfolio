import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import profile from "../assets/images/profile.jpeg";
import resume from "../assets/images/pranay.pdf"

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-dark text-white min-vh-100 d-flex align-items-center"
    >
      <div className="container">
        <div className="row align-items-center gy-5">

          {/* Left Content */}

          <div className="col-lg-6 text-center text-lg-start">

            <motion.h4
              className="text-primary fw-bold"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              Hello, I'm
            </motion.h4>

            <motion.h1
              className="display-3 fw-bold"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Pranay Hazra
            </motion.h1>

            <motion.h3
              className="text-primary mb-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Full Stack MERN Developer
            </motion.h3>

            <motion.p
              className="text-secondary fs-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              I build modern, scalable, and user-focused web applications
              using the MERN stack. Passionate about transforming ideas into
              elegant digital experiences through clean code and thoughtful
              design.
            </motion.p>

            {/* Buttons */}

            <div className="mt-4 d-flex gap-3 justify-content-center justify-content-lg-start flex-wrap">

              <a
                href="#contact"
                className="btn btn-primary px-4 py-2"
              >
                Contact Me
              </a>

              <a
                href={resume}
                className="btn btn-outline-light px-4 py-2"
                download
              >
                <FaDownload className="me-2" />
                Resume
              </a>

            </div>

            {/* Social Icons */}

            <div className="mt-4">

              <a
                href="https://github.com/PranayHazra-007"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-3 me-4"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/pranay-hazra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-3"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

          {/* Right Image */}

          <div className="col-lg-6 text-center">

            <motion.img
              src={profile}
              alt="Pranay Hazra"
              className="img-fluid rounded-circle border border-4 border-primary shadow"
              style={{
                maxWidth: "350px",
                width: "100%",
                height: "350px",
                objectFit: "cover",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;