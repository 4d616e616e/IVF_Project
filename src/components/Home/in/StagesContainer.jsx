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
            className="font-oct-400"
          >
            अधूरा परिवार होगा जल्दी ही पूरा
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
            className="font-oct-400"
          >
            सवालों के जवाब दीजिए ताकि हम आपको और बेहतर तरीक़े से जान सकें
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
            className="font-oct-500"
          >
            यहाँ क्लिक करें
          </Button>
        </Container>
      </Box>
    </>
  );
};
