import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaBriefcase } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const projects = [
    {
      title: "Cloud Security in CDRC (Cloud Detection and Response Center)",
      description: "Worked as part of the CDRC team to secure cloud-native infrastructure and services hosted on Amazon Web Services (AWS). Implemented comprehensive monitoring and automated response systems.",
      period: "March 2025 - Present",
      technologies: ["AWS CloudTrail", "GuardDuty", "CloudWatch", "EC2", "HIPAA", "GDPR"],
      features: [
        "Deployed monitoring and threat detection systems using AWS CloudTrail and GuardDuty",
        "Implemented automated alerting and remediation via EC2 and CloudWatch",
        "Ensured compliance with HIPAA and GDPR through secure access control",
        "Configured encryption and comprehensive logging practices"
      ],
      icon: <FaShieldAlt />,
      type: "Cybersecurity",
      status: "Ongoing"
    },
    {
      title: "Job Recruitment Management System",
      description: "Developed a comprehensive full-stack job recruitment application with modern architecture using Java SpringBoot microservices and responsive web design.",
      period: "Oct - Nov 2022",
      technologies: ["Java", "SpringBoot", "Microservices", "Maven", "MySQL", "HTML", "CSS"],
      features: [
        "Built responsive Home Page with modern UI/UX design",
        "Implemented Job Registration Form with validation",
        "Created Available Jobs listing with search functionality",
        "Developed Contact page with form handling",
        "Used microservices architecture for scalability"
      ],
      icon: <FaBriefcase />,
      type: "Full-Stack Development",
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div 
          className="projects-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Featured Projects
          </motion.h2>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                className="project-card"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="project-header">
                  <div className="project-icon">
                    {project.icon}
                  </div>
                  <div className="project-meta">
                    <span className={`project-type ${project.type.toLowerCase().replace(' ', '-')}`}>
                      {project.type}
                    </span>
                    <span className={`project-status ${project.status.toLowerCase()}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-period">{project.period}</p>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="project-technologies">
                    <h4>Technologies Used:</h4>
                    <div className="tech-tags">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
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

export default Projects;