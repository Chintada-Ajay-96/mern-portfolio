import React from "react";
import "./Techstack.css";
import { motion } from "framer-motion";
import { TechstackList } from "../../utils/TechstackList";

const rubberBandVariant = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.25, 0.75, 1.15, 0.95, 1],
    transition: { duration: 1, ease: "easeInOut" },
  },
};

const fadeLeftVariant = {
  initial: { opacity: 0, x: -50 },
  animate: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  }),
  hover: {
    y: -10,
    scale: 1.05,
    transition: { duration: 0.3 }
  }
};

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const Techstack = () => {
  return (
    <section className="techstack-section">
      <div className="container techstack" id="techstack">
        <motion.div
          variants={rubberBandVariant}
          initial="initial"
          animate="animate"
          className="text-center section-header"
        >
          <h2 className="col-12 mt-3 mb-1 text-uppercase">
            Technologies Stack
            <motion.span 
              className="title-underline"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
          </h2>
          <motion.hr 
            initial={{ width: 0 }}
            animate={{ width: '400px' }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
          <motion.p 
            className="pb-3 section-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            👉 Including programming languages, frameworks, databases, front-end and back-end tools, and APIs
          </motion.p>
        </motion.div>

        <motion.div 
          className="row techstack-grid"
          variants={containerVariant}
          initial="hidden"
          animate="visible"
        >
          {TechstackList.map((tech, index) => (
            <motion.div
              key={tech._id}
              custom={index}
              variants={fadeLeftVariant}
              className="col-md-3 col-sm-4 col-6 mb-4"
              whileHover="hover"
            >
              <div className="card m-2 tech-card">
                <div className="card-content">
                  <div className="card-body">
                    <div className="media d-flex justify-content-center">
                      <div className="align-self-center tech-icon-container">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.5 }}
                        >
                          <tech.icon className="tech-icon" />
                        </motion.div>
                      </div>
                      <div className="media-body">
                        <motion.h5 
                          className="tech-name"
                          whileHover={{ color: "#38a33d" }}
                        >
                          {tech.name}
                        </motion.h5>
                      </div>
                    </div>
                  </div>
                </div>
                <motion.div 
                  className="tech-card-bg"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Techstack;