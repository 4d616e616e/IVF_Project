import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useTheme } from "@mui/material/styles";

export const MalluFooter = () => {
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
                <Typography fontSize="22px" className="font-400">
                  നിങ്ങൾ ഇത്രയും കാലം ശക്തരായിരുന്നു. ഇനി ഞങ്ങൾ ഏറ്റെടുക്കട്ടെ.
                </Typography>
                <Typography
                  fontSize="20px"
                  sx={{ my: "16px" }}
                  className="font-400"
                >
                  HomeIVF-ൽ, നിങ്ങൾ ഈ വഴി ഒറ്റയ്ക്ക് നടക്കില്ല ഞങ്ങൾ
                  നിങ്ങളോടൊപ്പം
                </Typography>
                <Typography fontSize="22px" className="font-400">
                  നടക്കും, <span className="font-700">ശാസ്ത്രത്തോടും</span>
                  <span className="font-700"> പരിചരണത്തോടും</span>
                  <span className="font-700">ഹൃദയത്തോടും</span> കൂടി.
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
