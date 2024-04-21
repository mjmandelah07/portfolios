import React from "react";
import "../assets/css/footer.css";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <section className="footer-section" id="footer">
      <Container>
        <Row>
          <Col lg={5}>
            <div className="widget">
              <h3>
                About Mojisola<span className="text-primary">.</span>{" "}
              </h3>
              <p>
                Versatile Software Developer excelling in frontend (HTML, CSS,
                JavaScript, React, Svelte) and backend (Node.js, Express.js,
                MongoDB, PostgreSQL).
              </p>
            </div>
            <div className="widget">
              <h3>Connect</h3>
              <ul className="list-unstyled social">
                <li>
                  <a
                    href="https://www.linkedin.com/in/mojisola-aramide"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="">
                      <i className="bi bi-linkedin"></i>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/mjmandelah"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span class="icon-twitter">
                      {" "}
                      <i className="bi bi-twitter-x"></i>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/mj_mandelah"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="icon-instagram">
                      {" "}
                      <i className="bi bi-instagram"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={2} className="ms-auto">
            <div className="widget">
              <h3>Services</h3>
              <ul className="list-unstyled float-start links">
                <li className="mb-3">Web Design</li>
                <li className="mb-3">Frontend</li>
                <li className="mb-3">Backend</li>
              </ul>
            </div>
          </Col>
          <Col lg={4} className="ms-auto">
            {" "}
            <div className="widget">
              <h3>Contact</h3>
              <address>Lagos, Nigeria</address>
              <ul className="list-unstyled float-start links">
                <li className="mb-3">
                  <a
                    href="tel:+2348167065474"
                    className="d-flex"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="me-2">
                      <i className="bi bi-telephone-fill"></i>
                    </span>
                    <span>+234 816 706 5474</span>
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="mailto:aramidemojisola7@gmail.com"
                    className="d-flex"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="me-2">
                      <i className="bi bi-envelope-fill"></i>
                    </span>
                    <span>aramidemojisola7@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="text-center">
            <p>Copyright ©{date} All rights reserved to Mojisola Aramide</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
