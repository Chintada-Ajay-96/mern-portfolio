import React from "react";
import "./Contact.css";
import { BsEnvelope, BsGithub, BsLinkedin } from "react-icons/bs";
import { Fade, Slide, Zoom, Bounce } from "react-awesome-reveal";

const Contact = () => {
  const handleEmailClick = () => {
    // Solution that works in all modern browsers and PWAs
    const email = "chintadaajay96@gmail.com";
    const subject = "Contact Request";
    const body = "Hello Ajay,\n\n";
    
    // Method 1: Standard mailto (works in most cases)
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Method 2: Fallback for some mobile browsers/PWAs
    setTimeout(() => {
      const mailtoLink = document.createElement('a');
      mailtoLink.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      mailtoLink.style.display = 'none';
      document.body.appendChild(mailtoLink);
      mailtoLink.click();
      document.body.removeChild(mailtoLink);
    }, 50);
  };

  return (
    <div className="contact" id="contact">
      <div className="card card0 border-0">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
            <div className="card1">
              <div className="row border-line">
                <Slide direction="left" triggerOnce>
                  <img
                    src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                    alt="contact"
                    className="image"
                  />
                </Slide>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <Fade direction="right" cascade damping={0.1} triggerOnce>
              <div className="card2 d-flex card border-0 px-4 py-5">
                <Zoom triggerOnce>
                  <div className="row">
                    <h6 className="social-header">Contact Me Via</h6>
                    <div className="contact-stickers">
                      <Bounce delay={300} triggerOnce>
                        <div 
                          className="sticker-item email-item"
                          onClick={handleEmailClick}
                        >
                          <BsEnvelope color="#EA4335" size={40} />
                          <span className="sticker-label">Email</span>
                        </div>
                      </Bounce>
                      <Bounce delay={400} triggerOnce>
                        <a 
                          href="https://github.com/Chintada-Ajay-96" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="sticker-item"
                        >
                          <BsGithub color="black" size={40} />
                          <span className="sticker-label">GitHub</span>
                        </a>
                      </Bounce>
                      <Bounce delay={500} triggerOnce>
                        <a 
                          href="https://linkedin.com/in/YOUR_PROFILE" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="sticker-item"
                        >
                          <BsLinkedin color="#0A66C2" size={40} />
                          <span className="sticker-label">LinkedIn</span>
                        </a>
                      </Bounce>
                    </div>
                  </div>
                </Zoom>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;