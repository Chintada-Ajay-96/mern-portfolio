import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.section 
      className="about-section"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className='about-container'>
        <div className='row about-row'>
          <motion.div 
            className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img'
            variants={imageVariants}
            whileHover="hover"
          >
            <img 
              alt="profile-pic" 
              src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://media.easy-peasy.ai/6b39933e-73ad-4b24-965c-17884b5a8e77/be9da804-63a0-4d5c-8a09-af29209133ce.png"
            />    
          </motion.div>
          
          <motion.div 
            className='col-md-6 about-content'
            variants={itemVariants}
          >
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              About me
              <motion.span 
                className="title-underline"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              />
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              I am a dynamic and forward-thinking individual with a strong passion for innovation, continuous learning, and creating meaningful impact. With a balanced blend of technical skills and creative thinking, I strive to approach challenges with curiosity and resilience. Whether it's building digital solutions, leading a team, or exploring new ideas, I enjoy pushing boundaries and stepping outside of my comfort zone.

              My interests span across technology, entrepreneurship, education, and the arts. I believe in the power of collaboration, empathy, and user-centered design to solve real-world problems. I take pride in being a quick learner and an effective communicator, always eager to connect with people and understand diverse perspectives.

              Throughout my journey, I've engaged in various projects that reflect my commitment to excellence and innovation. From developing startups to participating in academic and extracurricular ventures, I've gained valuable experience that fuels both personal and professional growth.

              I aspire to contribute to impactful initiatives, grow with purpose, and inspire others along the way. Above all, I value authenticity, integrity, and a growth mindset—constantly evolving and adapting in a fast-changing world.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default About;