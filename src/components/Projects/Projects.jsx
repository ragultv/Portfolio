import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Particle from "../Particle";
import { BsGithub } from "react-icons/bs";

// Replace these with your real project images or placeholders
import quickprepImg from "../../Assets/Projects/quickprep.png";
import impaiImg from "../../Assets/Projects/imp.png";
import nanotruckImg from "../../Assets/Projects/nanotrack.png";
import faceImg from "../../Assets/Projects/smartface.png";
import animalImg from "../../Assets/Projects/animal.png";
import portfolioImg from "../../Assets/Projects/webagent.png";

// ProjectCard Component
function ProjectCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp; GitHub
          </Button>
        )}

        {" "}

        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            Demo
          </Button>
        )}
      </Card.Body>
    </Card>
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
              description="An AI-powered quiz platform that generates topic-based MCQs for students, teachers, and job seekers. Supports analytics, real-time evaluation, and built with FastAPI and open-source LLMs."
              ghLink="https://github.com/ragultv/QuickPrep"
              demoLink="https://quickprepai.netlify.app"
            />
          </Col>

          {/* WebAgent – AI Website Generator */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolioImg}
              isBlog={false}
              title="WebAgent – AI site Generator"
              description="AI website builder that transforms text/image prompts into production-ready HTML/CSS code. Uses LLMs and design intelligence. Built with FastAPI, React, and open-source models."
              demoLink="https://webagent-1.netlify.app"
              ghLink="https://github.com/ragultv/webagent"
            />
          </Col>

          {/* IMP AI */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={impaiImg}
              isBlog={false}
              title="IMP AI - Imputation Tool"
              description="An AI-driven data imputation system that fills missing values using ML and statistical techniques. Suitable for cleaning datasets in ML pipelines. Built using Flask and Scikit-learn."
              ghLink="https://github.com/ragultv/imputation-ai"
              demoLink="https://imputation-ai.onrender.com/"
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
            />
          </Col>

        </Row>

      </Container>
    </Container>
  );
}

export default Projects;
