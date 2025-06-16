import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const StagesContainer = ({ scrollToForm }) => {
  return (
    <>
      <Box sx={{ mt: { xs: "70px", md: "150px" } }}>
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
            sx={{ mb: "9px" }}
            className="font-400"
          >
            आप हैं <span className="font-700">संतान सुख</span> के एक कदम करीब
          </Typography>
          <Image
            src="/images/p-stages.png"
            alt="Stages of Pregnancy"
            width={818}
            height={414}
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <Typography
            fontSize={{ xs: "20px", md: "32px" }}
            textAlign="center"
            sx={{
              color: "#717171",
              width: { xs: "100%", md: "670px" },
              mt: "35px",
              mb: "30px",
            }}
            className="font-400"
          >
            कृपया इन सवालों के जवाब देकर करें अपनी यात्रा आसान
          </Typography>
          <Button
            onClick={scrollToForm}
            sx={{
              bgcolor: "#FA8E74",
              borderRadius: "10px",
              fontSize: "20px",
              textTransform: "none",
              px: "85px",
              color: "#FFFFFF",
            }}
            className="font-700"
          >
            शुरुआत करें
          </Button>
        </Container>
      </Box>
    </>
  );
};
