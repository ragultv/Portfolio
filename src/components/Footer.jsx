import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


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
      href="https://twitter.com/"
      target="_blank"
      rel="noreferrer"
      className="icon-colour home-social-icons"
    >
      <AiOutlineTwitter />
    </a>
  </li>
  <li className="social-icons">
    <a
      href="https://www.linkedin.com/in/"
      target="_blank"
      rel="noreferrer"
      className="icon-colour home-social-icons"
    >
      <FaLinkedinIn />
    </a>
  </li>
  <li className="social-icons">
    <a
      href="https://www.instagram.com/ragul-t"
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
          <h3>Copyright © {year} RKB</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/rahul4coding"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/rahuuulbhatija"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/rahul-bhatija/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/rahul.bhatija"
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
