import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, Navigation } from "swiper/modules";

export const CarouselContainer = ({ scrollToForm }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up(500));

  const fertilityAudience = [
    {
      id: 1,
      title:
        "कपल्स जो 6 महीने या उससे ज्यादा समय से संतान प्राप्ति का प्रयास कर रहे हैं",
      image: "/images/carousel/Img1.png",
      bgColor: "#E6D9E8",
      textColor: "#A66FAD",
    },
    {
      id: 2,
      title: "PCOS, Endometriosis या लो-ओवेरियन रिजर्व से पीड़ित महिलाओं के लिए",
      image: "/images/carousel/img2.png",
      bgColor: "#FFF2CC",
      textColor: "#FF8801",
    },
    {
      id: 3,
      title: "पुरुष जिन्हें लो-स्पर्म काउंट या मोटिलिटी संबंधी शिकायतें हैं ",
      image: "/images/carousel/img3.png",
      bgColor: "#D1EDF0",
      textColor: "#3BA7B0",
    },
    {
      id: 4,
      title:
        "अगर आपके परिवार में कोई वंशानुगत रोग (शुगर, थैलेसीमिया आदि) है और आप अपने होने वाले बच्चे को इससे बचाना चाहते हैं ",
      image: "/images/carousel/img4.png",
      bgColor: "#E1F2ED",
      textColor: "#2BBA95",
    },
  ];

  return (
    <Box sx={{ py: { xs: 4, sm: 6 } }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            mx: { xs: 0, sm: 5 },
            bgcolor: "#F8F6EF",
            pt: "30px",
            pb: { xs: "0px", sm: "30px" },
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
          }}
        >
          {/* Header Section */}
          <Box sx={{ mb: "21px" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "38px", sm: "48px" },
                  fontWeight: "400",
                  color: "#333333",
                }}
                className="font-oct-400"
              >
                यह किसके लिए है?
              </Typography>
            </Box>
          </Box>

          {/* Swiper Carousel */}
          <Box
            sx={{ mb: { xs: 0, md: "21px" }, mx: { xs: "20px", md: "62px" } }}
          >
            <Swiper
              breakpoints={{
                1440: { slidesPerView: 4 },
                1024: { slidesPerView: 3 },
                600: { slidesPerView: 2.3 },
                0: { slidesPerView: 1.2 },
              }}
              spaceBetween={20}
              scrollbar={false}
              navigation={false}
              pagination={false}
              modules={[Pagination, Scrollbar, Navigation]}
              style={{
                paddingBottom: "20px",
              }}
            >
              {fertilityAudience.map((item) => (
                <SwiperSlide key={item.id}>
                  <Box
                    sx={{
                      borderRadius: "16px",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {/* Image Section */}
                    <Box
                      sx={{
                        height: "302px",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        style={{
                          objectFit: "cover",
                        }}
                      />
                    </Box>

                    {/* Text Section */}
                    <Box
                      sx={{
                        bgcolor: item.bgColor,
                        height: "125px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        py: "7px",
                        px: "12px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "20px",
                          color: item.textColor,
                          lineHeight: 1.3,
                        }}
                        className="font-oct-500"
                      >
                        {item.title}
                      </Typography>
                    </Box>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>

          {/* CTA Button - Hidden on screens below 500px */}
          {isDesktop && (
            <Box sx={{ textAlign: "center" }}>
              <Button
                onClick={scrollToForm}
                sx={{
                  bgcolor: "#FA8E74",
                  borderRadius: "10px",
                  fontSize: "20px",
                  textTransform: "none",
                  color: "#FFFFFF",
                  width: { xs: "100%", sm: "500px", md: "612px" },
                }}
                className="font-oct-500"
              >
                बात करें हमारे IVF एक्सपर्ट के साथ
              </Button>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};
