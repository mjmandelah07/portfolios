import React, { useState } from "react";
import CountUp, { CountUpProps, useCountUp } from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

interface AnimatedNumberProps extends CountUpProps {
  end: number;
  start: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  end,
  start,
  ...rest
}) => {
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);

  useCountUp({
    ref: "counter",
    end: hasLoaded ? end : start,
    scrollSpyDelay: 0,
  });

  const handleVisibilityChange = (isVisible: boolean) => {
    if (isVisible && !hasLoaded) {
      setHasLoaded(true);
    }
  };

  return (
    <VisibilitySensor onChange={handleVisibilityChange} partialVisibility>
      <CountUp end={hasLoaded ? end : start} {...rest} />
    </VisibilitySensor>
  );
};

export default AnimatedNumber;
