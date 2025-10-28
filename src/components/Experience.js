import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
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

  const experiences = [
    {
      title: "Cybersecurity Engineer",
      company: "LTI Mindtree",
      location: "Hyderabad",
      period: "Nov 2024 - Present",
      type: "Full-Time",
      responsibilities: [
        "Gained experience in identifying vulnerabilities, threat monitoring, and security control implementation",
        "Implemented and monitored security solutions using AWS CloudTrail, GuardDuty, and CloudWatch to detect and respond to threats",
        "Ensured compliance with security standards like HIPAA and GDPR by configuring secure access controls, encryption, and logging practices",
        "Collaborated with cross-functional teams to develop incident response procedures and perform regular security audits"
      ]
    },
    {
      title: "Amazon Web Services - Virtual Internship",
      company: "KL University",
      location: "Vijayawada",
      period: "March 2022 - May 2022",
      type: "Virtual Internship",
      responsibilities: [
        "Completed a 2-month virtual internship gaining hands-on exposure to AWS cloud services and infrastructure",
        "Worked with AWS services such as S3, EC2, IAM, and CloudWatch to understand cloud deployment and management",
        "Learned cloud best practices for security, scalability, and monitoring of applications",
        "Assisted in automating tasks and managing cloud resources to improve efficiency and reliability"
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div 
          className="experience-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Professional Experience
          </motion.h2>
          
          <div className="timeline">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                className="timeline-item"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="timeline-marker">
                  <FaBriefcase />
                </div>
                
                <div className="timeline-content">
                  <div className="experience-header">
                    <h3 className="job-title">{exp.title}</h3>
                    <div className="job-meta">
                      <span className="company">
                        <FaBriefcase /> {exp.company}
                      </span>
                      <span className="location">
                        <FaMapMarkerAlt /> {exp.location}
                      </span>
                      <span className="period">
                        <FaCalendarAlt /> {exp.period}
                      </span>
                    </div>
                    <span className={`job-type ${exp.type.toLowerCase().replace(' ', '-')}`}>
                      {exp.type}
                    </span>
                  </div>
                  
                  <div className="responsibilities">
                    <ul>
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;