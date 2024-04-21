import React from "react";
import "../assets/css/service.css";
import { Container, Row, Col } from "react-bootstrap";
import ServiceItem from "../components/ServiceItem";
import desktop from "../assets/images/icons8-desktop-50 (1).png";


export default function Services() {
  return (
    <section id="service" className="service-section">
      <Container>
        <Row>
          <Col md={12} className="wow fadeInUp text-center mb-5">
       
              <h2 className="">Services</h2>
        
          </Col>
        </Row>
        <Row>
          <Col md={6} lg={4} className="text-center mb-5 wow fadeInUp">
            <div>
              <ServiceItem
                img={desktop}
                alt="desktop"
                header="Front-end Development"
                description="
Specialize in crafting captivating web interfaces using HTML, CSS, and JavaScript/TypeScript, ensuring seamless navigation and responsiveness."
              />
            </div>
          </Col>
          <Col md={6} lg={4} className="text-center mb-5 wow fadeInUp">
            <ServiceItem
              img={desktop}
              alt="desktop"
              header="Back-end Development"
              description="I Develop server-side logic and database interactions using Node.js, JavaScript/TypeScript, and manage authentication, APIs, and data storage efficiently."
            />
          </Col>
          <Col md={6} lg={4} className="text-center mb-5 wow fadeInUp">
            <ServiceItem
              img={desktop}
              alt="desktop"
              header="Full- stack Development"
              description="I excel in full stack development, proficient in JavaScript/TypeScript, Node.js, MongoDB, and PostgreSQL, crafting end-to-end solutions seamlessly.
"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
