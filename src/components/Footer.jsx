import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaMedium } from "react-icons/fa";
import { FaM } from "react-icons/fa6";


function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
       <Row>
          <Col md={12} className="home-about-social" >
          <h1 style={{color:"whitesmoke"}}>Let's Connect!</h1>
<p>
  Feel free to <span className="purple">reach out</span> and connect with me.
</p>
<ul className="home-about-social-links">
  <li className="social-icons">
    <a
      href="https://github.com/ragultv"
      target="_blank"
      rel="noreferrer"
      className="icon-colour home-social-icons"
    >
      <AiFillGithub />
    </a>
  </li>
  <li className="social-icons">
    <a
      href="https://medium.com/@ragul2607"
      target="_blank"
      rel="noreferrer"
      className="icon-colour home-social-icons"
    >
      <FaMedium />
    </a>
  </li>
  <li className="social-icons">
    <a
      href="https://www.linkedin.com/in/ragul-t-/"
      target="_blank"
      rel="noreferrer"
      className="icon-colour home-social-icons"
    >
      <FaLinkedinIn />
    </a>
  </li>
  <li className="social-icons">
    <a
      href="https://www.instagram.com/raxxgul/"
      target="_blank"
      rel="noreferrer"
      className="icon-colour home-social-icons"
    >
      <AiFillInstagram />
    </a>
  </li>
</ul>

          </Col>
        </Row>
      <Row>
        <Col md="4" className="footer-copywright">
          
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Ragul</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/ragultv"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://medium.com/@ragul2607"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaMedium />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/ragul-t-/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/raxxgul/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
