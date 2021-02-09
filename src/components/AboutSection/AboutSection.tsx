import { Box, Card, Container, styled, Typography } from "@material-ui/core";
import React, { FC } from "react";

const AboutSection: FC = () => {
  return (
    <Container maxWidth="md">
      <Card>
        <StyledCardHeader>
          <BlurredBackground>
            <StyledTypography variant="h3">William Metcalf</StyledTypography>
            <StyledTypography variant="h6">
              Full-Stack Developer
            </StyledTypography>
          </BlurredBackground>
        </StyledCardHeader>
      </Card>
      <Typography
        variant="body1"
        style={{ color: "#ccc", marginTop: "3em", textAlign: "center" }}
      >
        Hello! My name is William (Bill) Metcalf, and I am a profession
        full-stack web developer!
      </Typography>
    </Container>
  );
};

const StyledCardHeader = styled(Box)({
  background: `url(${require("../../images/meandderby.jpeg")})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  minHeight: 300,
  display: "flex",
  flexDirection: "column",
});

const BlurredBackground = styled(Box)({
  flex: 1,
  backgroundColor: "rgba(0,0,0,0.4)",
  backdropFilter: "blur(4px)",
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
