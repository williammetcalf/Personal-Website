import React, { FC, useMemo } from "react";

interface Props extends React.SVGProps<SVGSVGElement> {}

const BackgroundSvg: FC<Props> = (props) => {
  const uniqueId = useMemo(() => `background-svg-${Math.random()}`, []);
  return (
    <svg {...props}>
      <defs>
        <linearGradient id={uniqueId} gradientTransform="rotate(90)">
          <stop offset="0%" stopColor="#111" />
          <stop offset="100%" stopColor="#333" />
        </linearGradient>
      </defs>
      <rect x={0} y={0} width="100%" height="100%" fill={`url(#${uniqueId})`} />
    </svg>
  );
};

export default BackgroundSvg;
