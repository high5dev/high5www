import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function MyJourneyCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          I started my journey in web development out of a love for creating and problem-solving. 
          Over the years, I have honed my skills in various technologies and frameworks, 
          making me proficient in developing comprehensive solutions that cater to diverse business needs.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> <a href={"https://mymanager.com/"} target="_blank">MYMANAGER</a>
            </li>
            <li className="about-activity">
              <ImPointRight /> <a href={"https://ipromise.vercel.app/"} target="_blank">IPROMISE</a>
            </li>
            <li className="about-activity">
              <ImPointRight /> <a href={"https://mm-iframe.onrender.com/"} target="_blank">MINIMALIST</a>
            </li>            
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default MyJourneyCard;
