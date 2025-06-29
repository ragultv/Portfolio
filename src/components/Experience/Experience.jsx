import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
import { FaMapMarkerAlt } from "react-icons/fa";

// Education Card Component (matching Projects style)
function EducationCard({ title, company, location, duration, description }) {
  return (
    <Card className="project-card-view" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Card.Body style={{ display: "flex", flexDirection: "column", flex: "1" }}>
        <Card.Title>{title} - {company}</Card.Title>
        <Card.Text style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "0.9em", marginBottom: "8px" }}>
          {duration}
        </Card.Text>
        <Card.Text style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "0.9em", marginBottom: "16px" }}>
          <FaMapMarkerAlt style={{ marginRight: "8px", color: "#c770f0" }} />
          {location}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify", flex: "1" }}>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

// Experience Card Component (matching Projects style)
function ExperienceCard({ title, company, location, duration, description }) {
  return (
    <Card className="project-card-view" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Card.Body style={{ display: "flex", flexDirection: "column", flex: "1" }}>
        <Card.Title>{title} - {company}</Card.Title>
        <Card.Text style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "0.9em", marginBottom: "8px" }}>
          {duration}
        </Card.Text>
        <Card.Text style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "0.9em", marginBottom: "16px" }}>
          <FaMapMarkerAlt style={{ marginRight: "8px", color: "#c770f0" }} />
          {location}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify", flex: "1" }}>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

// Main Experience Component
function Experience() {
  const experiences = [
    {
      title: "ML Internship",
      company: "The Reciprocal Solution",
      location: "Coimbatore, India",
      duration: "Jun - Sep 2024",
      description: "Deployed ML models using Flask, performed API testing with Postman, and gained experience in PyTorch, computer vision, OCR, multi-object tracking, and Docker-based deployment."
    },
    {
      title: "ML Internship",
      company: "Cognifyz Technologies",
      location: "Hyderabad (Remote), India",
      duration: "Mar - Apr 2024",
      description: "Utilized Python, Scikit-learn, and Pandas for model building and data analysis, including restaurant ratings prediction, location analysis, recommendations, and cuisine classification."
    }
  ];

  const education = [
    {
      title: "BTech AIML",
      company: "SNSCT, Coimbatore",
      location: "Coimbatore, India",
      duration: "2022 - Present",
      description: "Studying Artificial Intelligence and Machine Learning with focus on deep learning, computer vision, and natural language processing."
    },
    {
      title: "Higher Secondary Education",
      company: "DSMHS School, Perambalur",
      location: "Perambalur, India",
      duration: "2021 - 2022",
      description: "Completed Higher Secondary Education with specialization in Science stream, focusing on Mathematics, Physics, and Computer Science."
    },
    {
      title: "Secondary Education",
      company: "DSMHS School, Perambalur",
      location: "Perambalur, India",
      duration: "2019 - 2020",
      description: "Completed Secondary School Leaving Certificate with strong foundation in core subjects and early exposure to computer science."
    }
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        {/* Education Section */}
        <h1 className="project-heading">
          My <strong className="purple">Education</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here is my educational background and journey.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          {education.map((edu, index) => (
            <Col md={4} className="project-card" key={index}>
              <EducationCard {...edu} />
            </Col>
          ))}
        </Row>

        {/* Experience Section */}
        <h1 className="project-heading">
          Professional <strong className="purple">Experience</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are my professional experiences and internships.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {experiences.map((exp, index) => (
            <Col md={4} className="project-card" key={index}>
              <ExperienceCard {...exp} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;