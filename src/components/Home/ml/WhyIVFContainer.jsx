import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

// Array of objects for the grid items
const whyIVFData = [
  {
    id: 1,
    title: "കൂടുതൽ സ്വകാര്യത, കുറഞ്ഞ സമ്മർദ്ദം",
    iconColor: "#98D2C3",
    bgcolor: "#98D2C34D",
    iconImage: "/images/smily.png",
    height: 45,
    width: 45,
  },
  {
    id: 2,
    title: "ഓരോ ഘട്ടത്തിലും ഫെർട്ടിലിറ്റി വിദഗ്ദ്ധർ നിരീക്ഷിക്കുന്നു",
    iconColor: "#65C3CB",
    bgcolor: "#65C3CB4D",
    iconImage: "/images/doc.png",
    height: 51,
    width: 38,
  },
  {
    id: 3,
    title: "നിങ്ങളുടെ സ്വന്തം ഇടത്തിന്റെ സൗകര്യം",
    iconColor: "#F6A8CA",
    bgcolor: "#FA74984D",
    iconImage: "/images/badge.png",
    height: 42,
    width: 38,
  },
  {
    id: 4,
    title: "അത്യന്താപേക്ഷിതമാകുമ്പോൾ മാത്രം ക്ലിനിക്ക് സന്ദർശനങ്ങൾ",
    iconColor: "#FFC001",
    bgcolor: "#FFC00133",
    iconImage: "/images/car.png",
    height: 23,
    width: 46,
  },
];

const whyIVFDataLast = {
  id: 5,
  title: "ജനിതക പരിശോധനയും വ്യക്തിഗത പരിചരണവും ഉൾപ്പെടുന്നു",
  iconColor: "#AB7FB0",
  bgcolor: "#AB7FB04D",
  iconImage: "/images/love.png",
  height: 42,
  width: 38,
};

// Individual grid item component
const WhyIVFItem = ({ item }) => {
  return (
    <Grid item size={{ xs: 12, md: 6 }} sx={{ p: 2, position: "relative" }}>
      <Box
        sx={{
          position: "absolute",
          height: "60px",
          width: "60px",
          bgcolor: item.iconColor,
          borderRadius: "9px",
          top: 0,
          left: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* You can replace this with actual icon */}
        <Image
          src={item?.iconImage}
          height={item?.height}
          width={item?.width}
        />
      </Box>
      <Box
        sx={{
          bgcolor: item.bgcolor,
          borderRadius: "12px",
          py: "24px",
          pl: "54px",
          pr: "10px",
          border: "1px solid #0000001F",
        }}
      >
        <Typography fontSize={{ xs: "20px", lg: "24px" }} className="font-300">
          {item.title}
        </Typography>
      </Box>
    </Grid>
  );
};

export const WhyIVFContainer = () => {
  return (
    <Box sx={{ mt: "80px", mb: "20px" }}>
      <Container maxWidth="xl">
        <Box sx={{ mx: { xs: 0, md: 10 } }}>
          <Typography
            textAlign="center"
            sx={{ fontSize: { xs: "38px", md: "48px" }, mb: 6 }}
            className="font-400"
          >
            <span className="font-700">എന്തുകൊണ്ട്</span> HomeIVF?
          </Typography>
          <Grid container>
            {whyIVFData.map((item) => (
              <WhyIVFItem key={item.id} item={item} />
            ))}
          </Grid>
          <Grid
            item
            size={{ xs: 12, md: 6 }}
            sx={{ py: 5, px: { xs: 2, md: 25, lg: 40 }, position: "relative" }}
          >
            <Box
              sx={{
                position: "absolute",
                height: "60px",
                width: "60px",
                bgcolor: whyIVFDataLast.iconColor,
                borderRadius: "9px",
                top: 0,
                left: { xs: 0, md: 180, lg: 295 },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* You can replace this with actual icon */}
              <Image
                src={whyIVFDataLast?.iconImage}
                height={whyIVFDataLast?.height}
                width={whyIVFDataLast?.width}
              />
            </Box>
            <Box
              sx={{
                bgcolor: whyIVFDataLast.bgcolor,
                borderRadius: "12px",
                py: "24px",
                pl: "54px",
                pr: "20px",
                border: "1px solid #0000001F",
              }}
            >
              <Typography
                fontSize={{ xs: "20px", md: "24px" }}
                className="font-300"
              >
                {whyIVFDataLast.title}
              </Typography>
            </Box>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};
