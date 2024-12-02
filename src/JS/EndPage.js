import React from "react";
import { useInView } from "react-intersection-observer";
import "../CSS/EndPage.css";

const EndPage = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Solo se activa una vez
    threshold: 0.3, // Se activa cuando el 30% del componente está en vista
  });

  return (
    <div className={`EndPage-container ${inView ? "fade-in" : ""}`} ref={ref}>
      <hr className="divider" />
      <div className="footer-content">
        <p>
          Designed by{" "}
          <a
            href="https://bootstrapmade.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Javier Llanos
          </a>
        </p>
      </div>
    </div>
  );
};

export default EndPage;
