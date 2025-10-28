import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const [imageError, setImageError] = useState(false);

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="animated-bg"></div>
      </div>
      
      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-text" variants={itemVariants}>
          <motion.h1 
            className="hero-title"
            variants={itemVariants}
          >
            Hi, I'm <span className="name-highlight">Atukuri Bhavya Sri</span>
          </motion.h1>
          
          <motion.h2 
            className="hero-subtitle"
            variants={itemVariants}
          >
            Cybersecurity Engineer At LTIMindtree
          </motion.h2>
          
          <motion.p 
            className="hero-description"
            variants={itemVariants}
          >
            Passionate about securing cloud infrastructure and building robust cybersecurity solutions. 
            Experienced in AWS services, threat detection, and compliance frameworks including HIPAA and GDPR.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            variants={itemVariants}
          >
            <a href="#contact" className="btn-primary">Get In Touch</a>
            <a href="#projects" className="btn-secondary">View My Work</a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-image"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <div className="image-container">
            {!imageError ? (
              <img 
                src={`${process.env.PUBLIC_URL}/profilepic.jpg`}
                alt="Atukuri Bhavya Sri" 
                className="profile-image"
                onLoad={() => {
                  console.log('Profile image loaded successfully');
                }}
                onError={(e) => {
                  console.log('Profile image failed to load, showing fallback');
                  setImageError(true);
                }}
                style={{ display: imageError ? 'none' : 'block' }}
              />
            ) : null}
            <div 
              className="avatar-circle" 
              style={{ display: imageError ? 'flex' : 'none' }}
            >
              <span className="avatar-text">BS</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="social-links desktop-only"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.a 
          href="https://github.com/klu2000031625" 
          target="_blank" 
          rel="noopener noreferrer"
          variants={itemVariants}
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.3 }}
        >
          <FaGithub />
        </motion.a>
        <motion.a 
          href="https://www.linkedin.com/in/atukuri-bhavya-sri-630b37220/" 
          target="_blank" 
          rel="noopener noreferrer"
          variants={itemVariants}
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.3 }}
        >
          <FaLinkedin />
        </motion.a>
        <motion.a 
          href="mailto:bhavyaathukuri731@gmail.com"
          variants={itemVariants}
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.3 }}
        >
          <FaEnvelope />
        </motion.a>
      </motion.div>
      
      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="scroll-dot"></div>
      </motion.div>
    </section>
  );
};

export default Hero;