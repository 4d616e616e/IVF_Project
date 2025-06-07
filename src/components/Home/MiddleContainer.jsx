import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import React from "react";

// Mobile Component
const MobileContainer = () => {
  return (
    <Box sx={{ my: "40px" }}>
      <Container maxWidth="xl" sx={{ px: 2 }}>
        <Box
          sx={{
            pt: "30px",
            pb: "30px",
            bgcolor: "#F8F6EF",
            borderRadius: "10px",
          }}
        >
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <Image
              src="/images/gauri.svg"
              alt="Gauri Home IVF"
              width={350}
              height={196}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>
          <Box sx={{ px: 1 }}>
            <Typography
              sx={{
                color: "#333333",
                fontSize: "28px",
                textAlign: "center",
                mb: 2,
              }}
            >
              What is <span style={{ fontWeight: "bolder" }}>HomeIVF</span>?
            </Typography>
            <Typography
              sx={{
                color: "#717171",
                fontSize: "18px",
                textAlign: "center",
                mb: 3,
                lineHeight: 1.4,
              }}
            >
              HomeIVF by Dr. Gauri Agarwal is India's first fertility program
              that brings almost the entire IVF process to
              <span style={{ fontWeight: "bolder" }}> your doorstep</span>.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

// Desktop Component
const DesktopContainer = () => {
  return (
    <Box sx={{ bgcolor: "#F8F6EF", my: "80px" }}>
      <Container maxWidth="xl">
        <Grid container sx={{ pt: "47px" }}>
          <Grid item size={{ xs: 12, md: 6 }}>
            <Image
              src="/images/gauri.svg"
              alt="Gauri Home IVF"
              width={740}
              height={414}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Grid>
          <Grid
            item
            size={{ xs: 12, md: 6 }}
            sx={{
              pl: { xs: 2, md: "20px" },
              pr: { xs: 2, md: "20px", lg: "76px" },
            }}
          >
            <Typography
              sx={{ color: "#333333" }}
              fontSize={{ xs: "38px", md: "48px" }}
            >
              What is <span style={{ fontWeight: "bolder" }}>HomeIVF</span>?
            </Typography>
            <Typography
              sx={{
                color: "#717171",
                fontSize: { md: "16px", lg: "32px" },
                my: "35px",
              }}
            >
              HomeIVF by Dr. Gauri Agarwal is India's first fertility program
              that brings almost the entire IVF process to
              <span style={{ fontWeight: "bolder" }}> your doorstep</span>.
            </Typography>
            <Button
              sx={{
                bgcolor: "#FA8E74",
                borderRadius: "10px",
                fontSize: "20px",
                textTransform: "none",
                color: "#FFFFFF",
              }}
              fullWidth
            >
              Talk to our IVF Expert
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export const MiddleContainer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(780));

  return <>{isMobile ? <MobileContainer /> : <DesktopContainer />}</>;
};
