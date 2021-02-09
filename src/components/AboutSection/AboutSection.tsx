import {
  Box,
  Card,
  CardContent,
  Container,
  styled,
  Typography,
} from "@material-ui/core";
import React, { FC } from "react";

interface Props {}

const AboutSection: FC<Props> = (props) => {
  const {} = props;

  return (
    <Container maxWidth="md">
      <ImageBox>
        <StyledCard>
          <StyledCardContent>
            <StyledTypography variant="h3">William Metcalf</StyledTypography>
            <StyledTypography variant="h6">
              Full-Stack Developer
            </StyledTypography>
          </StyledCardContent>
        </StyledCard>
      </ImageBox>
    </Container>
  );
};

const ImageBox = styled(Box)({
  borderRadius: 20,
  background: `url(${require("../../images/meandderby.jpeg")})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
});

const StyledCard = styled(Card)({
  backgroundColor: "rgba(0,0,0,0.4)",
  backdropFilter: "blur(4px)",
  borderRadius: 20,
  height: 350,
  position: "relative",
});

const StyledCardContent = styled(CardContent)({
  height: "100%",
  display: "flex",
  alignContent: "center",
  justifyContent: "center",
  flexDirection: "column",
});

const StyledTypography = styled(Typography)({
  textAlign: "center",
  color: "#ddd",
  textShadow: "1px 0 0 #666, 0 -1px 0 #666, 0 1px 0 #666, -1px 0 0 #666",
});

export default AboutSection;
