import React from "react";
import Typical from "react-typical";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Javier Llanos</h1>
        <p>
          I'm{" "}
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={["Designer", 4000, "UX/UI", 4000, "System Engineer", 4000]}
          />
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
            href="https://linkedin.com/"
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
