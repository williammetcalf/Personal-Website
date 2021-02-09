import { Box, Card, CardContent, styled, Typography } from "@material-ui/core";
import React, { FC } from "react";

export interface ItemProps {
  imgSrc: string;
  text: string;
}

const Item: FC<ItemProps> = (props) => {
  const {} = props;

  return (
    <StyledCard>
      <StyledImage src={require("../../images/code.jpg")} />
      <HiddenText>
        <Typography>Some text goes here and is about this long</Typography>
      </HiddenText>
    </StyledCard>
  );
};

const StyledCard = styled(Card)({
  position: "relative",
  textAlign: "center",
  height: 200,
});

const StyledCardContent = styled(CardContent)({
  height: "100%",
});

const HiddenText = styled(CardContent)({
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  top: 0,
  opacity: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "#333",
  transition: "all 0.3s ease-in",
  "&:hover": {
    transform: "scale(1.05)",
    opacity: 1,
  },
});

const StyledImage = styled("img")({
  width: "100%",
  height: "100%",
});

export default Item;
