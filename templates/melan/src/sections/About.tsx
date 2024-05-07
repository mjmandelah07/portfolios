import "../assets/css/about.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import dot from "../assets/images/color_grid.png.webp";
import about from "../assets/images/Image.png";

export default function About() {
  return (
    <section className="about_me" id="about">
      <div className="about_large_title d-none d-lg-block">About</div>
      <Container>
        <Row className="align-items-center position-relative z-3">
          <Col xl={6} md={6}>
            <div className="about_e_details">
              <h3>About me</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida Risus com odo viverra
                maecenas.
              </p>
              <div className="download_cv">
                <a className="boxed-btn3" href="#">
                  Download CV
                </a>
              </div>
            </div>
          </Col>
          <Col xl={6} md={6}>
            <div className="about_img">
              <div className="color_pattern d-none d-lg-block">
                <img src={dot} alt="" />
              </div>
              <div className="my_Pic">
                <img src={about} alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
