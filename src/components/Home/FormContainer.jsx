import {
  Box,
  Button,
  Container,
  Grid,
  InputBase,
  InputLabel,
  Typography,
  FormHelperText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import React from "react";

export const FormContainer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:500px)");

  const [formData, setFormData] = React.useState({
    name: "",
    phoneNumber: "",
    maleAge: "",
    femaleAge: "",
  });

  const [errors, setErrors] = React.useState({
    name: "",
    phoneNumber: "",
    maleAge: "",
    femaleAge: "",
  });

  const validateFormData = () => {
    const newErrors = {
      name: "",
      phoneNumber: "",
      maleAge: "",
      femaleAge: "",
    };

    // Name validation - only alphabets and spaces
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!nameRegex.test(formData.name.trim())) {
      newErrors.name = "Name should contain only alphabets";
    }

    // Phone number validation - Indian format starting with 6-9
    const phoneRegex = /^[6-9][0-9]{9}$/;
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber =
        "Enter valid Indian phone number (10 digits, starting with 6-9)";
    }

    // Male age validation
    const maleAge = parseInt(formData.maleAge);
    if (!formData.maleAge) {
      newErrors.maleAge = "Male age is required";
    } else if (isNaN(maleAge) || maleAge < 18 || maleAge > 80) {
      newErrors.maleAge = "Male age should be between 18 and 80";
    }

    // Female age validation
    const femaleAge = parseInt(formData.femaleAge);
    if (!formData.femaleAge) {
      newErrors.femaleAge = "Female age is required";
    } else if (isNaN(femaleAge) || femaleAge < 18 || femaleAge > 80) {
      newErrors.femaleAge = "Female age should be between 18 and 80";
    }

    setErrors(newErrors);

    // Return true if no errors
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //validate the form data here
    const isValidate = validateFormData();
    if (isValidate) {
      console.log("Form is valid, submitting...", formData);
      // Handle form submission here
    } else {
      console.log("Form has errors");
    }
  };

  return (
    <Box sx={{ position: "relative", border: "2px solid transparent" }}>
      <Box
        sx={{
          position: "absolute",
          top: 200,
          left: 0,
          display: { xs: "none", md: "block" },
        }}
      >
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            height: "265px",
            width: "102px",
          }}
        >
          <Image
            src={"/images/circle.png"}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </Box>
      </Box>
      <Container maxWidth="md" sx={{ my: "75px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            fontSize={{ xs: "38px", md: "48px" }}
            fontWeight={400}
            textAlign="center"
            sx={{ mb: "38px" }}
          >
            Begin with <span style={{ fontWeight: 700 }}>One</span> Simple Step!
          </Typography>

          <form
            onSubmit={handleSubmit}
            style={{ width: isMobile ? "100%" : "560px" }}
          >
            <Grid container spacing={1.6}>
              <Grid item size={{ xs: 12, sm: 6 }}>
                <InputLabel>Name</InputLabel>
                <InputBase
                  fullWidth
                  type="text"
                  value={formData?.name}
                  placeholder="Your Name"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  sx={{
                    borderRadius: "4px",
                    backgroundColor: "#FFFFFF14",
                    border: `1px solid ${
                      errors.name ? "#f44336" : "#7171714D"
                    }`,
                    px: "7px",
                    color: "#000000",
                    fontSize: "16px",
                    height: "44px",
                    "& input::placeholder": {
                      color: "#B3B3B3",
                      opacity: 1,
                    },
                  }}
                />
                {errors.name && (
                  <FormHelperText
                    sx={{ color: "#f44336", fontSize: "12px", mt: "4px" }}
                  >
                    {errors.name}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item size={{ xs: 12, sm: 6 }}>
                <InputLabel>Phone Number</InputLabel>
                <InputBase
                  fullWidth
                  type="tel"
                  value={formData?.phoneNumber}
                  placeholder="00000-00000"
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, ""); // remove non-digits
                    if (value.length <= 10) {
                      setFormData({ ...formData, phoneNumber: value });
                    }
                  }}
                  inputProps={{
                    inputMode: "numeric",
                    pattern: "[6-9][0-9]{9}", // starts with 6-9 and 9 more digits
                    maxLength: 10,
                  }}
                  sx={{
                    borderRadius: "4px",
                    backgroundColor: "#FFFFFF14",
                    border: `1px solid ${
                      errors.phoneNumber ? "#f44336" : "#7171714D"
                    }`,
                    px: "7px",
                    color: "#000000",
                    fontSize: "16px",
                    height: "44px",
                    "& input::placeholder": {
                      color: "#B3B3B3",
                      opacity: 1,
                    },
                  }}
                />
                {errors.phoneNumber && (
                  <FormHelperText
                    sx={{ color: "#f44336", fontSize: "12px", mt: "4px" }}
                  >
                    {errors.phoneNumber}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item size={6}>
                <InputLabel>Male Age</InputLabel>
                <InputBase
                  fullWidth
                  type="text"
                  value={formData?.maleAge}
                  placeholder="00"
                  onChange={(e) => {
                    const value = e.target.value;
                    // Only allow numbers
                    if (/^\d*$/.test(value)) {
                      // Allow empty string or restrict to max 2 digits
                      if (
                        value === "" ||
                        (value.length <= 2 && parseInt(value) <= 99)
                      ) {
                        setFormData({ ...formData, maleAge: e.target.value });
                      }
                    }
                  }}
                  inputProps={{
                    inputMode: "numeric",
                    pattern: "[0-9]*",
                  }}
                  sx={{
                    borderRadius: "4px",
                    backgroundColor: "#FFFFFF14",
                    border: `1px solid ${
                      errors.maleAge ? "#f44336" : "#7171714D"
                    }`,
                    px: "7px",
                    color: "#000000",
                    fontSize: "16px",
                    height: "44px",
                    "& input::placeholder": {
                      color: "#B3B3B3",
                      opacity: 1,
                    },
                  }}
                />
                {errors.maleAge && (
                  <FormHelperText
                    sx={{ color: "#f44336", fontSize: "12px", mt: "4px" }}
                  >
                    {errors.maleAge}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item size={6}>
                <InputLabel>Female Age</InputLabel>
                <InputBase
                  fullWidth
                  type="text"
                  value={formData?.femaleAge}
                  placeholder="00"
                  onChange={(e) => {
                    const value = e.target.value;
                    // Only allow numbers
                    if (/^\d*$/.test(value)) {
                      // Allow empty string or restrict to max 2 digits
                      if (
                        value === "" ||
                        (value.length <= 2 && parseInt(value) <= 99)
                      ) {
                        setFormData({ ...formData, femaleAge: e.target.value });
                      }
                    }
                  }}
                  inputProps={{
                    inputMode: "numeric",
                    pattern: "[0-9]*",
                  }}
                  sx={{
                    borderRadius: "4px",
                    backgroundColor: "#FFFFFF14",
                    border: `1px solid ${
                      errors.femaleAge ? "#f44336" : "#7171714D"
                    }`,
                    px: "7px",
                    color: "#000000",
                    fontSize: "16px",
                    height: "44px",
                    "& input::placeholder": {
                      color: "#B3B3B3",
                      opacity: 1,
                    },
                  }}
                />
                {errors.femaleAge && (
                  <FormHelperText
                    sx={{ color: "#f44336", fontSize: "12px", mt: "4px" }}
                  >
                    {errors.femaleAge}
                  </FormHelperText>
                )}
              </Grid>
            </Grid>
            <Button
              type="submit"
              sx={{
                mt: "24px",
                bgcolor: "#FA8E74",
                borderRadius: "10px",
                color: "#FEFEFE",
                py: "7px",
                textTransform: "none",
                fontSize: "20px",
                fontWeight: "700",
                "&:hover": {
                  bgcolor: "#FA8E74",
                },
              }}
              fullWidth
            >
              Talk to our IVF Expert
            </Button>
          </form>
        </Box>
      </Container>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          display: { xs: "none", md: "block" },
        }}
      >
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            height: "314px",
            width: "288px",
          }}
        >
          <Image
            src={"/images/zigzag.png"}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </Box>
      </Box>
    </Box>
  );
};
