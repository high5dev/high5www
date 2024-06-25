import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import { PROJECTS } from "../../Constants";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <p className="project-heading">
        I have worked on a wide range of projects across various industries, including finance, healthcare, and social media.
        <br/>Each project has allowed me to refine my skills and adapt to new challenges,
        resulting in a diverse portfolio of work that showcases my ability to tackle complex problems and deliver exceptional results.         
        </p>
        <p>
          Feel free to visit my project.<br/>(<span style={{ color: "red" }}>Some of my projects are protected in Git due to client's privacy</span>)
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {PROJECTS.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                stack={project.stack}
                imgPath={project.image}
                technologyUsed={project.technologyUsed}
                isBlog={false}
                title={project.name}
                description={project.description}
                link={project.url}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
