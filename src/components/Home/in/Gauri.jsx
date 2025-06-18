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
          className="font-oct-400"
        >
          क्या है HomeIVF?
        </Typography>
        <Typography
          sx={{
            color: "#717171",
            fontSize: { md: "16px", lg: "26px" },
            lineHeight: "36px",
            my: "20px",
          }}
          className="font-oct-400"
        >
          HomeIVF भारत का पहला फर्टिलिटी प्रोग्राम है जो IVF संबंधित हर प्रोसेस
          को आपके घर तक लाता है। इसकी स्थापना भारत की सबसे मशहूर और
          अंतरराष्ट्रीय ख्याति प्राप्त कर चुकी डॉक्टर गौरी अग्रवाल हैं। डॉक्टर
          गौरी अग्रवाल पिछले क़रीबन २० वर्षों से IVF क्षेत्र में काम कर रहीं है
          और अब तक 25000 IVF डिलीवरी कर चुकी हैं।
        </Typography>
        <Button
          onClick={scrollToForm}
          sx={{
            bgcolor: "#FA8E74",
            borderRadius: "10px",
            fontSize: "20px",
            textTransform: "none",
            color: "#FFFFFF",
            my: "20px",
          }}
          fullWidth
          className="font-oct-500"
        >
          बात करें हमारे IVF एक्सपर्ट के साथ
        </Button>
      </Grid>
    </Grid>
  );
};
