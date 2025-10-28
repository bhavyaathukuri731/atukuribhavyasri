import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './Footer.css';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const socialLinks = [
    {
      icon: <FaGithub />,
      href: "https://github.com/klu2000031625",
      label: "GitHub"
    },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/atukuri-bhavya-sri-630b37220/",
      label: "LinkedIn"
    },
    {
      icon: <FaEnvelope />,
      href: "mailto:bhavyaathukuri731@gmail.com",
      label: "Email"
    }
  ];

  const quickLinks = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Experience", to: "experience" },
    { name: "Projects", to: "projects" },
    { name: "Skills", to: "skills" },
    { name: "Education", to: "education" },
    { name: "Contact", to: "contact" }
  ];

  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="animated-bg"></div>
      </div>
      
      <div className="container">
        <motion.div 
          className="footer-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="footer-grid">
            <motion.div className="footer-section" variants={itemVariants}>
              <h3 className="footer-title">Atukuri Bhavya Sri</h3>
              <p className="footer-description">
                Cybersecurity Engineer passionate about securing cloud infrastructure 
                and building innovative solutions. Let's connect and create something amazing together.
              </p>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : '_self'}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="social-link"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div className="footer-section" variants={itemVariants}>
              <h4 className="footer-section-title">Quick Links</h4>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.to}
                      smooth={true}
                      duration={500}
                      className="footer-link"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div className="footer-section" variants={itemVariants}>
              <h4 className="footer-section-title">Contact Info</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <FaEnvelope />
                  <span>bhavyaathukuri731@gmail.com</span>
                </div>
              </div>
            </motion.div>

            <motion.div className="footer-section" variants={itemVariants}>
              <h4 className="footer-section-title">Professional Focus</h4>
              <ul className="focus-list">
                <li>Cybersecurity</li>
                <li>Cloud Security (AWS)</li>
                <li>Threat Detection</li>
                <li>Compliance (HIPAA, GDPR)</li>
                <li>Full-Stack Development</li>
              </ul>
            </motion.div>
          </div>

          <motion.div className="footer-bottom" variants={itemVariants}>
            <div className="footer-divider"></div>
            <div className="footer-bottom-content">
              <p className="copyright">
                © 2024 Atukuri Bhavya Sri. All rights reserved.
              </p>
              <p className="made-with-love">
                Made with <FaHeart className="heart-icon" /> and passion for cybersecurity
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;