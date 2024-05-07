import React from "react";
import { Col } from "react-bootstrap";
import AnimatedNumber from "./AnimatedNumber";

interface CounterItemProps {
  digit: number;
  description: string;
  symbol: string;
}

const CounterItem: React.FC<CounterItemProps> = ({
  digit,
  description,
  symbol,
}) => {
  return (
    <Col xl={4} md={4}>
      <div className="single_counter text-center">
        <h3>
          <AnimatedNumber end={digit} start={10} />
          <span className="text-primary">{symbol}</span>
        </h3>
        <p>{description}.</p>
      </div>
    </Col>
  );
};

export default CounterItem;
