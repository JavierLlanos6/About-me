// Skills.js
import React from "react";
import { useInView } from "react-intersection-observer";
import "../CSS/Skills.css";
import ProgressBar from "../ProgressBar";

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Solo se activa una vez
    threshold: 0.5, // Se activa cuando el 10% del componente está en vista
  });
  const skills = [
    { language: "HTML", percentage: 90 },
    { language: "CSS", percentage: 88 },
    { language: "JavaScript", percentage: 80 },
    { language: "React", percentage: 77 },
    { language: "Node.js", percentage: 62 },
    { language: "MongoDB", percentage: 55 },
    { language: "Java", percentage: 70 },
    { language: "Firebase", percentage: 75 },
  ];

  return (
    <div className={`skills-container ${inView ? "fade-in" : ""}`} ref={ref}>
      <div className="skills-title">
        <span className="skills-subtitle">SKILLS</span>
        <h2>MY SKILLS</h2>
      </div>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <div className="skill-name">
              {skill.language} - {skill.percentage}%
            </div>
            <ProgressBar percentage={skill.percentage} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
