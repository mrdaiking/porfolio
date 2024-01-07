import React, { ReactNode } from "react";
import { RoughNotation } from "react-rough-notation";

interface RainbowHighlightProps {
  color: string;
  children: ReactNode;
}

const RainbowHighlight: React.FC<RainbowHighlightProps> = ({
  color,
  children,
}) => {
  // Change the animation duration depending on the length of text we're animating (speed = distance / time)
  const animationDuration = Math.floor(30 * String(children).length);

  return (
    <RoughNotation
      type="highlight"
      multiline={true}
      padding={[0, 2]}
      iterations={1}
      animationDuration={animationDuration}
      color={color}
    >
      {children}
    </RoughNotation>
  );
};

export default RainbowHighlight;