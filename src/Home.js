import React from "react";
import { ReactTyped as Typed } from "react-typed";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Home.css";
import MyInfo from "./JS/MyInfo";
import Skills from "./JS/Skills";
import Resume from "./JS/Resume";
import Project from "./JS/Project";
import EndPage from "./JS/EndPage";

const Home = () => {
  return (
    <div className="home-main-container">
      <div className="home-container">
        <div className="home-content">
          <h1>Javier Llanos</h1>
          <p>
            I'm{" "}
            <span className="typing-text">
              <Typed
                strings={["Fronted Developer", "Freelancer", "System Engineer"]}
                typeSpeed={50} // Velocidad de escritura
                backSpeed={34} // Velocidad de borrado
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
            {/* <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="icon" />
            </a> */}
          </div>
        </div>
      </div>
      <div className="background-scroll">
        <div data-aos="fade-up">
          <MyInfo />
        </div>
      </div>
      <div className="background-scroll">
        <div data-aos="fade-up">
          <Skills />
        </div>
      </div>
      <div className="background-scroll">
        <div data-aos="fade-up">
          <Resume />
        </div>
      </div>
      <div className="background-scroll">
        <div data-aos="fade-up">
          <Project />
        </div>
      </div>
      <div className="background-scroll">
        <div data-aos="fade-up">
          <EndPage />
        </div>
      </div>
    </div>
  );
};

export default Home;
