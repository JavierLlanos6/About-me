// Resume.js
import React from "react";
import { useInView } from "react-intersection-observer";
import "../CSS/Resume.css";

const Resume = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Solo se activa una vez
    threshold: 0.3, // Se activa cuando el 10% del componente está en vista
  });

  return (
    <div className={`resumen-container ${inView ? "fade-in" : ""}`} ref={ref}>
      <div className="skills-title">
        <span className="skills-subtitle">RESUME</span>
        <h2>MY RESUME</h2>
      </div>
      <div className="resume-container">
        {/* Columna Izquierda */}
        <div className="resume-column">
          <div className="resume-section">
            <h2 className="section-title">Professional Experience</h2>
            <div className="resume-item">
              <div className="resume-icon-line">
                <div className="resume-icon"></div>
                <div className="resume-line"></div>
              </div>
              <div className="resume-content">
                <h3>Web Developer</h3>
                <span>2023 Sep - 2023 Dec</span>
                <p>Cochabamba, BOL</p>
                <p>
                  {" "}
                  Develop and program a web platform for user management that
                  allows for different access levels and customized options
                  based on each user's profile. Implement automated calculations
                  to generate the Balance Sheet and Income Statement, with
                  customizable filters so users can view information according
                  to their needs.
                </p>
              </div>
            </div>
          </div>
          <div className="resume-section">
            <h2 className="section-title">Certifications</h2>
            <div className="resume-item">
              <div className="resume-icon-line">
                <div className="resume-icon"></div>
                <div className="resume-line"></div>
              </div>
              <div className="resume-content">
                <h3>Curso de introducción al desarrollo web: HTML y CSS </h3>
                <p>2024</p>
                <p>Google Digital Academy (Skillshop)</p>
              </div>
            </div>
            <div className="resume-item">
              <div className="resume-icon-line">
                <div className="resume-icon"></div>
                <div className="resume-line"></div>
              </div>
              <div className="resume-content">
                <h3>Encaminamiento de información en redes - 2022</h3>
                <p>2022</p>
                <p>Universidad Mayor de San Simón (Bolivia)</p>
              </div>
            </div>
            <div className="resume-item">
              <div className="resume-icon-line">
                <div className="resume-icon"></div>
                <div className="resume-line"></div>
              </div>
              <div className="resume-content">
                <h3>Conceptos y herramientas para la física universitaria</h3>
                <p>2018</p>
                <p>
                  Instituto tecnológico y de estudios superiores de monterrey
                  (México)
                </p>
              </div>
            </div>
          </div>

          <div className="resume-section">
            <h2 className="section-title">Education</h2>
            <div className="resume-item">
              <div className="resume-icon-line">
                <div className="resume-icon"></div>
                <div className="resume-line"></div>
              </div>
              <div className="resume-content">
                <h3>Systems Engineering</h3>
                <span>2018 - 2024</span>
                <p>Universidad Mayor de San Simón (Bolivia)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Columna Derecha */}
        <div className="resume-column">
          <div className="resume-section">
            <h2 className="section-title">Projects</h2>
            <div className="resume-item">
              <div className="resume-icon-line">
                <div className="resume-icon"></div>
                <div className="resume-line"></div>
              </div>
              <div className="resume-content">
                <h3>AcuaGuia</h3>
                <span>2024</span>
                <p>
                  Creation of an information system about freshwater fish care
                  using React and Firebase. Information such as fish data, food,
                  diseases, plants, and accessories were collected. The system
                  allows you to create your own aquarium with the measurements
                  of the aquarium and the selected fish, plants, and
                  accessories. Depending on what is selected, the system
                  verifies if all the aquarium parameters are in order;
                  otherwise, it will show a personalized message indicating why
                  there is an error.{" "}
                </p>
              </div>
            </div>
            <div className="resume-item">
              <div className="resume-icon-line">
                <div className="resume-icon"></div>
                <div className="resume-line"></div>
              </div>
              <div className="resume-content">
                <h3>ParkMyCar </h3>
                <span>2023</span>
                <p>
                  Development of a page for parking management and reservations
                  using React with Bootstrap. Users could make same-day or
                  advance reservations, and the administrator could modify
                  opening and closing hours, assign guards for specific days,
                  manage complaints, and maintain guard records.
                </p>
              </div>
            </div>
            <div className="resume-item">
              <div className="resume-icon-line">
                <div className="resume-icon"></div>
                <div className="resume-line"></div>
              </div>
              <div className="resume-content">
                <h3>Plataforma de Simulación </h3>
                <span>2022</span>
                <p>
                  Development of an Educational Simulation Platform for Systems
                  Simulation using React. Similar to a classroom environment, it
                  featured views for teachers and students, where Java code
                  could be uploaded and executed directly on the platform,
                  messaging between users, and grading of submitted assignments
                  among other features.
                </p>
              </div>
            </div>
            <div className="resume-item">
              <div className="resume-icon-line">
                <div className="resume-icon"></div>
                <div className="resume-line"></div>
              </div>
              <div className="resume-content">
                <h3>QA </h3>
                <span>2022</span>
                <p>
                  Quality assurance for a website focused on mental and physical
                  exercises for the elderly, using Robot for automated testing.
                </p>
              </div>
            </div>
            <div className="resume-item">
              <div className="resume-icon-line">
                <div className="resume-icon"></div>
                <div className="resume-line"></div>
              </div>
              <div className="resume-content">
                <h3>EducaTe </h3>
                <span>2021</span>
                <p>
                  Development of a website named "EducaTe" focused on education
                  for 6th and 7th grade children using React.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
