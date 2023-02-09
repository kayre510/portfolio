import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profilepic from "../../Assets/profilepic.jpg";
import Tilt from "react-parallax-tilt";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";

import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const resumeLink =
  "https://docs.google.com/document/d/1NvsQmgE0Yuc-upbriTjUtGoIExfcWB3OIhJQ7VRpcxg/edit?usp=sharing";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> About Me </span>
            </h1>
            <p className="home-about-body">
            I am a collaborative and curious software engineer with a passion for solving complex problems and a focus on scalability. With a background in recruiting, I have strong communication and teamwork skills and a unique perspective on building strong teams and the value of diversity in the workplace. As a full stack engineer, I have the skills and experience to tackle projects from start to finish and am always looking for new opportunities to learn and grow. I am excited to connect with other professionals in the tech industry and explore new opportunities to make a positive impact. Let's connect and see how we can work together!
            </p>
            <a className="resume">
            <Row style={{ justifyContent: "center", position: "relative" }}>
              <Button
                variant="primary"
                href={resumeLink}
                target="_blank"
                style={{ maxWidth: "250px" }}
              >
                <AiOutlineDownload />
                &nbsp;Download CV
              </Button>
            </Row>
            </a>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={profilepic} className="img-fluid"/>
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/kayre510"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kayresantos/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
