import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaGraduationCap,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="bg-dark text-white py-5">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          {/* Heading */}

          <h2 className="text-center fw-bold display-5 mb-5">
            About <span className="text-primary">Me</span>
          </h2>

          {/* About Card */}

          <div
            className="rounded-4 border border-secondary shadow-lg p-4 p-lg-5"
            style={{
              background: "#111827",
              maxWidth: "1100px",
              margin: "0 auto",
            }}
          >
            <p
              className="text-light mx-auto mb-5"
              style={{
                fontSize: "1.05rem",
                lineHeight: "2",
                textAlign: "justify",
              }}
            >
              Hi, I'm{" "}
              <span className="text-primary fw-bold">
                Pranay Hazra
              </span>
              , a passionate{" "}
              <span className="text-primary fw-bold">
                Full Stack MERN Developer
              </span>{" "}
              who enjoys building modern, scalable, and user-friendly web
              applications.

              I specialize in developing applications using{" "}
              <span className="fw-semibold">
                MongoDB, Express.js, React.js, and Node.js
              </span>
              . I love transforming ideas into elegant digital experiences
              through clean code and thoughtful design.

              My goal is to continuously improve my skills while building
              high-quality applications that solve real-world problems and
              deliver exceptional user experiences.
            </p>

            {/* Info Cards */}

            <div className="row g-4">

              <div className="col-lg-3 col-md-6">
                <div className="bg-black border border-secondary rounded-4 text-center p-4 h-100 shadow">
                  <FaMapMarkerAlt className="text-primary fs-1 mb-3" />
                  <h5 className="fw-bold">Location</h5>
                  <p className="text-light-emphasis mb-0">
                    Kolkata, West Bengal
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="bg-black border border-secondary rounded-4 text-center p-4 h-100 shadow">
                  <FaGraduationCap className="text-primary fs-1 mb-3" />
                  <h5 className="fw-bold">Education</h5>
                  <p className="text-light-emphasis mb-0">
                    B.Tech (2025)
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="bg-black border border-secondary rounded-4 text-center p-4 h-100 shadow">
                  <FaCode className="text-primary fs-1 mb-3" />
                  <h5 className="fw-bold">Specialization</h5>
                  <p className="text-light-emphasis mb-0">
                    Full Stack MERN Development
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="bg-black border border-secondary rounded-4 text-center p-4 h-100 shadow">
                  <FaLaptopCode className="text-primary fs-1 mb-3" />
                  <h5 className="fw-bold">Experience</h5>
                  <p className="text-light-emphasis mb-0">
                    Personal & Academic Projects
                  </p>
                </div>
              </div>

            </div>

          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;