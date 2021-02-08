import React, { CSSProperties, FC, useLayoutEffect, useRef } from "react";

import { Container, styled } from "@material-ui/core";

import { TAB_VALUE } from "../Header/Header";

interface Props {
  value: TAB_VALUE;
  style?: CSSProperties;
  onViewEnter?: () => void;
}

const ContentSection: FC<Props> = (props) => {
  const { onViewEnter, value, style, children } = props;
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

  return (
    <StyledBox ref={ref} style={style} id={value}>
      <Container maxWidth="md">{children}</Container>
    </StyledBox>
  );
};

const StyledBox = styled("div")({
  height: "100vh",
  paddingTop: 80,
  overflowX: "hidden",
});

export default ContentSection;
