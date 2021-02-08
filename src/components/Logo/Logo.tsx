import React, { CSSProperties, FC } from "react";

interface Props {
  style?: CSSProperties;
}

const Logo: FC<Props> = (props) => {
  const { style } = props;

  return (
    <svg
      width={42}
      height={50}
      viewBox="0 0 85 100"
      preserveAspectRatio="none"
      style={{
        stroke: "white",
        strokeWidth: 3,
        fill: "transparent",
        ...style,
      }}
    >
      <path
        d={`M 10 0 l -10 100 l 20 -50 l 5 50 l 20 -100`}
        fill="transparent"
      />
      <path
        d={`M 30 100 l 20 -100 l 5 50 l 25 -50 l -20 100`}
        fill="transparent"
      />
    </svg>
  );
};

export default Logo;
