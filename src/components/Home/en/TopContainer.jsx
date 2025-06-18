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
  const isSmallLaptop = useMediaQuery("(max-width:768px)");
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
                variant="body"
                fontSize={{ xs: "32px", md: "60px" }}
                sx={{
                  color: "#FFFFFF",
                  lineHeight: { xs: "43px", md: "68px" },
                }}
                className="font-400"
              >
                Feel{" "}
                <span
                  className="font-700"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    zIndex: 1,
                  }}
                >
                  <Box style={{ position: "relative", zIndex: 2 }}>
                    uncomfortable
                  </Box>
                  <Box
                    variant="div"
                    style={{
                      position: "absolute",
                      top: isSmallLaptop ? "17px" : "27px",
                      left: "22px",
                      zIndex: 1,
                      pointerEvents: "none", // allows text selection through the image
                    }}
                  >
                    <Image
                      src="/images/maholPuraWavy.png"
                      layout="intrinsic"
                      width={345}
                      height={64}
                      alt="Mahol Pura Wavy"
                    />
                  </Box>
                </span>
              </Typography>
              <Typography
                fontSize={{ xs: "32px", md: "60px" }}
                sx={{
                  color: "#FFFFFF",
                  lineHeight: { xs: "43px", md: "68px" },
                }}
                className="font-400"
              >
                visiting an IVF clinic?
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "24px", md: "40px" },
                  lineHeight: { xs: "34px", md: "46px" },
                  color: "#DBDBDB",
                  my: "32px",
                }}
                className="font-400"
              >
                With HomeIVF, bring the clinic to{" "}
                <span style={{ fontWeight: "bold" }} className="font-700">
                  your home.
                </span>
              </Typography>
              <Button
                onClick={scrollToForm}
                sx={{
                  fontSize: "20px",
                  textTransform: "none",
                  bgcolor: "#FA8E74",
                  color: "#FFFFFF",
                  borderRadius: "10px",
                }}
                fullWidth
                className="font-700"
              >
                Book Your Appointment Now
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
