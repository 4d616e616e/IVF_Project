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
          className="font-oct-500"
          fontSize={{ xs: "20px", md: "48px" }}
          sx={{ my: "20px", color: "#FFFFFF" }}
        >
          उपलब्धियाँ और सम्मान
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
          className="font-oct-400"
          sx={{
            mt: "20px",
            fontSize: { xs: "17.5px", md: "20px" },
            color: "#FFFFFFE5",
          }}
        >
          'राष्ट्र रत्न सम्मान' – उनके परोपकारी कार्यों के लिए, विशेष रूप से
          वंचित वर्गों को गुणवत्तापूर्ण स्वास्थ्य सेवा प्रदान करने और एकल माताओं
          को सशक्त बनाने वाले कार्यक्रमों में योगदान के लिए – 2016
        </Typography>
        <Typography
          textAlign="center"
          className="font-oct-400"
          sx={{
            my: "20px",
            fontSize: { xs: "17.5px", md: "20px" },
            color: "#FFFFFFE5",
          }}
        >
          'नेशनल क्वालिटी एक्सीलेंस अवॉर्ड' – क्वालिटी कांग्रेस और ग्लोबल
          ब्रांड्स नेटवर्क द्वारा उच्चतम गुणवत्ता स्तर सुनिश्चित करने एवं लक्ष्य
          कार्यक्रम में मार्गदर्शन देने के लिए – 2017
        </Typography>
        <Typography
          textAlign="center"
          className="font-oct-400"
          sx={{
            mb: "20px",
            fontSize: { xs: "17.5px", md: "20px" },
            color: "#FFFFFFE5",
          }}
        >
          'डायनामिक एंटरप्रेन्योर ऑफ द ईयर' – सिक्स सिग्मा हेल्थकेयर द्वारा
          सम्मानित – 2017
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
