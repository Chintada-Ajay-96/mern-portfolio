import React from 'react';
import './Project.css';
import { motion } from 'framer-motion';

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
  hover: {
    y: -10,
    transition: { duration: 0.3 }
  }
};

const Project = () => {
  const projects = [
    {
      title: 'Shopping website',
      type: 'Full Stack',
      badges: ['Node', 'Express', 'React', 'MongoDB'],
      image: 'https://alvarotrigo.com/blog/assets/imgs/2022-07-16/shopping-center-website-design-capitua-mall-dribbble.jpeg',
    },
    {
      title: 'Gaming App',
      type: 'Mobile App',
      badges: ['Android', 'React Native', 'iOS'],
      image: 'https://www.pixelworks.com/media/wp-content/uploads/2022/06/%E8%88%AA%E6%B5%B7%E7%8E%8B%E7%83%AD%E8%A1%80%E8%88%AA%E7%BA%BF.png',
    },
    {
      title: 'Job Portal',
      type: 'Backend',
      badges: ['Node', 'Express', 'NoSQL'],
      image: 'https://t3.ftcdn.net/jpg/07/89/13/08/360_F_789130819_WGFVkLujejz1skpFBZGXyo2iBXo0Vrlk.jpg',
    },
  ];

  return (
    <section className="project-section">
      <div className="container Project">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Top Recent Projects
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
            className="pb-3 text-center section-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Here are my top 3 recent projects with live links and source code.
          </motion.p>
        </motion.div>

        <div className="row" id="ads">
          {projects.map((project, index) => (
            <motion.div
              className="col-md-4 mb-4"
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={cardVariant}
            >
              <div className="card rounded">
                <div className="card-image">
                  <motion.span 
                    className="card-notify-badge"
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  >
                    {project.type}
                  </motion.span>
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="image-overlay" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  {project.badges.map((badge, i) => (
                    <motion.span 
                      className="card-detail-badge"
                      key={i}
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.2 }}
                    >
                      {badge}
                    </motion.span>
                  ))}
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">{project.title}</h5>
                  </div>
                  <motion.a 
                    className="ad-btn"
                    href="#"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0px 5px 15px rgba(29, 120, 33, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                    <motion.span 
                      className="btn-arrow"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >→</motion.span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;