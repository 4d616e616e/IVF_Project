import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useTheme } from "@mui/material/styles";

export const HindiFooter = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:780px)");

  return (
    <footer>
      <Box sx={{ pt: "80px" }}>
        <Box
          sx={{
            border: "2px solid #FFC001",
            bgcolor: "#FFC001",
            py: { xs: 0, md: "80px" },
            position: "relative",
            px: { xs: 0, md: "63px" },
          }}
        >
          <Container maxWidth="xl">
            <Box
              sx={{
                mx: { xs: -2, md: 0 },
                display: isMobile && "flex",
                flexDirection: isMobile && "column",
                alignItems: isMobile && "center",
              }}
            >
              {/* Show only on mobile */}
              {isMobile && (
                <Box>
                  <Image
                    src="/images/gnf.png"
                    alt="Stages of Pregnancy"
                    width={428}
                    height={232}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </Box>
              )}

              <Box sx={{ mx: { xs: 2, md: 0 }, my: { xs: "21px", md: 0 } }}>
                <Typography fontSize="30px" className="font-oct-400">
                  आपके अधूरे परिवार को पूरा करना हमारा एक मात्र लक्ष्य है
                </Typography>
                <Typography
                  fontSize="30px"
                  sx={{ my: "16px" }}
                  className="font-oct-400"
                >
                  और ये सफ़र हम दोनों साथ में तय करेंगे
                </Typography>
                <Typography fontSize="30px" className="font-oct-400">
                  HomeIVF के साथ
                </Typography>
                <Typography className="font-oct-500" fontSize="30px">
                  अब घर की बात, घर में ही{" "}
                </Typography>
              </Box>
            </Box>
          </Container>

          {/* Show only on desktop (above 500px) */}
          {!isMobile && (
            <>
              <Box
                sx={{
                  position: "absolute",
                  right: 0,
                  bottom: 0,
                  width: "100%",
                  maxWidth: 814,
                }}
              >
                <Image
                  src="/images/halfcircle.png"
                  width={814}
                  height={277}
                  alt="Half circle"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </Box>

              <Box
                sx={{
                  position: "absolute",
                  right: 0,
                  bottom: 0,
                  width: "100%",
                  maxWidth: 700,
                }}
              >
                <Image
                  src="/images/gauriandfriends.png"
                  width={700}
                  height={400}
                  alt="Gauri and friends"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </Box>
            </>
          )}
        </Box>
      </Box>
    </footer>
  );
};
