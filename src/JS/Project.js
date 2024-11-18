// Project.js
import React from "react";
import { useInView } from "react-intersection-observer";
import "../CSS/Project.css";
import acuaguia from "../images/AcuaGuia.jpg";
import evalexpmat from "../images/EvaluadorExpMat.jpg";
import classroom from "../images/Classroom3.jpg";

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Solo se activa una vez
    threshold: 0.3, // Se activa cuando el 10% del componente está en vista
  });

  const projects = [
    {
      id: 1,
      image: acuaguia, // Ruta de la imagen
      title: "AcuaGuía",
      description:
        "Create your own aquarium and see info about fishes, plants and more.",
      link: "https://proyecto-grado-sia.netlify.app/",
    },
    {
      id: 2,
      image: evalexpmat, // Ruta de la imagen
      title: "Evaluador de expresiones matemáticas",
      description:
        "You can evaluate mathematical expressions step by step, following the order of operations, from uploading a .txt file to obtaining the final result.",
      link: "https://evaluadorexpresiones-tresrandoms.netlify.app",
    },
    {
      id: 3,
      image: classroom, // Ruta de la imagen
      title: "Plataforma educativa",
      description:
        "A platform similar to Classroom with unique features, including group and private chat within classes, live Java code execution, and the ability to create classes, upload assignments, and join classes using a code.",
      link: "https://github.com/Mirco874/TSS-E-LEARNING_PLATFORM",
    },
    // Agrega más proyectos si es necesario
  ];

  return (
    <div className={`skills-container ${inView ? "fade-in" : ""}`} ref={ref}>
      <div className="skills-title">
        <span className="skills-subtitle">PROJECT</span>
        <h2>MY PROJECTS</h2>
      </div>
      <div className="project-container">
        {projects.map((project) => (
          <div className="card" key={project.id}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} />
              <div className="details">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
