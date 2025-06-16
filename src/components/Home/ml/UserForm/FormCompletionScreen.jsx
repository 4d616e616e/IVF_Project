import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const FormCompletionScreen = ({ handleClose }) => {
  return (
    <>
      <Box sx={{ p: 6, textAlign: "center" }}>
        <Image
          src="/images/submit.png"
          alt="Example"
          width={190} // Required
          height={190} // Required
          layout="intrinsic"
        />
        <Typography
          className="font-700"
          sx={{ mb: 3 }}
          fontSize={{ xs: "20px", md: "26px" }}
        >
          നിങ്ങളുടെ ഫോം വിജയകരമായി സമർപ്പിച്ചു!
        </Typography>
        <Typography sx={{ color: "#717171", fontSize: "18px", mb: 4 }}>
          നമ്മുടെ ടീം ഉടൻ തന്നെ നിങ്ങളുമായി ബന്ധപ്പെടും.
        </Typography>
        <Button
          variant="outlined"
          onClick={handleClose}
          sx={{
            backgroundColor: "#4FCAA0",
            color: "white",
            textTransform: "none",
            border: "none",
            fontSize: "16px",
            py: "7px",
            width: "150px",
            borderRadius: "7px",
            "&:hover": {
              backgroundColor: "#4FCAA0",
            },
          }}
        >
          അടയ്ക്കുക
        </Button>
      </Box>
    </>
  );
};
