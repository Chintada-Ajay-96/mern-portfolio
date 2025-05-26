import React from "react";
import "./Menus.css";
import { Zoom, Fade, Bounce } from "react-awesome-reveal";
import { Link } from "react-scroll";

// Icon imports
import {
  FcHome,
  FcAbout,
  
  FcBiotech,
  FcVideoProjector,
  
  FcBusinessContact,
} from "react-icons/fc";

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <Zoom triggerOnce>
            <div className="navbar-profile-pic">
              <img
                src="https://i.pinimg.com/736x/7f/e6/f3/7fe6f3902403f51c3f31c066e1c5a455.jpg"
                alt="profile pic"
              />
            </div>
          </Zoom>
          <Fade direction="left" cascade damping={0.1} triggerOnce>
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <Link 
                    activeClass="active"
                    to="home-container" 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={500}
                  >
                    <FcHome className="nav-icon" /> 
                    <span className="nav-text">Home</span>
                  </Link>
                </div>
                <div className="nav-link">
                  <Link 
                    activeClass="active"
                    to="about" 
                    spy={true} 
                    smooth={true} 
                    offset={-80} 
                    duration={500}
                  >
                    <FcAbout className="nav-icon" /> 
                    <span className="nav-text">About</span>
                  </Link>
                </div>
                <div className="nav-link">
                  <Link 
                    activeClass="active"
                    to="techstack" 
                    spy={true} 
                    smooth={true} 
                    offset={-80} 
                    duration={500}
                  >
                    <FcBiotech className="nav-icon" /> 
                    <span className="nav-text">Tech Stack</span>
                  </Link>
                </div>
                <div className="nav-link">
                  <Link 
                    activeClass="active"
                    to="Project" 
                    spy={true} 
                    smooth={true} 
                    offset={-80} 
                    duration={500}
                  >
                    <FcVideoProjector className="nav-icon" /> 
                    <span className="nav-text">Projects</span>
                  </Link>
                </div>
                <div className="nav-link">
                  <Link 
                    activeClass="active"
                    to="contact" 
                    spy={true} 
                    smooth={true} 
                    offset={-80} 
                    duration={500}
                  >
                    <FcBusinessContact className="nav-icon" /> 
                    <span className="nav-text">Contact</span>
                  </Link>
                </div>
              </div>
            </div>
          </Fade>
        </>
      ) : (
        <Bounce cascade damping={0.05} triggerOnce>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link 
                  to="home-container" 
                  spy={true} 
                  smooth={true} 
                  offset={-100} 
                  duration={500}
                >
                  <FcHome className="nav-icon" />
                </Link>
              </div>
              <div className="nav-link">
                <Link 
                  to="about" 
                  spy={true} 
                  smooth={true} 
                  offset={-80} 
                  duration={500}
                >
                  <FcAbout className="nav-icon" />
                </Link>
              </div>
              <div className="nav-link">
                <Link 
                  to="techstack" 
                  spy={true} 
                  smooth={true} 
                  offset={-80} 
                  duration={500}
                >
                  <FcBiotech className="nav-icon" />
                </Link>
              </div>
              <div className="nav-link">
                <Link 
                  to="Project" 
                  spy={true} 
                  smooth={true} 
                  offset={-80} 
                  duration={500}
                >
                  <FcVideoProjector className="nav-icon" />
                </Link>
              </div>
              <div className="nav-link">
                <Link 
                  to="contact" 
                  spy={true} 
                  smooth={true} 
                  offset={-80} 
                  duration={500}
                >
                  <FcBusinessContact className="nav-icon" />
                </Link>
              </div>
            </div>
          </div>
        </Bounce>
      )}
    </>
  );
};

export default Menus;