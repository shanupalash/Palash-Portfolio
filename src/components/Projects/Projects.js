import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import alumniEcho from "../../Assets/Projects/alumnieco.png";
import gupshup from "../../Assets/Projects/chatify.png";
import warriorFitness from "../../Assets/Projects/gym.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={alumniEcho}
              isBlog={false}
              title="AlumniEcho"
              description="A full-stack platform connecting university alumni and students for networking, mentorship, and career guidance. Features include an alumni directory with advanced search, secure JWT-based authentication, a job board, and an admin dashboard for user and content management."
              ghLink="https://github.com/shanupalash/AumniEcho---University-Alumni-Connect-Platform-"
              link
              demoLink="https://github.com/shanupalash/AumniEcho---University-Alumni-Connect-Platform-" // Replace with actual demo link
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gupshup}
              isBlog={false}
              title="Gupshup"
              description="A real-time chat application built with React.js, Node.js, Express.js, and MongoDB. Features user authentication, real-time messaging via Socket.io for group and private chats, and secure REST APIs for user and message management."
              ghLink="https://github.com/shanupalash/Gupshup-App"
              demoLink="https://github.com/shanupalash/Gupshup-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={warriorFitness}
              isBlog={false}
              title="Warrior Fitness Gym Website"
              description="A responsive gym website built with HTML, CSS, Bootstrap, and JavaScript. Showcases gym services, facilities, and membership plans with a clean UI/UX. Deployed via Hostinger with SSL certification for secure access."
              ghLink="https://github.com/shanupalash/warrior-fitness"
              demoLink="https://www.warriorfitness.co.in/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
