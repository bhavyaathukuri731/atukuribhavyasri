import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import './Education.css';

const Education = () => {
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const education = {
    degree: "Bachelor of Technology in Computer Science with AIML",
    institution: "KL University",
    location: "Andhra Pradesh",
    period: "Apr 2020 - Apr 2024",
    gpa: "9.09/10",
    highlights: [
      "Specialized in Computer Science with Artificial Intelligence and Machine Learning",
      "Maintained excellent academic performance with 9.09/10 GPA",
      "Active member of RPA club, developing technical skills and leadership abilities",
      "Completed various projects in cybersecurity and full-stack development",
      "Gained hands-on experience with cloud technologies and modern development practices"
    ]
  };

  const achievements = [
    {
      title: "Project Leadership",
      description: "Led a successful project team, resulting in an improvement in project efficiency",
      icon: <FaStar />
    },
    {
      title: "RPA Club Core Member",
      description: "As a core member of RPA club at KL University, developed technical skills and contributed to club activities",
      icon: <FaGraduationCap />
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <motion.div 
          className="education-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Education & Achievements
          </motion.h2>
          
          <div className="education-grid">
            <motion.div 
              className="education-card"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="education-header">
                <div className="education-icon">
                  <FaGraduationCap />
                </div>
                <div className="gpa-badge">
                  GPA: {education.gpa}
                </div>
              </div>
              
              <div className="education-details">
                <h3 className="degree-title">{education.degree}</h3>
                <div className="institution-info">
                  <span className="institution">
                    <FaGraduationCap /> {education.institution}
                  </span>
                  <span className="location">
                    <FaMapMarkerAlt /> {education.location}
                  </span>
                  <span className="period">
                    <FaCalendarAlt /> {education.period}
                  </span>
                </div>
                
                <div className="education-highlights">
                  <h4>Key Highlights:</h4>
                  <ul>
                    {education.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="achievements-section"
              variants={containerVariants}
            >
              <motion.h3 className="achievements-title" variants={itemVariants}>
                Notable Achievements
              </motion.h3>
              
              <div className="achievements-list">
                {achievements.map((achievement, index) => (
                  <motion.div 
                    key={index}
                    className="achievement-item"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="achievement-icon">
                      {achievement.icon}
                    </div>
                    <div className="achievement-content">
                      <h4>{achievement.title}</h4>
                      <p>{achievement.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;