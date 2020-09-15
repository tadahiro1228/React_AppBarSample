import React from "react";
import { useSpring, animated } from "react-spring";

const AnimationString = ({ text }) => {
  const props = useSpring({
    to: [
      { opacity: 1, color: "#ffaaee" },
      { opacity: 0, color: "rgb(14,26,19)" }
    ],
    from: { opacity: 0, color: "red" }
  });
  return <animated.div style={props}>{text}</animated.div>;
};

export default AnimationString;
