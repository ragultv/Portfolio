import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import Particle from "../Particle";
import { BsGithub } from "react-icons/bs";
import { MdFlipToBack, MdFlipToFront } from "react-icons/md";

// project images or placeholders
import quickprepImg from "../../Assets/Projects/quickprep.png";
import impaiImg from "../../Assets/Projects/imp.png";
import nanotruckImg from "../../Assets/Projects/nanotrack.png";
import faceImg from "../../Assets/Projects/smartface.png";
import animalImg from "../../Assets/Projects/animal.png";
import portfolioImg from "../../Assets/Projects/webagent.png";

// ProjectCard Component
function ProjectCard(props) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className="h-100"
      style={{ 
        perspective: "1000px",
        position: "relative",
      }}
    >
      {/* Flip Icon */}
      <div 
        onClick={handleFlip}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          zIndex: 30,
          cursor: "pointer",
          backgroundColor: "rgba(199, 112, 240, 0.9)",
          borderRadius: "50%",
          padding: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
        }}
      >
        {isFlipped ? 
          <MdFlipToFront style={{ color: "white", fontSize: "1.2em" }} /> : 
          <MdFlipToBack style={{ color: "white", fontSize: "1.2em" }} />
        }
      </div>

      {/* Card Container */}
      <div
        className="w-100 h-100"
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.6s",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          display: "grid",
          gridTemplateAreas: "'card'"
        }}
      >
        {/* Front Side */}
        <div style={{ gridArea: "card", backfaceVisibility: "hidden" }}>
          <Card className="project-card-view h-100">
            <div style={{ height: "250px", overflow: "hidden" }}>
              <Card.Img 
                variant="top" 
                src={props.imgPath} 
                alt="card-img" 
                style={{ 
                  objectFit: "cover", 
                  height: "100%", 
                  width: "100%",
                  objectPosition: "center top"
                }}
              />
            </div>
            <Card.Body className="d-flex flex-column" style={{ flex: "1", padding: "1rem" }}>
              <Card.Title style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>
                {props.title}
              </Card.Title>
              <Card.Text style={{ 
                textAlign: "justify", 
                flex: "1", 
                overflow: "hidden",
                fontSize: "0.9rem",
                lineHeight: "1.4"
              }}>
                {props.description}
              </Card.Text>

              <div className="mt-auto pt-2">
                {props.ghLink && (
                  <Button variant="primary" href={props.ghLink} target="_blank" size="sm">
                    <BsGithub /> &nbsp; GitHub
                  </Button>
                )}
                {" "}
                {props.demoLink && (
                  <Button
                    variant="primary"
                    href={props.demoLink}
                    target="_blank"
                    size="sm"
                    style={{ marginLeft: "10px" }}
                  >
                    Live Demo
                  </Button>
                )}
              </div>
            </Card.Body>
          </Card>
        </div>

        {/* Back Side - Technologies */}
        <div style={{ 
          gridArea: "card", 
          backfaceVisibility: "hidden",
          transform: "rotateY(180deg)"
        }}>
          <Card className="project-card-view h-100">
            <Card.Body className="d-flex flex-column" style={{ flex: "1", overflowY: "auto" }}>
              <Card.Title className="text-center mb-3" style={{ fontSize: "1.2em" }}>
                Tech Stack
              </Card.Title>
              
              {/* Backend */}
              {props.techStack?.backend && (
                <div style={{ marginBottom: "15px" }}>
                  <h6 style={{ color: "#c770f0", marginBottom: "8px", fontSize: "0.95em" }}>
                    Backend:
                  </h6>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {props.techStack.backend.map((tech, index) => (
                      <Badge 
                        key={index}
                        bg="secondary" 
                        style={{ 
                          backgroundColor: "#8b5a9f",
                          fontSize: "0.8em",
                          padding: "4px 8px"
                        }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Frontend */}
              {props.techStack?.frontend && (
                <div style={{ marginBottom: "15px" }}>
                  <h6 style={{ color: "#c770f0", marginBottom: "8px", fontSize: "0.95em" }}>
                    Frontend:
                  </h6>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {props.techStack.frontend.map((tech, index) => (
                      <Badge 
                        key={index}
                        bg="secondary" 
                        style={{ 
                          backgroundColor: "#9c44d6",
                          fontSize: "0.8em",
                          padding: "4px 8px"
                        }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Database */}
              {props.techStack?.database && (
                <div style={{ marginBottom: "15px" }}>
                  <h6 style={{ color: "#c770f0", marginBottom: "8px", fontSize: "0.95em" }}>
                    Database:
                  </h6>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {props.techStack.database.map((tech, index) => (
                      <Badge 
                        key={index}
                        bg="secondary" 
                        style={{ 
                          backgroundColor: "#b666d9",
                          fontSize: "0.8em",
                          padding: "4px 8px"
                        }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* AI/ML */}
              {props.techStack?.aiml && (
                <div style={{ marginBottom: "15px" }}>
                  <h6 style={{ color: "#c770f0", marginBottom: "8px", fontSize: "0.95em" }}>
                    AI/ML:
                  </h6>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {props.techStack.aiml.map((tech, index) => (
                      <Badge 
                        key={index}
                        bg="secondary" 
                        style={{ 
                          backgroundColor: "#c770f0",
                          fontSize: "0.8em",
                          padding: "4px 8px"
                        }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Tools/Deployment */}
              {props.techStack?.tools && (
                <div style={{ marginBottom: "10px" }}>
                  <h6 style={{ color: "#c770f0", marginBottom: "8px", fontSize: "0.95em" }}>
                    Tools/Deployment:
                  </h6>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {props.techStack.tools.map((tech, index) => (
                      <Badge 
                        key={index}
                        bg="secondary" 
                        style={{ 
                          backgroundColor: "#d188fc",
                          fontSize: "0.8em",
                          padding: "4px 8px"
                        }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}


// Projects Component
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've built and published.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* QuickPrep */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quickprepImg}
              isBlog={false}
              title="QuickPrep - AI Quiz Generator"
              description="An AI-powered quiz platform that generates MCQs for students, teachers, and job seekers. Supports analytics, real-time evaluation."
              ghLink="https://github.com/ragultv/QuickPrep"
              demoLink="https://quickprepai.netlify.app"
              techStack={{
                backend: ["Python", "FastAPI"],
                frontend: ["React", "HTML/CSS"],
                database: ["PostgreSQL"],
                aiml: ["LLMs", "OpenAI"],
                tools: ["Docker", "Netlify"]
              }}
            />
          </Col>

          {/* WebAgent – AI Website Generator */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolioImg}
              isBlog={false}
              title="WebAgent – AI site Generator"
              description="AI website builder that transforms text/image prompts into production-ready HTML/CSS code. Uses LLMs and design intelligence."
              demoLink="https://webagent-1.netlify.app"
              ghLink="https://github.com/ragultv/webagent"
              techStack={{
                backend: ["Python", "FastAPI"],
                frontend: ["React", "HTML/CSS", "JavaScript"],
                aiml: ["LLMs", "Hugging Face"],
                tools: ["Netlify", "Git"]
              }}
            />
          </Col>

          {/* IMP AI */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={impaiImg}
              isBlog={false}
              title="IMP AI - Imputation Tool"
              description="An AI-driven data imputation system that fills missing values using ML and statistical techniques. Suitable for cleaning datasets in ML pipelines."
              ghLink="https://github.com/ragultv/imputation-ai"
              demoLink="https://imputation-ai.onrender.com/"
              techStack={{
                backend: ["Python", "Flask"],
                frontend: ["HTML/CSS", "JavaScript"],
                aiml: ["Scikit-learn", "Pandas", "NumPy"],
                tools: ["Render", "Git"]
              }}
            />
          </Col>

          {/* NANOTRACK */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nanotruckImg}
              isBlog={false}
              title="NANOTRACK - Object Tracker"
              description="A lightweight object tracking library in Python optimized for edge devices. Uses OpenCV and YOLO.  5000+ PyPI downloads, and designed for low-compute environments."
              ghLink="https://github.com/ragultv/NanoTrack"
              techStack={{
                backend: ["Python"],
                aiml: ["OpenCV", "YOLO", "Computer Vision"],
                tools: ["PyPI", "Edge Computing", "Git"]
              }}
            />
          </Col>

          {/* Smart Face Attendance */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={faceImg}
              isBlog={false}
              title="Smart Face Attendance System"
              description="Face recognition system for real-time attendance monitoring using OpenCV and VGGNet. Eliminates proxy attendance and ideal for classrooms, offices, and secure entry points."
              ghLink="https://github.com/ragultv/smart-face-attendance-system.git"
              techStack={{
                backend: ["Python"],
                aiml: ["OpenCV", "VGGNet", "Face Recognition", "Deep Learning"],
                tools: ["Real-time Processing", "Git"]
              }}
            />
          </Col>

          {/* Animal Detection */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={animalImg}
              isBlog={false}
              title="Animal Detection in Farmland"
              description="Intrusion detection system using MobileNet SSD and OpenCV to identify animals in farmland. Sends siren alerts and SMS via Twilio API. Designed for real-time agricultural monitoring."
              ghLink="https://github.com/ragultv/ANIMAL-DETECTION.git"
              techStack={{
                backend: ["Python"],
                aiml: ["MobileNet", "OpenCV", "Computer Vision"],
                tools: ["Twilio", "IoT", "SMS API", "Git"]
              }}
            />
          </Col>

        </Row>

      </Container>
    </Container>
  );
}

export default Projects;
