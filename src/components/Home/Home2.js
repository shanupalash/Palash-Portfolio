//import React from "react';
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm Palash Sahu, a Computer Science Post Graduate passionate about
              building{" "}
              <b className="purple">secure and scalable web applications</b>.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  Java, Spring Boot, Node.js, JavaScript, and RESTful APIs
                </b>
                ,
              </i>
              with hands-on experience in projects like AlumniEcho and Gupshup.
              <br />
              <br />
              My interests include
              <i>
                <b className="purple">
                  {" "}
                  Web Technologies and Real-Time Applications
                </b>
                ,
              </i>
              and I enjoy solving complex problems with clean, efficient code.
              <br />
              <br></br>
              <b>Key Skills:</b>
              <ul>
                <li>Programming: C, C++, Java, JavaScript</li>
                <li>Web: Node.js, HTML5, CSS3, Bootstrap, RESTful APIs</li>
                <li>Frameworks: Spring Boot, Microsoft .NET</li>
                <li>Databases: MySQL, MongoDB</li>
                <li>
                  Tools & Concepts: Git, CI/CD Pipelines, JWT Authentication,
                  Design Patterns, Data Structures and Algorithms{" "}
                </li>
              </ul>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="Palash Sahu Avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/shanupalash"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/shanu_palash_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shanupalash/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/palash_sahu_/"
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
      </Container>
    </Container>
  );
}

export default Home2;
