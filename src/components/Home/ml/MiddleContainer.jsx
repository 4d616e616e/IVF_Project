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
    <Box sx={{ my: "80px" }}>
      <Container maxWidth="xl" sx={{ px: 2 }}>
        <Box
          sx={{
            pt: "30px",
            pb: "30px",
            bgcolor: "#F8F6EF",
            borderRadius: "20px",
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
              className="font-400"
            >
              എന്താണ് <span className="font-700">HomeIVF</span>?
            </Typography>
            <Typography
              sx={{
                color: "#717171",
                fontSize: "18px",
                textAlign: "center",
                mb: 3,
                lineHeight: 1.4,
              }}
              className="font-400"
            >
              ഡോ. ഗൗരി അഗർവാളിന്റെ HomeIVF എന്നത് ഇന്ത്യയിലെ ആദ്യത്തെ
              ഫെർട്ടിലിറ്റി പ്രോഗ്രാമാണ്, ഇത് IVF പ്രക്രിയയുടെ മിക്കവാറും എല്ലാ
              ഘട്ടങ്ങളും{" "}
              <span className="font-700">നിങ്ങളുടെ വീട്ടിലേക്ക്</span>{" "}
              എത്തിക്കുന്നു.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

// Desktop Component
const DesktopContainer = ({ scrollToForm }) => {
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
              pl: { xs: 2, md: "30px" },
              pr: { xs: 2, md: "15px", lg: "66px" },
            }}
          >
            <Typography
              sx={{ color: "#333333" }}
              fontSize={{ xs: "38px", md: "48px" }}
              className="font-400"
            >
              എന്താണ് <span className="font-700">HomeIVF</span>?
            </Typography>
            <Typography
              sx={{
                color: "#717171",
                fontSize: { md: "16px", lg: "28px" },
                my: "35px",
              }}
              className="font-400"
            >
              ഡോ. ഗൗരി അഗർവാളിന്റെ HomeIVF എന്നത് ഇന്ത്യയിലെ ആദ്യത്തെ
              ഫെർട്ടിലിറ്റി പ്രോഗ്രാമാണ്, ഇത് IVF പ്രക്രിയയുടെ മിക്കവാറും എല്ലാ
              ഘട്ടങ്ങളും{" "}
              <span className="font-700">നിങ്ങളുടെ വീട്ടിലേക്ക്</span>{" "}
              എത്തിക്കുന്നു.
            </Typography>
            <Button
              onClick={scrollToForm}
              sx={{
                bgcolor: "#FA8E74",
                borderRadius: "10px",
                fontSize: "20px",
                textTransform: "none",
                color: "#FFFFFF",
              }}
              fullWidth
              className="font-700"
            >
              ഞങ്ങളുടെ IVF വിദഗ്ദ്ധനുമായി സംസാരിക്കുക
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export const MiddleContainer = ({ scrollToForm }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(780));

  return (
    <>
      {isMobile ? (
        <MobileContainer scrollToForm={scrollToForm} />
      ) : (
        <DesktopContainer scrollToForm={scrollToForm} />
      )}
    </>
  );
};
