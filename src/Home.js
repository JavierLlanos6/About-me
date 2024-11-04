import React from "react";
import { ReactTyped as Typed } from "react-typed";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Javier Llanos</h1>
        <p>
          I'm{" "}
          <span className="typing-text">
            <Typed
              strings={["Fronted Developer", "Freelancer", "System Engineer"]}
              typeSpeed={50} // Velocidad de escritura
              backSpeed={35} // Velocidad de borrado
              loop // Para repetir el ciclo
              backDelay={1500} // Tiempo antes de borrar la palabra
            />
          </span>
        </p>
        <div className="social-icons">
          <a
            href="https://github.com/JavierLlanos6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/javier-llanos-2b671628a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon" />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
