import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaCloud, FaCode, FaCog } from 'react-icons/fa';
import './About.css';

const About = () => {
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

  const features = [
    {
      icon: <FaShieldAlt />,
      title: "Cybersecurity",
      description: "Expert in vulnerability assessment, threat monitoring, and security controls implementation"
    },
    {
      icon: <FaCloud />,
      title: "Cloud Security",
      description: "Specialized in AWS services including CloudTrail, GuardDuty, CloudWatch, and IAM"
    },
    {
      icon: <FaCode />,
      title: "Development",
      description: "Full-stack development with Java, SpringBoot, React.js, and modern web technologies"
    },
    {
      icon: <FaCog />,
      title: "DevOps",
      description: "Automation, monitoring, and implementing security best practices in CI/CD pipelines"
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div 
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="about-text" variants={itemVariants}>
            <h2 className="section-title">About Me</h2>
            <div className="about-description">
              <p>
                I am a passionate <strong>Cybersecurity Engineer</strong> with hands-on experience in 
                identifying vulnerabilities, threat monitoring, and implementing robust security controls 
                across cloud and enterprise environments.
              </p>
              <p>
                Currently working at <strong>LTI Mindtree</strong>, I specialize in securing AWS cloud 
                infrastructure and ensuring compliance with industry standards such as HIPAA and GDPR. 
                My expertise spans across cloud security, DevOps automation, and full-stack development.
              </p>
              <p>
                I'm committed to staying at the forefront of cybersecurity innovation and contributing 
                to building secure, scalable solutions that protect organizations from evolving threats.
              </p>
            </div>
          </motion.div>

          <motion.div className="features-grid" variants={containerVariants}>
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="feature-card"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;