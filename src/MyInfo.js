// MyInfo.js
import React from "react";
import { useInView } from "react-intersection-observer";
import "./MyInfo.css";

const MyInfo = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Solo se activa una vez
    threshold: 0.1, // Se activa cuando el 10% del componente está en vista
  });

  return (
    <div className={`MyInfo-container ${inView ? "fade-in" : ""}`} ref={ref}>
      <div className="MyInfo-image">
        {/* Coloca la imagen aquí */}
        <img src="path/to/your/image.jpg" alt="Profile" />
      </div>
      <div className="MyInfo-info">
        <h2>UI/UX Designer & Web Developer</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="MyInfo-details">
          <ul>
            <li>
              <span>Birthday:</span> 1 May 1995
            </li>
            <li>
              <span>Website:</span> www.example.com
            </li>
            <li>
              <span>Phone:</span> +123 456 7890
            </li>
            <li>
              <span>City:</span> New York, USA
            </li>
          </ul>
          <ul>
            <li>
              <span>Age:</span> 30
            </li>
            <li>
              <span>Degree:</span> Master
            </li>
            <li>
              <span>Email:</span> email@example.com
            </li>
            <li>
              <span>Freelance:</span> Available
            </li>
          </ul>
        </div>
        <p>
          Officiis eligendi itaque labore et dolorum mollitia officiis optio
          vero. Quisquam sunt adipisci omnis et ut...
        </p>
      </div>
    </div>
  );
};

export default MyInfo;
