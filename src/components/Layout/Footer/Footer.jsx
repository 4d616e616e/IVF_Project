import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const Footer = () => {
  return (
    <footer>
      <Box sx={{ pt: "80px" }}>
        <Box
          sx={{
            border: "2px solid #FFC001",
            bgcolor: "#FFC001",
            py: "80px",
            position: "relative",
            px: { xs: "21px", md: "63px" },
          }}
        >
          <Container maxWidth="xl">
            <Typography fontSize="22px">
              You’ve been strong for so long. Let us take it from here.
            </Typography>
            <Typography fontSize="22px" sx={{ my: "16px" }}>
              At HomeIVF, you don’t walk this road alone.{" "}
            </Typography>
            <Typography fontSize="22px">
              We walk with you, with{" "}
              <span style={{ fontWeight: "700" }}>science</span>,{" "}
              <span style={{ fontWeight: "700" }}>care</span>, and{" "}
              <span style={{ fontWeight: "700" }}>heart.</span>
            </Typography>
          </Container>
          <Box
            sx={{
              position: "absolute",
              right: 0,
              bottom: 0,
              width: "100%", // Optional: allows image to scale with parent
              maxWidth: 814, // Prevents upscaling beyond original size
            }}
          >
            <Image
              src="/images/halfcircle.png"
              width={814}
              height={277}
              alt="Half circle"
              style={{
                width: "100%", // Responsive scaling
                height: "auto", // Maintains intrinsic aspect ratio
                display: "block", // Prevents inline spacing issues
              }}
            />
          </Box>

          <Box
            sx={{
              position: "absolute",
              right: 0,
              bottom: 0,
              width: "100%", // Optional: if you want image to scale to parent
              maxWidth: 700, // Prevents upscaling beyond native width
            }}
          >
            <Image
              src="/images/gauriandfriends.png"
              width={700}
              height={400}
              alt="Gauri and friends"
              style={{
                width: "100%", // Makes it responsive within the box
                height: "auto", // Maintains aspect ratio (intrinsic behavior)
                display: "block", // Prevents extra bottom space (optional)
              }}
            />
          </Box>
        </Box>
      </Box>
    </footer>
  );
};
