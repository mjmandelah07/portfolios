import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/portfolio.css";

import rain from "../assets/images/rain.png";
import tophcomfy from "../assets/images/tophcomfy.png";
import melan from "../assets/images/melan.png";
import digital from "../assets/images/72digital.png";
import ShowCaseItem from "../components/ShowCaseItem";
import food from "../assets/images/food.png";
import tcf from "../assets/images/tcf.png";
import aparte from "../assets/images/aparte.png";

export default function Portfolio() {
  // Data representing each item
  const showcaseData = [
    {
      image: tcf,
      title: "E commerce<br>WebApp",
      link: "https://shoptoph.netlify.app",
    },
    {
      image: rain,
      title: "Investment<br>WebApp",
      link: "https://raininvestor.com",
    },
    {
      image: aparte,
      title: "Shortlet Booking<br>WebApp",
      link: "https://landing-page-aparte-ng.vercel.app",
    },
    {
      image: food,
      title: "Food menu<br>WebApp",
      link: "https://mjmandelah-enterprises.netlify.app",
    },

    {
      image: digital,
      title: "Marketing<br>WebApp",
      link: "https://marketing-websites.netlify.app",
    },
    {
      image: melan,
      title: "Showcase<br>WebApp",
      link: "https://melan-template.netlify.app",
    },
  ];
  return (
    <section className="portfolio-section wow FadeInUp" id="portfolio">
      <Container>
        <Row className="wow zoomIn ">
          <Col>
            <div className="section-heading text-left mb-5 wow fadeInUp">
              <h3 className="title">
                My <span>Portfolio</span>
              </h3>
            </div>
          </Col>
        </Row>
        <Row className="g-4">
          {/* Map over the showcaseData array and render ShowCaseItem for each item */}
          {showcaseData.map((item, index) => (
            <ShowCaseItem
              key={index}
              image={item.image}
              title={<span dangerouslySetInnerHTML={{ __html: item.title }} />}
              link={item.link}
            />
          ))}
        </Row>
      </Container>
    </section>
  );
}
