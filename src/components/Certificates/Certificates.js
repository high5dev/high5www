import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertCard from "./CertCards";
import { CERFITICATES } from "../../Constants";

function Certificates() {
  return (
    <Container fluid className="project-section">
      <Container>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {CERFITICATES.map((certificate, index) => (
            <Col md={4} className="project-card" key={index}>
              <CertCard
                name={certificate?.name}
                imgPath={certificate?.image}
                issuer={certificate?.issuer}
                issued_at={certificate?.issued_at}
                iframe={certificate?.iframe}
                url={certificate?.url}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Certificates;