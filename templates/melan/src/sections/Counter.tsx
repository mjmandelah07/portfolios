import "../assets/css/counter.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CounterItem from "../components/CounterItem";

export default function Counter() {
  return (
    <section className="counter_area">
      <Container>
        <Row>
          <CounterItem digit={520} symbol="+" description="Total Projects" />
          <CounterItem digit={244} symbol="" description="On Going Projects" />
          <CounterItem digit={95} symbol="%" description="Job Success" />
        </Row>
      </Container>
    </section>
  );
}
