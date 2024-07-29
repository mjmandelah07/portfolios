import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/portfolio.css";

import spg from "../assets/images/spg2.png";
import tophcomfy from "../assets/images/tophcomfy.png";
import portfolio from "../assets/images/portfolio.png";
import blog from "../assets/images/blog.png";
import melan from "../assets/images/melan.png";
import digital from "../assets/images/72digital.png";
import ShowCaseItem from "../components/ShowCaseItem";
import food from "../assets/images/food.png";
import tcf from "../assets/images/tcf.png";


export default function Portfolio() {
  // Data representing each item
  const showcaseData = [
    { image: spg, title: "Business WebApp", link: "https://spgtl.com" },
    {
      image: tcf,
      title: "E commerce WebApp",
      link: "https://tcfreal.netlify.app",
    },
    {
      image: food,
      title: "Food menu WebApp",
      link: "https://mjmandelah-enterprises.netlify.app",
    },
    {
      image: digital,
      title: "72 Digital Concept",
      link: "https://marketing-websites.netlify.app",
    },
    {
      image: melan,
      title: "showcase WebApp",
      link: "https://melan-template.netlify.app",
    },
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
      image: blog,
      title: "Personal Blog WebApp",
      link: "https://aramid-client-blog.onrender.com/#/",
    },
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
