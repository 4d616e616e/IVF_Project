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
import { AccomplishmentsAwards } from "./AccomplishmentsAwards";
import { Gauri } from "./Gauri";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, Navigation } from "swiper/modules";

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
                      mt: "54px",
                      mb: "35px",
                    }}
                    className="font-400"
                  >
                    What is <span className="font-700">HomeIVF</span>?
                  </Typography>
                  <Typography
                    sx={{
                      color: "#717171",
                      fontSize: "18px",
                      textAlign: "center",
                      mb: "48px",
                      lineHeight: 1.4,
                    }}
                    className="font-400"
                  >
                    HomeIVF by Dr. Gauri Agarwal is India's first fertility
                    program that brings almost the entire IVF process to
                    <span className="font-700"> your doorstep</span>.
                  </Typography>
                </Box>

                <Box sx={{ mx: 2 }}>
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
