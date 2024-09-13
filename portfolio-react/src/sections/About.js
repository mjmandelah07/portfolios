import React from "react";
import "../assets/css/about.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import aboutImage from "../assets/images/forabout.jpg";
import myCv from "../assets/files/mojisola_aramide_cv.pdf";

export default function About() {
  return (
    <section className="about-section" id="about">
      <Container>
        <Row className="align-items-center mb-5">
          <Col lg={7} className="pe-lg-5 mb-5 mb-lg-0 wow fadeInUp">
            <div className="img-wrap">
              <img
                src={aboutImage}
                alt="about placeholder"
                className="img-fluid"
              />
            </div>
          </Col>
          <Col lg={5} className="wow fadeInUp ps-lg-5">
            <div className="section-heading">
              <h2 className="display-5 text-black">My Bio</h2>
            </div>
            <p>
              Versatile Software Developer excelling in frontend (HTML, CSS,
              JavaScript, React, Svelte) and backend (Node.js, Express.js,
              MongoDB, PostgreSQL).
            </p>
            <p>
              Adept at crafting user-centric interfaces, tackling complex
              challenges, and dedicated to ongoing full-stack proficiency.
            </p>
            <p>
              {" "}
              Eager to contribute expertise to dynamic projects while fostering
              continuous personal and professional development.
            </p>
            <div className="my-5 wow zoomIn" data-wow-delay=".2s">
              <Container>
                <Row className="mb-2">
                  <Col>
                    <div className="skill">
                      <ul className="logo-list">
                        <li id="html">
                          <h3>HTML5</h3>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col>
                    <div className="skill">
                      <ul className="logo-list">
                        <li id="js">
                          <h3>JavaScript</h3>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col>
                    <div className="skill">
                      <ul className="logo-list">
                        <li id="ts">
                          <h3>Typescript</h3>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col>
                    <div className="skill">
                      <ul className="logo-list">
                        <li id="css">
                          {" "}
                          <h3>CSS3</h3>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col>
                    {" "}
                    <div className="skill">
                      <ul className="logo-list">
                        <li id="bootstrap">
                          {" "}
                          <h3>Bootstrap CSS</h3>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col>
                    {" "}
                    <div className="skill">
                      <ul className="logo-list">
                        <li id="tailwind">
                          {" "}
                          <h3>Tailwind CSS</h3>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col>
                    <div className="skill">
                      <ul className="logo-list">
                        <li id="node">
                          {" "}
                          <h3>NODE JS</h3>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col>
                    <div className="skill">
                      <ul className="logo-list">
                        <li id="mongo">
                          {" "}
                          <h3>MongoDB</h3>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col>
                    <div className="skill">
                      <ul className="logo-list">
                        <li id="postgreSQL">
                          {" "}
                          <h3>PostgreSQL</h3>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col>
                    <div className="skill">
                      <ul className="logo-list">
                        <li id="react">
                          {" "}
                          <h3>React JS</h3>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col>
                    <div className="skill">
                      <ul className="logo-list">
                        <li id="ui">
                          {" "}
                          <h3>Material UI</h3>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col>
                    <div className="skill">
                      <ul className="logo-list">
                        <li id="python">
                          {" "}
                          <h3>Python</h3>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="d-flex">
              <a href="#contact">
                {" "}
                <Button
                  variant="primary"
                  className=" btn btn-primary about-primary-button"
                >
                  Hire Me
                </Button>
              </a>
              <a
                href={myCv}
                download="Mojisola Aramide CV"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="secondary"
                  className="btn btn-secondary about-button-secondary"
                >
                  Download CV
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
