import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const RoadMapContainer = () => {
  return (
    <Box sx={{ mt: { xs: "90px", md: "150px" } }}>
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
          sx={{ mb: "80px" }}
          className="font-400"
        >
          HomeIVF <span className="font-700">എങ്ങനെ</span> പ്രവർത്തിക്കുന്നു?
        </Typography>
        <Image
          src="/images/mallu/Mallu-IVF.png"
          alt="Stages of Pregnancy"
          width={1262}
          height={616}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Container>
    </Box>
  );
};
