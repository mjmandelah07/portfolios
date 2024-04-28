import "../assets/css/hero.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import dot from "../assets/images/grid.png.webp";

export default function Hero() {
  return (
    <section className="slider_area" id="home">
      <div className="single_slider d-flex align-items-center">
        <div className="shap_pattern d-none d-lg-block">
          <img src={dot} alt="" />
        </div>
        <div className="social_links">
          <ul>
            <li>
              <a href="#">
                {" "}
                <i className="fa fa-facebook"></i>{" "}
              </a>
            </li>
            <li>
              <a href="#">
                {" "}
                <i className="fa fa-twitter"></i>{" "}
              </a>
            </li>
            <li>
              <a href="#">
                {" "}
                <i className="fa fa-instagram"></i>{" "}
              </a>
            </li>
          </ul>
        </div>
        <Container>
          <Row className="align-items-center">
            <Col xl={12}>
              {" "}
              <div className="slider_text text-center">
                <h3>Hello This is Milan</h3>
                <span>Creative Designer</span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
