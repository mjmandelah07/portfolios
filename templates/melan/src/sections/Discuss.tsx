import "../assets/css/discuss.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Discuss() {
  return (
    <section className="discuss_projects">
      <Container>
        <Row>
          <Col xl={12}>
            <div className="project_text text-center">
              <h3>Let’s discuss for a project</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                eiusmod tempor <br /> incididunt ut labore et dolore magna
                aliqua.
              </p>
              <a className="boxed-btn3" href="#">
                Start Talking
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
