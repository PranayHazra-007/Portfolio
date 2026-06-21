import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaJsSquare,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiC } from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      name: "C",
      icon: <SiC className="display-4 text-primary mb-3" />,
    },
    {
      name: "JavaScript",
      icon: <FaJsSquare className="display-4 text-warning mb-3" />,
    },
    {
      name: "React.js",
      icon: <FaReact className="display-4 text-info mb-3" />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="display-4 text-success mb-3" />,
    },
    {
      name: "Express.js",
      icon: <SiExpress className="display-4 text-light mb-3" />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="display-4 text-success mb-3" />,
    },
    {
      name: "HTML5",
      icon: <FaHtml5 className="display-4 text-danger mb-3" />,
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt className="display-4 text-primary mb-3" />,
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap className="display-4 text-purple mb-3" />,
    },
  ];

  return (
    <section id="skills" className="bg-dark text-white py-5">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="display-5 fw-bold text-center mb-5">
            My <span className="text-primary">Skills</span>
          </h2>
        </motion.div>

        <div className="row g-4">

          {skills.map((skill, index) => (
            <div className="col-lg-4 col-md-6 col-12" key={index}>
              <motion.div
                className="card bg-black border border-secondary shadow-lg text-center text-white h-100"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="card-body py-5">

                  {skill.icon}

                  <h4 className="fw-bold">
                    {skill.name}
                  </h4>

                </div>
              </motion.div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;