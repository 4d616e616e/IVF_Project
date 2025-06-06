import { Box } from "@mui/material";
import React from "react";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Box sx={{ m: -1 }}>
        <Header />
        <Box>{children}</Box>
        <Footer />
      </Box>
    </>
  );
};
