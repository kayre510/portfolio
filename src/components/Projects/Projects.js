import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import conference from "../../Assets/Projects/conference.png";
import chefs1 from "../../Assets/Projects/chefs1.jpg";
import Auto from "../../Assets/Projects/Auto.png";


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
              imgPath={chefs1}
              isBlog={false}
              title="Chefs4U"
              description="Single page web application that connects private chefs to foodies. Built with React.js and Python, using PostgresSQL for the database."
              ghLink="https://gitlab.com/chefs4u/chefs4u"
              demoLink="https://chefs4u.gitlab.io/chefs4u/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Auto}
              isBlog={false}
              title="Auto Service Now"
              description="Car dealership single page application built with React.js and Python. Created and integrated RESTful API's to communicate with the other microservices. "
              ghLink="https://gitlab.com/kayresantos/autoservice-now"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={conference}
              isBlog={false}
              title="Conference Connect"
              description="Conference Connect is a microservice-based web application to manage conferences, attendees, and conference locations built using React and Django. Implemented two third party APIs to retrieve weather data and photos for conference locations."
              ghLink="https://gitlab.com/kayresantos/conference-connect"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
