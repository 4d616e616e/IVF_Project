import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const Gauri = ({ scrollToForm }) => {
  return (
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
          What is <span className="font-700">HomeIVF</span>?
        </Typography>
        <Typography
          sx={{
            color: "#717171",
            fontSize: { md: "16px", lg: "32px" },
            my: "35px",
          }}
          className="font-400"
        >
          HomeIVF by Dr. Gauri Agarwal is India's first fertility program that
          brings almost the entire IVF process to
          <span className="font-700"> your doorstep</span>.
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
          Talk to our IVF Expert
        </Button>
      </Grid>
    </Grid>
  );
};
