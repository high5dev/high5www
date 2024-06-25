import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import MyJourneyCard from "./MyJourneyCard";
import developer from "../../Assets/Home (2).png";
import { SKILLS, TOOLS, ADDITIONALS } from "../../Constants";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple">About Me</strong>
            </h1>
            <Aboutcard />
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple">My Journey</strong>
            </h1>
            <MyJourneyCard />
          </Col>
          <Col md={5} style={{ paddingBottom: "50px" }} className="about-img">
            <img src={developer} alt="about" className="image-style" />
          </Col>
        </Row>
        <Row className="skill-tools-wrapper">
          <Col  className="skill-wrapper">
            <h1 className="project-heading">
              Professional <strong className="purple">Skillset </strong>
            </h1>
            {SKILLS.map((skill, index) => (
              <Techstack
                name={skill.name}
                initialRating={skill.initialRating}
                key={index}
              />
            ))}
          </Col>
          <Col className="skill-wrapper">
            <h1 className="project-heading">
              <strong className="purple">Additional</strong> Skills
            </h1>
            {ADDITIONALS.map((additional, index) => (
              <ul key={index} className="additional-name">
                <li>{additional}</li>
              </ul>
            ))}
            <h1 className="project-heading">
              <strong className="purple">Tools</strong> I use
            </h1>
            {TOOLS.map((tool, index) => (
              <ul key={index} className="tool-name">
                <li>{tool}</li>
              </ul>
            ))}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
