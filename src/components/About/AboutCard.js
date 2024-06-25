import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="purple">Cory Mack</span>, 
            and I am a seasoned <span className="purple">software engineer</span> and <span className="purple">full-stack developer</span>
            with over a decade of experience in crafting high-quality, scalable, and user-centric web applications. 
            <br />
            I hold a Bachelor’s degree in Computer Science from Franklin University, 
            and my technical skill set includes a diverse range of programming languages and frameworks, 
            such as JavaScript, TypeScript, Python, PHP, C#, and Go, to name a few.
            <br /> 
            I am also proficient in various databases and front-end and back-end technologies, 
            making me a well-rounded developer capable of tackling complex challenges across the stack.
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
