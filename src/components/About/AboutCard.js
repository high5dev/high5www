import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="purple">Eric Thomas</span>, 
            a passionate and experienced <span className="purple">Full Stack Web Developer</span> with over 10 years of experience in building dynamic and responsive web applications. 
            <br />
            {/* Senior software Engineer who loves to transform ideas into reality using
            code.
            <br /> */}
            My expertise spans both front-end and back-end development, allowing me to create seamless and efficient user experiences from the ground up.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
