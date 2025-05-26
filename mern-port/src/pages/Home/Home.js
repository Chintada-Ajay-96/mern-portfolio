import React from "react";
import { useTheme } from "../../context/ThemeContext";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/resume.txt";
import { motion } from "framer-motion";
import "./home.css";

const Home = () => {
  const { theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(0, 157, 255, 0.4)",
      transition: {
        duration: 0.3,
        yoyo: Infinity,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <div 
      className={`container-fluid home-container ${theme}`} 
      id="home"
      style={{
        background: theme === 'dark' 
          ? 'radial-gradient(circle at 10% 20%, rgba(15, 15, 30, 0.9) 0%, rgba(5, 5, 15, 0.9) 90%)' 
          : 'radial-gradient(circle at 10% 20%, rgba(240, 248, 255, 0.9) 0%, rgba(220, 230, 240, 0.9) 90%)'
      }}
    >
      <motion.div
        className="container home-content"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <motion.h1 
            className="greeting-text"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hi <motion.span 
              className="wave-emoji"
              animate={{ 
                rotate: [0, 30, 0, -30, 0],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.5,
                ease: "easeInOut"
              }}
            >👋</motion.span> I'm Ajay
          </motion.h1>
        </motion.div>

        <motion.div variants={itemVariants}>
          <motion.h2 className="typewriter-text">
            <Typewriter
              options={{
                strings: [
                  "FullStack Developer!",
                  "MERN Stack Developer!",
                  "React Native Developer!",
                  "Tech Enthusiast!",
                  "Problem Solver!"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 30,
                delay: 50,
                cursor: "|",
                cursorClassName: "typewriter-cursor"
              }}
            />
          </motion.h2>
        </motion.div>

        <motion.div 
          className="home-buttons"
          variants={itemVariants}
        >
          <motion.a
            className={`btn btn-hire ${theme}`}
            href="https://api.whatsapp.com/send?phone=9121994328"
            rel="noreferrer"
            target="_blank"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Hire Me
          </motion.a>
          <motion.a 
            className={`btn btn-cv ${theme}`}
            href={Resume} 
            download="Ajay_Resume.txt"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            My Resume
            <motion.span
              className="download-icon"
              animate={{
                y: [0, -5, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
            >
              ↓
            </motion.span>
          </motion.a>
        </motion.div>

        <motion.div 
          className="scroll-indicator"
          animate={{
            y: [0, 10, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          Scroll down
          <div className="scroll-line"></div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;