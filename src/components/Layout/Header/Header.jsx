import { Call, CallOutlined, LanguageRounded } from "@mui/icons-material";
import { Box, Button, MenuItem, Select } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

export const Header = () => {
  const [language, setLanguage] = useState("en");
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        py: 1,
        px: { xs: 1, sm: 0 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          ml: { md: "27px" },
        }}
      >
        <Image src="/images/homrivf.svg" height={50} width={154} />
        <Select
          displayEmpty
          value={language}
          size="small"
          onChange={(e) => setLanguage(e.target.value)}
          sx={{
            display: { xs: "none", sm: "flex" },
            border: "1px solid #00000014",
            color: "#717171",
            backgroundColor: "#00000005",
            borderRadius: "4px",
            fontSize: "14px",
            "& .MuiSelect-select": {
              padding: "8px 12px",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "& fieldset": {
              border: "none",
            },
            "&:focus-visible": {
              outline: "none",
            },
          }}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <LanguageRounded fontSize="small" />
              {selected === "" ? (
                <em>Select Language</em>
              ) : (
                selected.toUpperCase()
              )}
            </Box>
          )}
        >
          <MenuItem
            value="en"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: "#717171",
              fontSize: "14px",
            }}
          >
            <LanguageRounded fontSize="14px" />
            EN
          </MenuItem>
          <MenuItem
            value="in"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: "#717171",
              fontSize: "14px",
            }}
          >
            <LanguageRounded fontSize="14px" />
            IN
          </MenuItem>
        </Select>
      </Box>
      <Box
        sx={{
          mr: { sm: "45px" },
          display: "flex",
          alignItems: "center",
          gap: { xs: "7px", sm: "12px" },
        }}
      >
        {/* Button Mobile - visible only on screens <= 425px */}
        <Button
          sx={{
            border: "2px solid #FA8E74",
            borderRadius: "10px",
            color: "#333333",
            display: {
              xs: "flex", // visible on extra-small (mobile)
              sm: "none", // hidden on small and up
            },
          }}
        >
          <CallOutlined sx={{ color: "#FA8E74" }} fontSize="small" />
        </Button>

        {/* Button Desktop - hidden on screens <= 425px */}
        <Button
          startIcon={<CallOutlined />}
          sx={{
            border: "2px solid #FA8E74",
            borderRadius: "10px",
            color: "#333333",
            py: "4px",
            px: "18px",
            textTransform: "none",
            fontWeight: 500,
            fontSize: "18px",
            display: {
              xs: "none", // hidden on mobile
              sm: "flex", // visible on small and up
            },
          }}
        >
          99588 85250
        </Button>

        {/* Book Now button - always visible */}
        <Button
          sx={{
            border: "2px solid #FA8E74",
            borderRadius: "10px",
            color: "#FFFFFF",
            py: "4px",
            px: "18px",
            backgroundColor: "#FA8E74",
            textTransform: "none",
            fontWeight: 500,
            fontSize: { xs: "16px", sm: "18px" },
            "&:hover": {
              backgroundColor: "#f97b5d",
              borderColor: "#f97b5d",
            },
          }}
        >
          Book Now
        </Button>
      </Box>
    </Box>
  );
};
