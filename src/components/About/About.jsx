import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
import laptopImg from "../../Assets/about.png";
import {
  FaAws,
  FaDocker,
  FaPython,
} from "react-icons/fa";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
} from "react-icons/di";

import {
  SiAngular,
  SiMysql,
  SiC,
  SiPostman,
  SiFastapi,
  SiPostgresql,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiPytorch,
  
  SiScikitlearn,
  SiOpencv,
  SiNumpy,
  SiPandas,
  SiR,
  SiFigma,
  SiLangchain,
  SiHuggingface,
  SiFlask,
  SiDjango,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";
import GitHubCalendar from "react-github-calendar";
import "./Techstack.css";

// AboutCard Component
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">Ragul</span>, a passionate AI and ML enthusiast currently pursuing B.Tech in AIML at SNS College of Technology, Coimbatore.
            <br /><br />
            I’ve completed ML internships at Cognifyz Technologies and The Reciprocal Solutions, where I built machine learning models, deployed APIs using Flask, and worked with PyTorch, OCR, and Docker-based deployments.
            <br /><br />
            I love building real-world AI projects. Some of my work includes:
            <ul>
              <li><strong>QuickPrep</strong> – AI-powered quiz generator tool for students and job seekers.</li>
              <li><strong>IMP AI</strong> – AI-based missing data imputation tool.</li>
              <li><strong>NANOTRACK</strong> – Lightweight library for real-time object detection (5K+ downloads).</li>
              <li><strong>Smart Face Attendance</strong> – Facial recognition-based attendance system.</li>
              <li><strong>Animal Detection System</strong> – Farmland animal intrusion alert using MobileNet + Twilio.</li>
            </ul>
            <br />
            I’m proficient in Python, FastAPI, Flask, OpenCV, Scikit-learn, PyTorch, Docker, Git, and PostgreSQL.
            <br /><br />
            My goal is to build intelligent solutions with LLMs, Computer Vision, and Generative AI that solve practical problems. Outside of tech, I enjoy reading, exploring new places, and yoga.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

// Techstack Component
function Techstack() {
  return (
    <>
      {/* Programming Languages & Databases */}
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons"><FaPython /><p className="tech-name">Python</p></Col>
        <Col xs={4} md={2} className="tech-icons"><SiC /><p className="tech-name">C</p></Col>
        <Col xs={4} md={2} className="tech-icons"><DiJavascript1 /><p className="tech-name">JavaScript</p></Col>
        <Col xs={4} md={2} className="tech-icons"><SiMysql /><p className="tech-name">MySQL</p></Col>
        <Col xs={4} md={2} className="tech-icons"><SiPostgresql /><p className="tech-name">PostgreSQL</p></Col>

      </Row>

      {/* AI/ML & Data */}
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons"><SiPytorch /><p className="tech-name">PyTorch</p></Col>
        <Col xs={4} md={2} className="tech-icons"><SiScikitlearn /><p className="tech-name">Scikit-learn</p></Col>
        <Col xs={4} md={2} className="tech-icons"><SiOpencv /><p className="tech-name">OpenCV</p></Col>
        <Col xs={4} md={2} className="tech-icons"><SiNumpy /><p className="tech-name">NumPy</p></Col>
        <Col xs={4} md={2} className="tech-icons"><SiPandas /><p className="tech-name">Pandas</p></Col>
        <Col xs={4} md={2} className="tech-icons"><SiR /><p className="tech-name">R Language</p></Col>
      </Row>

      {/* Web Technologies */}
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons"><SiFastapi /><p className="tech-name">FastAPI</p></Col>
        <Col xs={4} md={2} className="tech-icons"><SiFlask /><p className="tech-name"> Flask</p></Col>
        <Col xs={4} md={2} className="tech-icons"><SiDjango /><p className="tech-name">Django</p></Col>
        <Col xs={4} md={2} className="tech-icons"><DiReact /><p className="tech-name">React</p></Col>
        <Col xs={4} md={2} className="tech-icons"><SiHtml5 /><p className="tech-name">HTML</p></Col>
        <Col xs={4} md={2} className="tech-icons"><SiCss3 /><p className="tech-name">CSS</p></Col>
      </Row>


    </>
  );
}

// Toolstack Component
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* DevOps & Tools */}
      <Col xs={4} md={2} className="tech-icons"><DiGit /><p className="tech-name">Git</p></Col>
      <Col xs={4} md={2} className="tech-icons"><FaDocker /><p className="tech-name">Docker</p></Col>
      <Col xs={4} md={2} className="tech-icons"><SiLangchain /><p className="tech-name">Langchain</p></Col>
      <Col xs={4} md={2} className="tech-icons"><SiHuggingface /><p className="tech-name">Huggingface</p></Col>

      <Col xs={4} md={2} className="tech-icons"><SiPostman /><p className="tech-name">Postman</p></Col>
      <Col xs={4} md={2} className="tech-icons"><VscCode /><p className="tech-name">VS Code</p></Col>
      <Col xs={4} md={2} className="tech-icons"><SiFigma /><p className="tech-name">Figma</p></Col>
    </Row>
  );
}

// Github Component
function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="ragultv"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Row>
  );
}

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{ justifyContent: "center", paddingTop: "30px", paddingBottom: "50px" }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", color: "whitesmoke" }}>
              About <strong className="purple">Me</strong>
            </h1>
            <AboutCard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Tech<strong className="purple"> Skills</strong>
        </h1>
        <Techstack />
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
        <Github />
      </Container>
    </Container>
  );
}

export default About;
