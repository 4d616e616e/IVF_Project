import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";

export const RoadMapContainer = () => {
  const isMobile = useMediaQuery("(max-width:500px)");

  return (
    <Box sx={{ mt: { xs: "50px", md: "70px" } }}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          textAlign="center"
          fontSize={{ xs: "38px", md: "48px" }}
          sx={{ mb: { xs: "30px", md: "80px" } }}
          className="font-400"
        >
          <span className="font-700">How</span> Does HomeIVF Work?
        </Typography>

        <Image
          src={isMobile ? "/images/roadmap2.svg" : "/images/roadmap.svg"}
          alt="Stages of Pregnancy"
          width={1262}
          height={700}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Container>
    </Box>
  );
};
