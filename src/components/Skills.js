import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaShieldAlt, 
  FaCloud, 
  FaJava, 
  FaPython, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaDatabase,
  FaAws,
  FaLock,
  FaExclamationTriangle,
  FaUserShield
} from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
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
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const skillCategories = [
    {
      title: "Cybersecurity",
      icon: <FaShieldAlt />,
      color: "#ef4444",
      skills: [
        { name: "Encryption", icon: <FaLock />, level: 90 },
        { name: "Compliance (HIPAA, GDPR)", icon: <FaUserShield />, level: 85 },
        { name: "AWS Security", icon: <FaAws />, level: 88 },
        { name: "Incident Response", icon: <FaExclamationTriangle />, level: 82 },
        { name: "Threat Detection", icon: <FaShieldAlt />, level: 86 }
      ]
    },
    {
      title: "Programming Languages",
      icon: <FaJava />,
      color: "#22c55e",
      skills: [
        { name: "Java", icon: <FaJava />, level: 90 },
        { name: "Python", icon: <FaPython />, level: 85 },
        { name: "JavaScript", icon: <FaJs />, level: 80 }
      ]
    },
    {
      title: "Web Technologies",
      icon: <FaReact />,
      color: "#3b82f6",
      skills: [
        { name: "React.js", icon: <FaReact />, level: 85 },
        { name: "Node.js", icon: <FaNodeJs />, level: 80 },
        { name: "Express.js", icon: <FaNodeJs />, level: 78 }
      ]
    },
    {
      title: "Database & Cloud",
      icon: <FaCloud />,
      color: "#8b5cf6",
      skills: [
        { name: "SQL", icon: <FaDatabase />, level: 85 },
        { name: "MongoDB", icon: <FaDatabase />, level: 80 },
        { name: "AWS Services", icon: <FaAws />, level: 88 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div 
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Technical Skills
          </motion.h2>
          
          <div className="skills-grid">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div 
                key={categoryIndex}
                className="skill-category"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="category-header">
                  <div 
                    className="category-icon"
                    style={{ background: `linear-gradient(135deg, ${category.color}20, ${category.color}40)` }}
                  >
                    <span style={{ color: category.color }}>
                      {category.icon}
                    </span>
                  </div>
                  <h3 className="category-title">{category.title}</h3>
                </div>
                
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skillIndex}
                      className="skill-item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="skill-info">
                        <div className="skill-name">
                          <span className="skill-icon">{skill.icon}</span>
                          {skill.name}
                        </div>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      
                      <div className="skill-bar">
                        <motion.div 
                          className="skill-progress"
                          style={{ 
                            background: `linear-gradient(90deg, ${category.color}, ${category.color}80)` 
                          }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;