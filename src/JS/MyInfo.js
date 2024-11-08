// MyInfo.js
import React from "react";
import { useInView } from "react-intersection-observer";
import "../CSS/MyInfo.css";
import { FaChevronRight } from "react-icons/fa"; // Importa el icono
import ProfileImage from "../images/messizidane.jpeg";

const MyInfo = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Solo se activa una vez
    threshold: 0.3, // Se activa cuando el 10% del componente está en vista
  });

  return (
    <div className={`MyInfo-container ${inView ? "fade-in" : ""}`} ref={ref}>
      <div className="MyInfo-image">
        {/* Coloca la imagen aquí */}
        <img src={ProfileImage} alt="Profile" className="profile-image" />
      </div>
      <div className="MyInfo-info">
        <h2>System Engineer & Web Developer</h2>
        <p>
          <p>
            I am a passionate System Engineer and Web Developer with a focus on
            creating intuitive and efficient digital solutions. With experience
            in front-end and back-end development, I aim to bring ideas to life
            through clean code and engaging designs.
          </p>
        </p>
        <div className="MyInfo-details">
          <ul>
            <li>
              <FaChevronRight className="icon-green" />
              <span>Birthday:</span> 23 Mar 2000
            </li>
            <li>
              <FaChevronRight className="icon-green" />
              <span>Website:</span> https://javierllanos6.github.io/About-me/
            </li>
            <li>
              <FaChevronRight className="icon-green" />
              <span>Phone:</span> +123 456 7890
            </li>
            <li>
              <FaChevronRight className="icon-green" />
              <span>City:</span> Cochabamba, BOL
            </li>
          </ul>
          <ul>
            <li>
              <FaChevronRight className="icon-green" />
              <span>Age:</span> 24
            </li>
            <li>
              <FaChevronRight className="icon-green" />
              <span>Degree:</span> Junior
            </li>
            <li>
              <FaChevronRight className="icon-green" />
              <span>Email:</span> xavi12guz@gmail.com
            </li>
            <li>
              <FaChevronRight className="icon-green" />
              <span>Freelance:</span> Available
            </li>
          </ul>
        </div>
        <p>
          <p>
            I thrive on solving complex challenges and continually expanding my
            skill set to stay current in this fast-evolving industry. Whether
            working on collaborative projects or independent freelance work, I
            am committed to delivering high-quality results that meet clients'
            needs.
          </p>
        </p>
      </div>
    </div>
  );
};

export default MyInfo;
