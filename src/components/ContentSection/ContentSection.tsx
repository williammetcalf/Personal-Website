import React, { CSSProperties, FC, useRef } from "react";

import { Container, styled } from "@material-ui/core";

import { TAB_VALUE } from "../Header/Header";
import useOnContentIntersect from "./usOnContentIntersect";

interface Props {
  value: TAB_VALUE;
  style?: CSSProperties;
  onViewEnter?: () => void;
}

const ContentSection: FC<Props> = (props) => {
  const { onViewEnter, value, style, children } = props;
  const ref = useRef<HTMLDivElement>();
  useOnContentIntersect(onViewEnter, ref);

  return (
    <StyledBox ref={ref} style={style} id={value}>
      {children}
    </StyledBox>
  );
};

const StyledBox = styled("div")({
  minHeight: "100vh",
  paddingTop: 120,
  overflowX: "hidden",
});

export default ContentSection;
