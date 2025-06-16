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
      title: `നിങ്ങൾ സ്വാഭാവികമായി ശ്രമിച്ചിട്ടും ഫലമുണ്ടായില്ലെങ്കിൽ`,
      image: "/images/arrows/a1.png",
    },
    {
      title:
        "നിങ്ങൾക്ക് ഗർഭം അലസലുകളോ പരാജയപ്പെട്ട IUI സൈക്കിളുകളോ ഉണ്ടായിട്ടുണ്ടെങ്കിൽ",
      image: "/images/arrows/a2.png",
    },
    {
      title:
        "നിങ്ങളുടെ 30-കളിൽ ആണെങ്കിൽ അടുത്ത ഘട്ടത്തിലേക്ക് കടക്കാൻ തയ്യാറാണെങ്കിൽ",
      image: "/images/arrows/a3.png",
    },
    {
      title:
        "അല്ലെങ്കിൽ നിങ്ങൾ ഉത്തരങ്ങളും വ്യക്തതയും മാത്രം തേടുകയാണെങ്കിൽ പോലും",
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
          <span className="font-700">എപ്പോൾ</span> IVF പരിഗണിക്കണം?
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
