import React from "react";
import { Col, Row } from "react-bootstrap";
import { Rating } from 'react-simple-star-rating'

function Techstack(props) {
  return (
    <>
    <Row style={{ justifyContent: "left", paddingBottom: "10px" }} className="align-items-center">
       <Col className="skill-name mx-3"  xl={4} lg={4} md={12} sm={12} xs={12}>
        {props.name}
      </Col>
      <Col  xl={6} lg={6} md={10} sm ={12} xs = {12} className="mx-50 skill-name mx-3" >
        <Rating
          readonly
          iconsCount={5}
          fillColor={'#f1a545'}
          emptyColor ={"#cccccc"}
          transition={true}
          allowFraction = {true}
          initialValue={props.initialRating}
          className="rating"
          style={{width:'max-content'}}
        />
      </Col>
    </Row>
    </>
  );
}

export default Techstack;
