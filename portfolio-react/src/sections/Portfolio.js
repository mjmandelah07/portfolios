import React from "react";
import "../assets/css/portfolio.css";
import { Container, Row, Col } from "react-bootstrap";

import spg from "../assets/images/spg.png";
import tophcomfy from "../assets/images/tophcomfy.png";
import portfolio from "../assets/images/portfolio.png";
import cook from "../assets/images/cook-collectives.png"
import user from "../assets/images/user.png";
import ShowCaseItem from "../components/ShowCaseItem";

export default function Portfolio() {
  // Data representing each item
  const showcaseData = [
    { image: spg, title: "Business WebApp", link: "https://spgtl.com" },
    {
      image: tophcomfy,
      title: "Coming soon  WebApp",
      link: "https://tophcomfyfashion.com",
    },
    {
      image: portfolio,
      title: "Portfolio WebApp",
      link: "https://mojisola-aramide-portfolio.netlify.app",
    },
    {
      image: cook,
      title: " Cook Collective WebApp",
      link: "https://mjmandelah07.github.io/group-5-binance-software-project",
    },
    {
      image: user,
      title: "User Generator WebApp",
      link: "https://users-info-generator.netlify.app",
    },
    // { image: Image6, title: "Innovation Unleashed" },
  ];
  return (
    <section className="portfolio-section wow FadeInUp" id="portfolio">
      <Container>
        <Row className="wow zoomIn ">
          <Col>
            <div className="section-heading text-center mb-5 wow fadeInUp">
              <h2 className="display-5">My Creative showcase</h2>
            </div>
          </Col>
        </Row>
        <Row className="g-4">
          {/* Map over the showcaseData array and render ShowCaseItem for each item */}
          {showcaseData.map((item, index) => (
            <ShowCaseItem key={index} image={item.image} title={item.title} link={item.link} />
          ))}
        </Row>
       
      </Container>
    </section>
  );
}
