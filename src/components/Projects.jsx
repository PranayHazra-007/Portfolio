import React from "react";
import projectImage from "../assets/images/firstimage.jpeg"
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="bg-dark text-white py-5">
      <div className="container">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="display-5 fw-bold text-center mb-5">
            Featured <span className="text-primary">Project</span>
          </h2>
        </motion.div>

        {/* Project Card */}

        <motion.div
          className="card bg-black border border-secondary shadow-lg text-white overflow-hidden"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="row g-0 align-items-center">

            {/* Project Image */}

            <div className="col-lg-6">
              <img
                src={projectImage}
                alt="ChatWave"
                className="img-fluid w-100 h-100"
                style={{
                  objectFit: "cover",
                  minHeight: "350px",
                }}
              />
            </div>

            {/* Project Details */}

            <div className="col-lg-6">

              <div className="card-body p-4 p-lg-5">

                <h2 className="fw-bold mb-3">
                  ChatWave
                </h2>

                <h5 className="text-primary mb-3">
                  Video Calling & Chat Platform
                </h5>

                <p className="text-secondary fs-5">
                  A real-time full-stack communication platform that
                  enables users to chat instantly and participate in
                  video calls seamlessly. Built using the MERN stack
                  with a focus on performance, scalability, and an
                  intuitive user experience.
                </p>

                <h6 className="mt-4">
                  Tech Stack
                </h6>

                <div className="d-flex flex-wrap gap-2 mt-3">

                  <span className="badge bg-primary p-2">
                    React.js
                  </span>

                  <span className="badge bg-success p-2">
                    Node.js
                  </span>

                  <span className="badge bg-warning text-dark p-2">
                    Express.js
                  </span>

                  <span className="badge bg-info text-dark p-2">
                    MongoDB
                  </span>

                </div>

                <div className="mt-4 d-flex flex-wrap gap-3">

                  <a
                    href="https://github.com/PranayHazra-007/chatwave-video-calls"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <FaGithub className="me-2" />
                    GitHub
                  </a>

                  <a
                    href="https://chatwave-video-calls-7.onrender.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light"
                  >
                    <FaExternalLinkAlt className="me-2" />
                    Live Demo
                  </a>

                </div>

              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;