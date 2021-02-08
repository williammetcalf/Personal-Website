import React, { CSSProperties, FC, useEffect, useLayoutEffect, useRef } from "react";

import { Box, styled } from "@material-ui/core";

interface Props {
  value: string;
  style?: CSSProperties;
  onViewEnter?: () => void;
}

const ContentSection: FC<Props> = (props) => {
  const { onViewEnter, style } = props;
  const ref = useRef<HTMLDivElement>();

  useLayoutEffect(() => {
    const obs = new IntersectionObserver(
      (e) => {
        if (e[0].isIntersecting) onViewEnter && onViewEnter();
      },
      { threshold: 0.5 }
    );

    obs.observe(ref.current);

    return () => obs.disconnect();
  }, []);

  return <StyledBox ref={ref} style={style}></StyledBox>;
};

const StyledBox = styled("div")({
  height: "100vh",
});

export default ContentSection;
