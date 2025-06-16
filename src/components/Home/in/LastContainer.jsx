import {
  Box,
  colors,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

export const LastContainer = () => {
  const content = [
    {
      title: `अगर आप बिना किसी परिणाम के प्राकृतिक प्रयासों से थक चुके हैं`,
      image: "/images/arrows/a1.png",
    },
    {
      title: "अगर आपके कई मिसकैरेज या फेल IUI cycles रहे हैं",
      image: "/images/arrows/a2.png",
    },
    {
      title: "अगर आप 30+ के हैं और जीवन में अगला कदम बढ़ाना चाहते हैं",
      image: "/images/arrows/a3.png",
    },
    {
      title: "या आपको अधिक क्लैरिटी और परिणाम चाहिए",
      image: "/images/arrows/a4.png",
    },
  ];

  return (
    <Box sx={{ my: { xs: "60px", md: "80px" } }}>
      <Container>
        <Typography
          textAlign="center"
          fontSize={{ xs: "38px", md: "48px" }}
          className="font-400"
        >
          <span className="font-700">कब</span> कराएं IVF?
        </Typography>
        <Grid container sx={{ mt: "30px", alignItems: "center" }}>
          <Grid
            item
            size={{ xs: 12, md: 6 }}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src="/images/lastimg.png"
              alt="IVF Considerations"
              width={506}
              height={338}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Grid>
          <Grid
            item
            size={{ xs: 12, md: 6 }}
            sx={{ mt: { xs: "42px", md: 0 }, pl: { md: 2, lg: 0 } }}
          >
            {content?.map((item, key) => (
              <React.Fragment key={key}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Image src={item?.image} height={18} width={30} alt="" />
                  <Typography
                    sx={{ fontSize: { xs: "20px", md: "22px" } }}
                    className="font-400"
                  >
                    {item?.title}
                  </Typography>
                </Box>
                {key < content.length - 1 && <Divider sx={{ my: "21px" }} />}
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
