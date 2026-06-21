import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="bg-dark text-white py-5">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          {/* Heading */}

          <h2 className="text-center fw-bold display-5 mb-3">
            Contact <span className="text-primary">Me</span>
          </h2>

          <p className="text-center text-secondary fs-5 mb-5 mx-auto" style={{ maxWidth: "700px" }}>
            I'm always interested in discussing new projects, internship
            opportunities, freelance work, or collaboration. Feel free to
            connect with me.
          </p>

          <div className="row g-4">

            {/* Email */}

            <div className="col-lg-3 col-md-6">
              <a
                href="mailto:pranayhazra034@gmail.com"
                className="text-decoration-none text-white"
              >
                <div className="bg-black border border-secondary rounded-4 p-4 text-center h-100 shadow">
                  <FaEnvelope className="text-primary fs-1 mb-3" />
                  <h5>Email</h5>
                  <p className="text-secondary mb-0">
                    pranayhazra034@gmail.com
                  </p>
                </div>
              </a>
            </div>

            {/* Phone */}

            <div className="col-lg-3 col-md-6">
              <a
                href="tel:+918167227365"
                className="text-decoration-none text-white"
              >
                <div className="bg-black border border-secondary rounded-4 p-4 text-center h-100 shadow">
                  <FaPhoneAlt className="text-primary fs-1 mb-3" />
                  <h5>Phone</h5>
                  <p className="text-secondary mb-0">
                    +91 8167227365
                  </p>
                </div>
              </a>
            </div>

            {/* GitHub */}

            <div className="col-lg-3 col-md-6">
              <a
                href="https://github.com/PranayHazra-007"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-white"
              >
                <div className="bg-black border border-secondary rounded-4 p-4 text-center h-100 shadow">
                  <FaGithub className="text-primary fs-1 mb-3" />
                  <h5>GitHub</h5>
                  <p className="text-secondary mb-0">
                    PranayHazra-007
                  </p>
                </div>
              </a>
            </div>

            {/* LinkedIn */}

            <div className="col-lg-3 col-md-6">
              <a
                href="https://www.linkedin.com/in/pranay-hazra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-white"
              >
                <div className="bg-black border border-secondary rounded-4 p-4 text-center h-100 shadow">
                  <FaLinkedin className="text-primary fs-1 mb-3" />
                  <h5>LinkedIn</h5>
                  <p className="text-secondary mb-0">
                    Pranay Hazra
                  </p>
                </div>
              </a>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Contact;