import React from "react";
import "../assets/css/portfolio.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import spg from "../assets/images/spg.png";
import tophcomfy from "../assets/images/tophcomfy.png";
import portfolio from "../assets/images/port.png";
import cook from "../assets/images/cook1 (1).png";
import user from "../assets/images/random-user-generator.png";

export default function Portfolio() {
  return (
    <section className="portfolio-section wow FadeInUp" id="portfolio">
      <Container>
        <Row className="wow zoomIn ">
          <Col>
            <div className="section-heading text-center mb-5 wow fadeInUp">
              <h2 className="display-5">My Portfolio</h2>
            </div>
          </Col>
        </Row>

        <Row className=" wow zoomIn">
          <Col className=" portfolios" lg={4}>
            <a
              href="https://users-info-generator.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img src={user} alt="spg" className="img-fluid h-100" />
              <div className="contents">
                <h3>
                  User Generator <br />
                  Web App
                </h3>
              </div>
            </a>
          </Col>
          <Col className="portfolios" lg={4}>
            <a
              href="https://mjmandelah07.github.io/group-5-binance-software-project"
              target="_blank"
              rel="noreferrer"
            >
              <img src={cook} alt="spg" className="img-fluid " />
              <div className="contents">
                <h3>
                  Cook Collective <br /> Web App
                </h3>
              </div>
            </a>
          </Col>
          <Col className="portfolios wow zoomIn" lg={4}>
            {" "}
            <a
              href="https://mojisola-aramide-portfolio.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              <img src={portfolio} alt="spg" className="img-fluid" />
              <div className="contents">
                <h3>
                  Personal Portfolio
                  <br /> Web App
                </h3>
              </div>
            </a>
          </Col>
        </Row>
        <Row className="wow zoomIn">
          <Col className="portfolios" lg={4}>
            <a href="https://spgtl.com" target="_blank" rel="noreferrer">
              {" "}
              <img src={spg} alt="spg" className="img-fluid" />
              <div className="contents">
                <h3>
                  Business <br />
                  Web App
                </h3>
              </div>
            </a>
          </Col>
          <Col className="portfolios " lg={4}>
            <a
              href="https://tophcomfyfashion.com"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img src={tophcomfy} alt="spg" className="img-fluid" />
              <div className="contents">
                <h3>
                  Coming soon <br /> Web App
                </h3>
              </div>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
