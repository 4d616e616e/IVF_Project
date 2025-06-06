import React from "react";
import { Box, Container, Grid } from "@mui/material";

export const TopContainer = () => {
  return (
    <Box
      sx={{
        background: `radial-gradient(
          circle at center,
          #15324f 0%,
          #0b243e 40%,
          #05182e 80%,
          #000e21 100%
        )`,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          height: "100%",
        }}
      >
        Manan
      </Container>
    </Box>
  );
};
