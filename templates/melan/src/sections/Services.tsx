import "../assets/css/services.css";
import { Container, Row, Col } from "react-bootstrap";
import ServiceItem from "../components/ServiceItem";
import svg from "../assets/images/1.svg";

export default function Services() {
     const servicesData = [
       {
         img: svg,
         alt: "desktop",
         header: "Front-end Development",
         description:
           "Specialize in crafting captivating web interfaces using HTML, CSS, and JavaScript/TypeScript, ensuring seamless navigation and responsiveness.",
       },
       {
         img: svg,
         alt: "desktop",
         header: "Back-end Development",
         description:
           "Develop server-side logic and database interactions using Node.js, JavaScript/TypeScript, and manage authentication, and data storage efficiently.",
       },
       {
         img: svg,
         alt: "desktop",
         header: "Full-stack Development",
         description:
           "Excel in full stack development, proficient in JavaScript/TypeScript, Node.js, MongoDB, and PostgreSQL, crafting end-to-end solutions seamlessly.",
       },
     ];
  return (
    <section id="service" className="service_area ">
      <Container>
        <Row>
          <Col xl={12}>
            <div className="section_title text-center mb-5">
              <span className="">Service provided</span>
              <h3>
                Build brands campaigns <br />
                &amp; digital projects
              </h3>
            </div>
          </Col>
        </Row>
        <Row>
          {servicesData.map((service, index) => (
            <Col
              md={4}
              xl={4}
              key={index}
            >
              <ServiceItem
                img={service.img}
                alt={service.alt}
                header={service.header}
                description={service.description}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
