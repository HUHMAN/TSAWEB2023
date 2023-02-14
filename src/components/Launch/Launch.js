import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import rocketswing from "../../Assets/rocketswing.png";
import logomin from "../../Assets/logomin.png";
import parashoot from "../../Assets/parashoot.png";

function Launch(){
    return(
        <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row style={{paddingBottom: 50}}>
            <h1 className="heading" style={{textAlign: "center"}}> <strong>Launch and Recovery</strong></h1>
          </Row>
          <Row style={{paddingBottom: 50}}>
            <Col md={4}>
              <img src={logomin} alt="Seat"></img>
            </Col>
            <Col md={8}>
              <h3 className="purple">Motto</h3>
              <p>At every step of the way, our team is dedicated to providing a safe, comfortable, and unforgettable space travel experience.</p>
              <p>Join us on the adventure of a lifetime and book your space tourism trip today!</p>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <img src={rocketswing} alt="Rocket Swing"></img>
            </Col>
            <Col md={8}>
              <h3 className="purple">Launch</h3>
              <p>Our spacecraft is launched using the latest rocket technology, ensuring a smooth and efficient ascent into space.</p>
              <p>Our expert team of mission control specialists and engineers monitors the launch from the ground, ensuring everything runs smooth.</p>
              <p>You'll feel the intense acceleration as you leave the Earth's atmosphere and enter the vast expanse of space.</p>
            </Col>
          </Row>
          <Row style={{paddingBottom: 50}}>
          </Row>
          <Row>
            <Col md={4}>
              <img src={ parashoot } alt="Parachuette"></img>
            </Col>
            <Col md={8}>
              <h3 className="purple">Recovery</h3>
              <p>After your space journey, our spacecraft will re-enter the Earth's atmosphere and deploy a series of parachutes to slow its descent. </p>
              <p>Our experienced recovery team will be waiting to retrieve the spacecraft and its passengers.</p>
              <p>You'll land safely back on Earth, and our team will be there to greet you a and celebrate your successful journey into space.</p>
            </Col>
          </Row>
        </Container>
        <Particle />
      </Container>
    </section>
    )
}

export default Launch;