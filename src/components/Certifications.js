import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaRedhat, FaCheck } from 'react-icons/fa';
import './Certifications.css';

const Certifications = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const certification = {
    title: "Red Hat Certified Enterprise Application Developer",
    provider: "Red Hat",
    icon: <FaRedhat />,
    description: "Professional certification demonstrating expertise in developing enterprise applications using Red Hat technologies and best practices.",
    skills: [
      "Enterprise Application Development",
      "Red Hat Enterprise Linux",
      "Application Server Management",
      "Java EE/Jakarta EE Development",
      "Container Development",
      "Cloud-Native Application Design"
    ],
    verified: true
  };

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <motion.div 
          className="certifications-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Professional Certifications
          </motion.h2>
          
          <div className="certifications-grid">
            <motion.div 
              className="certification-card"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="certification-header">
                <div className="certification-icon">
                  {certification.icon}
                </div>
                <div className="verification-badge">
                  <FaCheck />
                  <span>Verified</span>
                </div>
              </div>
              
              <div className="certification-content">
                <h3 className="certification-title">{certification.title}</h3>
                <p className="certification-provider">{certification.provider}</p>
                <p className="certification-description">{certification.description}</p>
                
                <div className="certification-skills">
                  <h4>Skills Covered:</h4>
                  <ul>
                    {certification.skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="certification-footer">
                <div className="certification-badge">
                  <FaCertificate />
                  <span>Professional Certification</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="additional-info"
              variants={itemVariants}
            >
              <div className="info-card">
                <h3>Commitment to Learning</h3>
                <p>
                  Continuously updating skills and knowledge through professional certifications 
                  and hands-on experience with cutting-edge technologies.
                </p>
                <div className="learning-stats">
                  <div className="stat-item">
                    <span className="stat-number">1+</span>
                    <span className="stat-label">Professional Certifications</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">5+</span>
                    <span className="stat-label">Technology Domains</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">1+</span>
                    <span className="stat-label">Years Experience</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;