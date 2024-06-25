import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/eric2.png";
import SocialMedia from "../SocialMedia";
import TypeWriter from "./TypeWriter";
import Avatar from 'react-avatar';

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                 👋
                </span>
              </h1>

              <h1 className="heading-name">
                {/* I'M */}
                <strong className="main-name"> Cory Mack </strong>
              </h1>

              <p className="heading-description blockquote" style={{ textAlign: "justify" }}>
                A highly experienced Senior Software Developer with over 10 years of expertise in the healthcare and IT service providing industries.<br />
                Adept at leading development teams, designing scalable software solutions, and implementing cutting-edge technologies
                to solve complex business problems. Proven track record of delivering high-quality software projects on time and within budget,
                with a focus on improving operational efficiency and enhancing user experience. Strong background in full-stack development,
                system architecture, and project management.

              </p>

              <div className="heading-type">
                <TypeWriter />
              </div>
            </Col>

            <Col md={6} className="d-flex justify-content-center">
              <Avatar src={myImg} className="text-center rounded-circle mt-5 " size={300}></Avatar>
              {/* <img src={myImg} className="profile-pic " alt="avatar" /> */}
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>Get in Touch</h1>
              <p>
                {" "}
                Whether you want to get in touch, or talk about a project
                collaboration.
                <br />
                <strong>Feel free to connect with me</strong>
              </p>
              <SocialMedia />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
