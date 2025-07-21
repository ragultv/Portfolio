import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import myImg from "../../Assets/avatar.png"; 
import Particle from "../Particle";
import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";

// Type Component
function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Python Developer",
          "ML Engineer",
          "AI Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
      }}
    />
  );
}

// Home2 Component
function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", color: "whitesmoke" }}>
              Professional <span className="purple"> Summary </span>
            </h1>
            <p className="home-about-body">
              <br />
              <br />
              I'm <b className="purple">Ragul T</b>, a B.Tech AIML student from SNS College of Technology, deeply interested in building real-world AI solutions.
              <br />
              <br />
              I have internship experience at
              <i>
                <b className="purple"> Cognifyz Technologies </b>
              </i>
              and
              <i>
                <b className="purple"> The Reciprocal Solutions.</b>
              </i>{" "}
              {/* where I worked on ML models, Flask APIs, PyTorch, OCR, and deployment using Docker. */}
              <br />
              {/* <br />
              I’ve built projects like:
              <ul>
                <li><b className="purple">QuickPrep</b> – AI-powered quiz generator with analytics</li>
                <li><b className="purple">IMP AI</b> – Data imputation using ML/statistics</li>
                <li><b className="purple">NANOTRACK</b> – Lightweight CV library (5K+ downloads)</li>
                <li><b className="purple">Smart Face Attendance</b> – Real-time facial attendance system</li>
              </ul>
              <br /> */}
              <br />
              I'm skilled in
              <b className="purple"> Machine Learning, Deep Learning, Backend Development</b> and exploring
              <b className="purple"> Generative AI & LLMs</b> for practical use cases.
              <br />
              <br />
              My goal is to become a
              <i>
                <b className="purple"> Gen AI Developer </b>
              </i>{"  "}
              who leverages AI to solve impactful problems.
            </p>
          </Col>
          <Col md={4} className="myAvtar">            
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

// Home Component
function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Ragul T</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <Tilt>
                <img src={myImg} className="home-profile-image" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
