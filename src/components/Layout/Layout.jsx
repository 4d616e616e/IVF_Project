import { Box } from "@mui/material";
import React from "react";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { useRouter } from "next/router";
import { HindiFooter } from "../Home/in/HindiFooter";
import { MalluFooter } from "../Home/ml/MalluFooter";

export const Layout = ({ scrollToForm, children }) => {
  const router = useRouter();
  return (
    <>
      <Box sx={{ m: -1 }}>
        <Header scrollToForm={scrollToForm} pathname={router.pathname} />
        <Box>{children}</Box>
        {router.pathname === "/hindi" ? (
          <HindiFooter />
        ) : router.pathname === "/malayalam" ? (
          <MalluFooter />
        ) : (
          <Footer />
        )}
      </Box>
    </>
  );
};
