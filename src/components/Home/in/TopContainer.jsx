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
                fontSize={{ xs: "37px", md: "60px" }}
                sx={{
                  color: "#FFFFFF",
                  lineHeight: { xs: "43px", md: "68px" },
                }}
                className="font-oct-400 "
              >
                शादी हुए कई साल हो गये
              </Typography>
              <Typography
                fontSize={{ xs: "37px", md: "60px" }}
                sx={{
                  color: "#FFFFFF",
                  lineHeight: { xs: "43px", md: "68px" },
                }}
              >
                <span className="font-oct-400 ">लेकिन</span>{" "}
                <span className="font-oct-500 ">संतान सुख नहीं ?</span>
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "24px", md: "50px" },
                  lineHeight: { xs: "34px", md: "46px" },
                  color: "#DBDBDB",
                  my: { xs: "20px", md: "32px" },
                }}
                className="font-oct-400 "
              >
                कोई बात नहीं, हम हैं ना !
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "28px", md: "40px" },
                  lineHeight: { xs: "34px", md: "50px" },
                  color: "#DBDBDB",
                  my: { xs: "20px", md: "32px" },
                }}
                className="font-oct-400 "
              >
                संतान होने में आ रही मुश्किलों को HomeIVF करेगी दूर, वो भी घर
                बैठे-बैठे
              </Typography>
              <Button
                onClick={scrollToForm}
                sx={{
                  fontSize: { xs: "16px", md: "20px" },
                  textTransform: "none",
                  bgcolor: "#FA8E74",
                  color: "#FFFFFF",
                  borderRadius: "10px",
                }}
                fullWidth
                className="font-oct-700 "
              >
                ज़्यादा जानकारी के लिए अभी कॉल कीजिए
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
