import React from "react";
import "../assets/css/hero.css";
import { Container, Row, Col } from "react-bootstrap";
export default function Hero() {
  return (
    <section
      className="site-blocks-cover overlay bg-image wow fadeIn"
      id="home"
    >
      <Container>
        <Row className="align-items-center align-items-lg-center  justify-content-center  text-center pt-lg-0 hero-content">
          <Col lg={8}>
            <h1 className="wow fadeInUp text-white" data-wow-delay="0s">
              I'm Mojisola Aramide <br /> A Full-stack Developer
            </h1>
            <p className="wow fadeInUp text-white" data-wow-delay=".5s">
              Nice to meet <span>you!</span>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
