import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const AccomplishmentsAwards = () => {
  return (
    <Box
      sx={{
        bgcolor: "#FA8E74",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderTopLeftRadius: "20px",
        borderTopRightRadius: "20px",
        borderBottomLeftRadius: { xs: "20px", md: 0 },
        borderBottomRightRadius: { xs: "20px", md: 0 },
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          height: "455px",
          width: "254px",
          overflow: "hidden",
          left: 80,
          display: { xs: "none", md: "flex" },
        }}
      >
        <Image
          src={"/images/awards/left.png"}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: { xs: "90%", md: "1000px" },
        }}
      >
        <Typography
          className="font-700"
          fontSize={{ xs: "20px", md: "48px" }}
          sx={{ my: "20px", color: "#FFFFFF" }}
        >
          Accomplishments <span className="font-400">and</span> Awards
        </Typography>
        <Box>
          <Grid container alignItems={"center"} justifyContent="center">
            <Grid size={{ xs: 4, md: 2 }}>
              <Image
                src="/images/awards/1.png"
                width={1000}
                height={1000}
                layout="intrinsic"
                alt="Descriptive alt text"
              />
            </Grid>
            <Grid size={{ xs: 4, md: 2 }}>
              <Image
                src="/images/awards/2.png"
                width={1000}
                height={1000}
                layout="intrinsic"
                alt="Descriptive alt text"
              />
            </Grid>
            <Grid size={{ xs: 4, md: 2 }}>
              <Image
                src="/images/awards/3.png"
                width={1000}
                height={1000}
                layout="intrinsic"
                alt="Descriptive alt text"
              />
            </Grid>
            <Grid size={{ xs: 4, md: 2 }}>
              <Image
                src="/images/awards/4.png"
                width={1000}
                height={1000}
                layout="intrinsic"
                alt="Descriptive alt text"
              />
            </Grid>
            <Grid size={{ xs: 4, md: 2 }}>
              <Image
                src="/images/awards/5.png"
                width={1000}
                height={1000}
                layout="intrinsic"
                alt="Descriptive alt text"
              />
            </Grid>
          </Grid>
        </Box>
        <Typography
          textAlign="center"
          sx={{
            mt: "20px",
            fontSize: { xs: "15px", md: "20px" },
            color: "#FFFFFFE5",
          }}
        >
          Rashtra Rattan Samman for her philanthropic endeavours, including her
          efforts in providing quality healthcare to under privileged and
          empowering programs for single mothers- 2016
        </Typography>
        <Typography
          textAlign="center"
          sx={{
            my: "20px",
            fontSize: { xs: "15px", md: "20px" },
            color: "#FFFFFFE5",
          }}
        >
          National Quality Excellence Award from Quality Congress & Global
          Brands Network for ensuring highest level of quality at her centres
          alongwith providing guidance to Laqshya program- 2017
        </Typography>
        <Typography
          textAlign="center"
          sx={{
            mb: "20px",
            fontSize: { xs: "15px", md: "20px" },
            color: "#FFFFFFE5",
          }}
        >
          Dynamic Entrepreneur of the Year from Six Sigma Healthcare- 2017
        </Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          height: "455px",
          width: "254px",
          overflow: "hidden",
          right: 80,
          display: { xs: "none", md: "flex" },
        }}
      >
        <Image
          src={"/images/awards/right.png"}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </Box>
    </Box>
  );
};
