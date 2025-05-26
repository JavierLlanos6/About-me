import React from "react";
import { useInView } from "react-intersection-observer";
import "../CSS/Skills.css";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiOpenjdk,
  SiFirebase,
  SiC,
  SiFigma,
  SiJira,
  SiMysql,
} from "react-icons/si";

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const skills = [
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss3 /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "C#", icon: <SiC /> },
    { name: "Java", icon: <SiOpenjdk /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "React", icon: <SiReact /> },
    { name: "Figma", icon: <SiFigma /> },
    { name: "Jira", icon: <SiJira /> },
  ];

  return (
    <div className={`skills-container ${inView ? "fade-in" : ""}`} ref={ref}>
      <div className="skills-title">
        <span className="skills-subtitle">SKILLS</span>
        <h2>MY SKILLS</h2>
      </div>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-icon-item" key={index}>
            <div className="icon-style">{skill.icon}</div>
            <p className="icon-label">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
