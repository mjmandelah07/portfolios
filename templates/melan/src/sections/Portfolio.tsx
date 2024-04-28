import "../assets/css/portfolio.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PortfolioItem from "../components/PortfolioItem";

import one from "../assets/images/1.png.webp";
import two from "../assets/images/2.png.webp";
import three from "../assets/images/3.png.webp";
import four from "../assets/images/4.png.webp";
import five from "../assets/images/5.png.webp";

export default function Portfolio() {
 
  return (
    <section id="portfolio">
      <div className="portfolio_area">
        {" "}
        <Container>
          <Row>
            <Col xl={12}>
              <div className="section_title text-white text-center">
                <span>Portfolios</span>
                <h3>
                  Some of my awesome <br />
                  stuffs here
                </h3>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="portfolio_image_area">
        <Container>
          <Row>
            <Col xl={5} md={5}>
              <PortfolioItem image={one} title="Product Design" alt="#" />
            </Col>
            <Col xl={7} md={7}>
              <PortfolioItem image={two} title="Product Design" alt="#" />
            </Col>
            <Col xl={4} md={6} lg={4}>
              <PortfolioItem image={three} title="Product Design" alt="#" />
            </Col>
            <Col xl={4} md={6} lg={4}>
              <PortfolioItem image={four} title="Product Design" alt="#" />
            </Col>
            <Col xl={4} md={12} lg={4}>
              <PortfolioItem image={five} title="Product Design" alt="#" />
            </Col>
          </Row>
          <Row>
            <Col xl={12}>
              <div className="more_portfolio text-center">
                <a className="line_btn" href="#">
                  More Folio
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
