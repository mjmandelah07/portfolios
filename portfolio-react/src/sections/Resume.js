import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/resume.css";
import ResumeItem from "../components/ResumeItem";
import aboutImage from "../assets/images/forabout.jpg";

export default function Resume() {
  return (
    <section className="resume-section" id="resume">
      <Container>
        <Row>
          <Col className="text-center mb-5 wow fadeInUp" data-wow-delay="0s">
            <h2>Resume</h2>
          </Col>
        </Row>
        <Row>
          <Col lg={4} className="wow fadeInUp" data-wow-delay=".1s">
            <img
              src={aboutImage}
              alt="resume placeholder"
              className="img-fluid"
            />
          </Col>
          <Col lg={7} className="ms-auto wow fadeInUp">
            <h3 className="mb-5 work-header">Work Experience</h3>
            <ResumeItem
              title="Backend Developer"
              company="Aparte"
              location="Lagos, Nigeria"
              jobType="Fulltime"
              start="November 2024"
              end="Present"
            />

            <ResumeItem
              title="Backend Developer"
              company="Yahshuud Investment Management"
              location="Lagos, Nigeria"
              jobType="Contract"
              start="May 2024"
              end="Present"
            />
            <ResumeItem
              title="Lead Front End Developer"
              company="TOPH"
              location="Lagos, Nigeria"
              jobType="Part time"
              start="April 2024"
              end="Present"
            />

            <ResumeItem
              title="Full Stack Software Engineer (Intern)
"
              company="3NITI X KORPS"
              location="Lagos, Nigeria"
              jobType="Fulltime"
              start="October 2023"
              end="December 2023"
            />

            <h3 className="mt-5 mb-3">Education</h3>
            <div className="resume-item d-flex work">
              <div>
                <h4>Bachelor In Information Technology</h4>
                <div className="d-flex">
                  <div className="d-flex resume-meta">
                    <span className="me-3">
                      <span className="icon">
                        <i className="bi bi-calendar"></i>
                      </span>
                      <span>National Open University Of Nigeria</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="ms-auto resume-meta">
                <span className="icon">
                  <i className="bi bi-calendar"></i>
                </span>
                <span>February 2019 - February 2023</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>{" "}
    </section>
  );
}
