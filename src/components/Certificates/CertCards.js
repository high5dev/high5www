import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from 'react-bootstrap/Badge';
import { BiLinkExternal } from "react-icons/bi";

function CertCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Badge className="position-absolute top-0 start-100 translate-middle badge-primary badge-pill">{props.issuer}</Badge>
      <Card.Body>
        <Card.Title style={{fontWeight: "bold"}}>{props.name}</Card.Title>
        <Card.Text className="purple">Issuer: {props.issuer}</Card.Text>
        <Card.Text style={{ textAlign: "center" }}>
          {props.issued_at}
        </Card.Text>
        <Button variant="primary" href={props.url} target="_blank"className="download-button">
          <BiLinkExternal /> &nbsp; Go to {props.issuer}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default CertCard;
