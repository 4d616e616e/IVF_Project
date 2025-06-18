import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import React from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Gauri } from "./Gauri";
import { AccomplishmentsAwards } from "./AccomplishmentsAwards";

// Mobile Component
const MobileContainer = ({ scrollToForm }) => {
  return (
    <Box sx={{ my: "80px" }}>
      <Container maxWidth="xl" sx={{ px: 1.5 }}>
        <Box sx={{ mx: 1 }}>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
          >
            <SwiperSlide>
              <Box
                sx={{
                  pt: "30px",
                  pb: "30px",
                  bgcolor: "#F8F6EF",
                  borderRadius: "20px",
                }}
              >
                <Box sx={{ textAlign: "center", mb: 1 }}>
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
                      fontSize: "38px",
                      textAlign: "center",
                      mt: "10px",
                      mb: "20px",
                    }}
                    className="font-oct-400"
                  >
                    क्या है HomeIVF?
                  </Typography>
                  <Typography
                    sx={{
                      color: "#717171",
                      fontSize: "18px",
                      textAlign: "center",
                      mb: "20px",
                      lineHeight: 1.4,
                      px: 1.5,
                    }}
                    className="font-oct-400"
                  >
                    HomeIVF भारत का पहला फर्टिलिटी प्रोग्राम है जो IVF संबंधित
                    हर प्रोसेस को आपके घर तक लाता है। इसकी स्थापना भारत की सबसे
                    मशहूर और अंतरराष्ट्रीय ख्याति प्राप्त कर चुकी डॉक्टर गौरी
                    अग्रवाल हैं। डॉक्टर गौरी अग्रवाल पिछले क़रीबन २० वर्षों से
                    IVF क्षेत्र में काम कर रहीं है और अब तक 25000 IVF डिलीवरी कर
                    चुकी हैं।
                  </Typography>
                </Box>

                <Box sx={{ mx: 2 }}>
                  <Button
                    onClick={scrollToForm}
                    sx={{
                      bgcolor: "#FA8E74",
                      borderRadius: "10px",
                      fontSize: "18px",
                      textTransform: "none",
                      color: "#FFFFFF",
                    }}
                    fullWidth
                    className="font-700"
                  >
                    बात करें हमारे IVF एक्सपर्ट के साथ
                  </Button>
                </Box>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <AccomplishmentsAwards />
            </SwiperSlide>
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
};

// Desktop Component
const DesktopContainer = ({ scrollToForm }) => {
  return (
    <Box sx={{ bgcolor: "#FFFFFF", my: "80px" }}>
      <Container
        maxWidth="xl"
        sx={{
          bgcolor: "#F8F6EF",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
        }}
      >
        <Box sx={{ mx: -3 }}>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
          >
            <SwiperSlide>
              <Gauri scrollToForm={scrollToForm} />
            </SwiperSlide>
            <SwiperSlide>
              <AccomplishmentsAwards />
            </SwiperSlide>
          </Swiper>
        </Box>
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
