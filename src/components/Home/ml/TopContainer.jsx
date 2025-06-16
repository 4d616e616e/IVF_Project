import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";

export const TopContainer = ({ scrollToForm }) => {
  const isMobile = useMediaQuery("(max-width:500px)");

  return (
    <Box
      sx={{
        backgroundImage: "url('/fg_hero.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          pt: { xs: "24px", md: "150px" },
          pb: { xs: "34px", md: "100px" },
        }}
      >
        <Grid container>
          <Grid
            item
            size={{ xs: 12, md: 6 }}
            sx={{
              order: { xs: 2, md: 1 },
              px: { xs: 0, md: 5 },
              mt: { xs: -5, md: 0 },
              position: "relative",
            }}
          >
            {/* Background Image (only for screen <= 500px) */}
            {isMobile && (
              <Box
                sx={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: -100,
                  zIndex: 0,
                  mx: -1.5,
                }}
              >
                <Image
                  src={"/mobilegradient.png"}
                  alt="Hero Home IVF Image"
                  width={390}
                  height={405}
                  style={{
                    width: "100%",
                    height: "405px",
                  }}
                />
              </Box>
            )}

            {/* Content */}
            <Box sx={{ position: "relative", zIndex: 1 }}>
              <Typography
                fontSize={{ xs: "32px", md: "50px" }}
                sx={{
                  color: "#FFFFFF",
                  lineHeight: { xs: "43px", md: "58px" },
                }}
                className="font-400"
              >
                ഒരു IVF ക്ലിനിക്ക്
              </Typography>
              <Typography
                fontSize={{ xs: "32px", md: "50px" }}
                sx={{
                  color: "#FFFFFF",
                  lineHeight: { xs: "43px", md: "58px" },
                }}
              >
                <span className="font-400">സന്ദർശിക്കുമ്പോൾ നിങ്ങൾക്ക്</span>{" "}
                <span className="font-700">അസ്വസ്ഥത</span>
              </Typography>
              <Typography
                fontSize={{ xs: "32px", md: "50px" }}
                sx={{
                  color: "#FFFFFF",
                  lineHeight: { xs: "43px", md: "58px" },
                }}
                className="font-400"
              >
                തോന്നാറുണ്ടോ?
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "24px", md: "35px" },
                  lineHeight: { xs: "34px", md: "50px" },
                  color: "#DBDBDB",
                  my: "32px",
                }}
                className="font-400"
              >
                ഇപ്പോൾ നിങ്ങളുടെ IVF യാത്ര{" "}
                <span className="font-700">വീട്ടിൽ നിന്ന് തന്നെ</span>{" "}
                ആരംഭിക്കാം.
              </Typography>
              <Button
                onClick={scrollToForm}
                sx={{
                  fontSize: "18px",
                  textTransform: "none",
                  bgcolor: "#FA8E74",
                  color: "#FFFFFF",
                  borderRadius: "10px",
                }}
                fullWidth
                className="font-700"
              >
                നിങ്ങളുടെ അപ്പോയിന്റ്മെന്റ് ഇപ്പോൾ ബുക്ക് ചെയ്യുക
              </Button>
            </Box>
          </Grid>

          <Grid
            item
            size={{ xs: 12, md: 6 }}
            sx={{
              order: { xs: 1, md: 2 },
            }}
          >
            <Image
              src={"/desktop.png"}
              alt="Hero Home IVF Image"
              width={576}
              height={706}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
