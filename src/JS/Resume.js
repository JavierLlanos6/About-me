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
                <h3>FullStack Developer - AcuaGuia</h3>
                <span>2024 Jan - 2024 Jun</span>
                <p>Cochabamba, BOL</p>
                <p>
                  {" "}
                  Developed a SPA using React.js and Firebase for managing
                  personalized freshwater aquariums. Data (fish, plants,
                  accessories, etc.) was collected from various online sources.
                  Designed UX/UI in Figma, optimized images with Squoosh, and
                  removed backgrounds using remove.bg. The system automatically
                  checks parameters like fish compatibility, pH, temperature,
                  etc., and displays condition statuses with custom messages
                  using JavaScript-driven logic. Users can edit their aquariums
                  anytime, triggering real-time updates and recalculations.
                </p>
              </div>
            </div>
            <div className="resume-item">
              <div className="resume-icon-line">
                <div className="resume-icon"></div>
                <div className="resume-line"></div>
              </div>
              <div className="resume-content">
                <h3>FullStack Developer - COBOCE R.L.</h3>
                <span>2023 Sep - 2023 Dec</span>
                <p>Cochabamba, BOL</p>
                <p>
                  {" "}
                  Developed a SPA using React.js for user management with access
                  control and role-based views. Integrated a login system and
                  features like Balance Sheet and Income Statement, displayed
                  based on user type. Used JavaScript and SQL queries to
                  generate date-filtered reports with automated calculations,
                  exported as PDF. The application connects to an Informix
                  database and includes a responsive, device-friendly interface.
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
                <h3>Foundational C# with Microsoft </h3>
                <p>FreeCodeCamp & Microsoft - 2025 </p>
              </div>
            </div>
            <div className="resume-item">
              <div className="resume-icon-line">
                <div className="resume-icon"></div>
                <div className="resume-line"></div>
              </div>
              <div className="resume-content">
                <h3>FrontEnd Development Libraries </h3>
                <p>FreeCodeCamp - 2025</p>
              </div>
            </div>
            <div className="resume-item">
              <div className="resume-icon-line">
                <div className="resume-icon"></div>
                <div className="resume-line"></div>
              </div>
              <div className="resume-content">
                <h3>Responsive Web Design </h3>
                <p>FreeCodeCamp - 2025</p>
              </div>
            </div>
            <div className="resume-item">
              <div className="resume-icon-line">
                <div className="resume-icon"></div>
                <div className="resume-line"></div>
              </div>
              <div className="resume-content">
                <h3>JavaScript Algorithms and Data Structures </h3>
                <p>FreeCodeCamp - 2025</p>
              </div>
            </div>
            <div className="resume-item">
              <div className="resume-icon-line">
                <div className="resume-icon"></div>
                <div className="resume-line"></div>
              </div>
              <div className="resume-content">
                <h3>Curso de introducción al desarrollo web: HTML y CSS </h3>
                <p>Google Digital Academy (Skillshop) - 2024</p>
              </div>
            </div>
            <div className="resume-item">
              <div className="resume-icon-line">
                <div className="resume-icon"></div>
                <div className="resume-line"></div>
              </div>
              <div className="resume-content">
                <h3>Encaminamiento de información en redes - 2022</h3>
                <p>Universidad Mayor de San Simón (Bolivia) - 2022</p>
              </div>
            </div>
            <div className="resume-item">
              <div className="resume-icon-line">
                <div className="resume-icon"></div>
                <div className="resume-line"></div>
              </div>
              <div className="resume-content">
                <h3>Conceptos y herramientas para la física universitaria</h3>
                <p>
                  Instituto tecnológico y de estudios superiores de monterrey
                  (México) - 2018
                </p>
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
                <h3>ParkMyCar </h3>
                <span>FrontEnd Developer - 2023</span>
                <p>
                  Developed a SPA using React.js, Bootstrap, and MySQL to manage
                  parking reservations with multi-role user control: admin,
                  staff, and client. Admins can set operating hours, assign
                  staff, and manage capacity. Staff handle check-ins,
                  check-outs, payments, and fines. Clients can self-register,
                  book parking spots, generate QR codes for payments, and upload
                  proof of payment. The system includes a feedback section for
                  clients and a complaints dashboard for admins. Access and
                  actions are dynamically controlled based on the authenticated
                  user role.
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
                <span>FrontEnd Developer - 2022</span>
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
                <span>QA - 2022</span>
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
                <span>FrontEnd Developer - 2021</span>
                <p>
                  Developed EducaTe, a SPA built with React.js aimed at
                  supporting the education of 6th and 7th grade students. It
                  features interactive math exercises (addition, subtraction,
                  multiplication, division) using JavaScript, delivered through
                  dynamic games like mazes, puzzles, and arrow-key navigation
                  challenges. Educational videos from YouTube are integrated and
                  stored in Firebase along with other learning content. The
                  platform provides a fun, visual learning environment to
                  reinforce foundational math and memory skills.
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
      </div>
    </div>
  );
};

export default Resume;
