import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Select,
  MenuItem,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  IconButton,
  LinearProgress,
  TextField,
  styled,
  Alert,
  Snackbar,
  Collapse,
} from "@mui/material";
import { ChevronLeft, ChevronRight, Close } from "@mui/icons-material";
import { getCookie } from "cookies-next";
import { FormCompletionScreen } from "./FormCompletionScreen";

const steps = [
  "Welcome",
  "Trying Duration",
  "Working Status",
  "Medical History",
  "Health Issues",
  "Sperm Test",
  "Family History",
];

// Styled component for the radio option container
const StyledBoxOne = styled(Box)(({ theme, selected }) => ({
  display: "flex",
  alignItems: "center",
  gap: 16,
  paddingTop: "9.5px",
  paddingBottom: "9.5px",
  paddingLeft: 8,
  paddingRight: 8,
  borderRadius: 12,
  border: "2px solid #7DD3DA",
  backgroundColor: selected ? "#7DD3DA" : "#E6F7F8",
  minWidth: 200,
  cursor: "pointer",
  transition: "all 0.2s ease",
  "&:hover": {
    backgroundColor: selected ? "#5BC5CD" : "#D1F2F4",
    borderColor: "#5BC5CD",
  },
}));

// Styled component for the letter icon box
const StyledBoxTwo = styled(Box)({
  width: 40,
  height: 40,
  borderRadius: 8,
  border: "2px solid #7DD3DA",
  backgroundColor: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "18px",
  fontWeight: "bold",
  color: "#7DD3DA",
});

// Styled component for the conditional text field
const StyledTextBox = styled(TextField)({
  marginTop: 16,
  "& .MuiOutlinedInput-root": {
    borderRadius: 8,
    fontSize: "16px",
    color: "#999",
    "& fieldset": {
      borderColor: "#ddd",
    },
    "&:hover fieldset": {
      borderColor: "#7DD3DA",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#7DD3DA",
    },
  },
  "& .MuiInputBase-input::placeholder": {
    color: "#999",
    opacity: 1,
  },
});

export const UserForm = ({ handleModalClose }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [isFormCompleted, setIsFormCompleted] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: "success", // 'success', 'error', 'warning', 'info'
  });
  const [formData, setFormData] = useState({
    tryingDuration: 0,
    workingCouple: "",
    workingCoupleDescription: "",
    medicalHistory: "",
    medicalHistoryDescription: "",
    healthIssues: "",
    healthIssuesDescription: "",
    spermTest: "",
    spermTestDescription: "",
    familyHistory: "",
    familyHistoryDescription: "",
  });

  // Function to get the API payload for each step
  const getStepPayload = (step) => {
    switch (step) {
      case 1: // Trying Duration
        return {
          t_baby_years: formData.tryingDuration,
        };
      case 2: // Working Status
        return {
          is_working_couple: formData.workingCouple === "yes" ? true : false,
          work_details: formData.workingCoupleDescription || "",
        };
      case 3: // Medical History
        return {
          any_past_treatment: formData.medicalHistory === "yes" ? true : false,
          past_treatment_details: formData.medicalHistoryDescription || "",
        };
      case 4: // Health Issues
        return {
          is_female_heath_issues:
            formData.healthIssues === "yes" ? true : false,
          female_heath_issues_details: formData.healthIssuesDescription || "",
        };
      case 5: // Sperm Test
        return {
          has_male_sperm_test: formData.spermTest === "yes" ? true : false,
          male_test_details: formData.spermTestDescription || "",
        };
      case 6: // Family History
        return {
          has_genetic_condition:
            formData.familyHistory === "yes" ? true : false,
          genetic_condition_details: formData.familyHistoryDescription || "",
          last: true, // Set last to true only on the final step
        };
      default:
        return {};
    }
  };

  // Updated validateStep function
  const validateStep = (step) => {
    const newErrors = {};

    switch (step) {
      case 1: // Trying Duration - No longer required
        // Removed validation for tryingDuration
        break;
      case 2: // Working Status - No longer required
        // Removed validation for workingCouple
        if (
          formData.workingCoupleDescription &&
          formData.workingCoupleDescription.length > 500
        ) {
          newErrors.workingCoupleDescription =
            "Description must be 500 characters or less";
        }
        break;
      case 3: // Medical History - No longer required
        // Removed validation for medicalHistory
        if (
          formData.medicalHistoryDescription &&
          formData.medicalHistoryDescription.length > 500
        ) {
          newErrors.medicalHistoryDescription =
            "Description must be 500 characters or less";
        }
        break;
      case 4: // Health Issues - No longer required
        // Removed validation for healthIssues
        if (
          formData.healthIssuesDescription &&
          formData.healthIssuesDescription.length > 500
        ) {
          newErrors.healthIssuesDescription =
            "Description must be 500 characters or less";
        }
        break;
      case 5: // Sperm Test - No longer required
        // Removed validation for spermTest
        if (
          formData.spermTestDescription &&
          formData.spermTestDescription.length > 500
        ) {
          newErrors.spermTestDescription =
            "Description must be 500 characters or less";
        }
        break;
      case 6: // Family History - No longer required
        // Removed validation for familyHistory
        if (
          formData.familyHistoryDescription &&
          formData.familyHistoryDescription.length > 500
        ) {
          newErrors.familyHistoryDescription =
            "Description must be 500 characters or less";
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Function to call API for each step
  const callStepAPI = async (step) => {
    const form_id = getCookie("form_id");

    if (!form_id) {
      setAlert({
        open: true,
        message: "Form ID not found. Please try refreshing the page.",
        severity: "error",
      });
      return false;
    }

    setIsLoading(true);

    try {
      const payload = getStepPayload(step);

      const response = await fetch(
        `https://devapi.homeivf.com/api/form/${form_id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();

      if (response.ok && result.status) {
        // Show success screen for the final step
        if (step === steps.length - 1) {
          setIsFormCompleted(true);
        }
        return true;
      } else {
        setAlert({
          open: true,
          message: "Failed to save step data. Please try again.",
          severity: "error",
        });
        return false;
      }
    } catch (err) {
      setAlert({
        open: true,
        message:
          "An unexpected error occurred. Please check your connection and try again.",
        severity: "error",
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const handleNext = async () => {
    // Validate current step if not the welcome step
    if (activeStep > 0 && !validateStep(activeStep)) {
      return;
    }

    // If we're past the welcome step, call the API
    if (activeStep > 0) {
      const success = await callStepAPI(activeStep);
      if (!success) {
        return; // Don't proceed if API call failed
      }
    }

    // Move to next step or handle completion
    if (activeStep < steps.length - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
      // Clear errors when going back
      setErrors({});
    }
  };

  const handleClose = () => {
    setActiveStep(0);
    setIsFormCompleted(false); // Add this line
    setFormData({
      tryingDuration: 0,
      workingCouple: "",
      workingCoupleDescription: "",
      medicalHistory: "",
      medicalHistoryDescription: "",
      healthIssues: "",
      healthIssuesDescription: "",
      spermTest: "",
      spermTestDescription: "",
      familyHistory: "",
      familyHistoryDescription: "",
    });
    setErrors({});
    setAlert({ open: false, message: "", severity: "success" });
    handleModalClose();
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error when user starts typing/selecting
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: undefined,
      }));
    }
  };

  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlert({ ...alert, open: false });
  };

  const getProgressValue = () => {
    return ((activeStep + 1) / steps.length) * 100;
  };

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <Box sx={{ py: 8 }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{ mb: 3, fontWeight: 400 }}
            >
              Let's personalize things for you.
            </Typography>
            <Typography sx={{ color: "#717171", fontSize: "20px", mb: "32px" }}>
              Takes less than a minute. Let's make this experience all about you
            </Typography>
            <Button
              variant="outlined"
              fullWidth
              onClick={handleNext}
              sx={{
                backgroundColor: "#F0814C",
                color: "white",
                textTransform: "none",
                border: "none",
                fontSize: "20px",
                py: "12px",
                borderRadius: "12px",
                "&:hover": {
                  backgroundColor: "#F0814C",
                },
              }}
            >
              Get Started
            </Button>
          </Box>
        );

      case 1:
        return (
          <Box sx={{ py: 4 }}>
            <Typography
              variant="h5"
              component="h2"
              sx={{ mb: 4, fontWeight: 400 }}
            >
              How long have you been trying to have a baby?
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
              <FormControl sx={{ minWidth: 200 }}>
                <Select
                  value={formData.tryingDuration}
                  onChange={(e) =>
                    handleChange("tryingDuration", e.target.value)
                  }
                  size="small"
                  displayEmpty
                  sx={{
                    backgroundColor: "#65C3CB33",
                    color: "#65C3CB",
                    border: "1.5px solid #65C3CB",
                    borderRadius: "8px",
                    "& svg": {
                      color: "#65C3CB",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                    "& fieldset": {
                      border: "none",
                    },
                    "&.Mui-focused": {
                      outline: "none",
                      boxShadow: "none",
                    },
                  }}
                >
                  <MenuItem value={0} disabled>
                    Select
                  </MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4+</MenuItem>
                </Select>
              </FormControl>
              <Typography variant="body1" className="font-500">
                years
              </Typography>
            </Box>
          </Box>
        );

      case 2:
        return (
          <Box sx={{ py: 4 }}>
            <Typography
              variant="h5"
              component="h2"
              sx={{ mb: 4, fontWeight: 500 }}
            >
              Are you a working couple?
            </Typography>
            <RadioGroup
              value={formData.workingCouple}
              onChange={(e) => handleChange("workingCouple", e.target.value)}
              sx={{ mb: 2 }}
            >
              <FormControlLabel
                value="yes"
                control={<Radio sx={{ display: "none" }} />}
                label={
                  <StyledBoxOne selected={formData.workingCouple === "yes"}>
                    <StyledBoxTwo>A</StyledBoxTwo>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: 500,
                        color:
                          formData.workingCouple === "yes"
                            ? "white"
                            : "#7DD3DA",
                      }}
                    >
                      Yes
                    </Typography>
                  </StyledBoxOne>
                }
                sx={{
                  margin: 0,
                  marginBottom: 2,
                  "& .MuiFormControlLabel-label": {
                    width: "fit-content",
                  },
                }}
              />

              <FormControlLabel
                value="no"
                control={<Radio sx={{ display: "none" }} />}
                label={
                  <StyledBoxOne selected={formData.workingCouple === "no"}>
                    <StyledBoxTwo>B</StyledBoxTwo>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: 500,
                        color:
                          formData.workingCouple === "no" ? "white" : "#7DD3DA",
                      }}
                    >
                      No
                    </Typography>
                  </StyledBoxOne>
                }
                sx={{
                  margin: 0,
                  "& .MuiFormControlLabel-label": {
                    width: "fit-content",
                  },
                }}
              />
            </RadioGroup>
            {formData.workingCouple === "yes" && (
              <Box>
                <StyledTextBox
                  fullWidth
                  placeholder="Describe your situation (Optional)"
                  value={formData.workingCoupleDescription || ""}
                  onChange={(e) =>
                    handleChange("workingCoupleDescription", e.target.value)
                  }
                  inputProps={{
                    maxLength: 500,
                  }}
                  error={!!errors.workingCoupleDescription}
                  helperText={
                    errors.workingCoupleDescription ||
                    `${
                      formData.workingCoupleDescription?.length || 0
                    }/500 characters`
                  }
                />
              </Box>
            )}
          </Box>
        );

      case 3:
        return (
          <Box sx={{ py: 4 }}>
            <Typography
              variant="h5"
              component="h2"
              sx={{ mb: 4, fontWeight: 500 }}
            >
              Have you had any past pregnancies, miscarriages, or any fertility
              treatments?
            </Typography>
            <RadioGroup
              value={formData.medicalHistory}
              onChange={(e) => handleChange("medicalHistory", e.target.value)}
              sx={{ mb: 2 }}
            >
              <FormControlLabel
                value="yes"
                control={<Radio sx={{ display: "none" }} />}
                label={
                  <StyledBoxOne selected={formData.medicalHistory === "yes"}>
                    <StyledBoxTwo>A</StyledBoxTwo>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: 500,
                        color:
                          formData.medicalHistory === "yes"
                            ? "white"
                            : "#7DD3DA",
                      }}
                    >
                      Yes
                    </Typography>
                  </StyledBoxOne>
                }
                sx={{
                  margin: 0,
                  marginBottom: 2,
                  "& .MuiFormControlLabel-label": {
                    width: "fit-content",
                  },
                }}
              />
              <FormControlLabel
                value="no"
                control={<Radio sx={{ display: "none" }} />}
                label={
                  <StyledBoxOne selected={formData.medicalHistory === "no"}>
                    <StyledBoxTwo>B</StyledBoxTwo>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: 500,
                        color:
                          formData.medicalHistory === "no"
                            ? "white"
                            : "#7DD3DA",
                      }}
                    >
                      No
                    </Typography>
                  </StyledBoxOne>
                }
                sx={{
                  margin: 0,
                  "& .MuiFormControlLabel-label": {
                    width: "fit-content",
                  },
                }}
              />
            </RadioGroup>
            {formData.medicalHistory === "yes" && (
              <StyledTextBox
                fullWidth
                placeholder="Describe your situation (Optional)"
                value={formData.medicalHistoryDescription || ""}
                onChange={(e) =>
                  handleChange("medicalHistoryDescription", e.target.value)
                }
                inputProps={{
                  maxLength: 500,
                }}
                error={!!errors.medicalHistoryDescription}
                helperText={
                  errors.medicalHistoryDescription ||
                  `${
                    formData.medicalHistoryDescription?.length || 0
                  }/500 characters`
                }
              />
            )}
          </Box>
        );

      case 4:
        return (
          <Box sx={{ py: 4 }}>
            <Typography
              variant="h5"
              component="h2"
              sx={{ mb: 4, fontWeight: 500 }}
            >
              Does the female partner have any health issues like PCOS,
              endometriosis, or thyroid?
            </Typography>
            <RadioGroup
              value={formData.healthIssues}
              onChange={(e) => handleChange("healthIssues", e.target.value)}
              sx={{ mb: 2 }}
            >
              <FormControlLabel
                value="yes"
                control={<Radio sx={{ display: "none" }} />}
                label={
                  <StyledBoxOne selected={formData.healthIssues === "yes"}>
                    <StyledBoxTwo>A</StyledBoxTwo>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: 500,
                        color:
                          formData.healthIssues === "yes" ? "white" : "#7DD3DA",
                      }}
                    >
                      Yes
                    </Typography>
                  </StyledBoxOne>
                }
                sx={{
                  margin: 0,
                  marginBottom: 2,
                  "& .MuiFormControlLabel-label": {
                    width: "fit-content",
                  },
                }}
              />
              <FormControlLabel
                value="no"
                control={<Radio sx={{ display: "none" }} />}
                label={
                  <StyledBoxOne selected={formData.healthIssues === "no"}>
                    <StyledBoxTwo>B</StyledBoxTwo>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: 500,
                        color:
                          formData.healthIssues === "no" ? "white" : "#7DD3DA",
                      }}
                    >
                      No
                    </Typography>
                  </StyledBoxOne>
                }
                sx={{
                  margin: 0,
                  "& .MuiFormControlLabel-label": {
                    width: "fit-content",
                  },
                }}
              />
            </RadioGroup>
            {formData.healthIssues === "yes" && (
              <StyledTextBox
                fullWidth
                placeholder="Describe your situation (Optional)"
                value={formData.healthIssuesDescription || ""}
                onChange={(e) =>
                  handleChange("healthIssuesDescription", e.target.value)
                }
                inputProps={{
                  maxLength: 500,
                }}
                error={!!errors.healthIssuesDescription}
                helperText={
                  errors.healthIssuesDescription ||
                  `${
                    formData.healthIssuesDescription?.length || 0
                  }/500 characters`
                }
              />
            )}
          </Box>
        );

      case 5:
        return (
          <Box sx={{ py: 4 }}>
            <Typography
              variant="h5"
              component="h2"
              sx={{ mb: 4, fontWeight: 500 }}
            >
              Has the male partner ever done a sperm test before?
            </Typography>
            <RadioGroup
              value={formData.spermTest}
              onChange={(e) => handleChange("spermTest", e.target.value)}
              sx={{ mb: 2 }}
            >
              <FormControlLabel
                value="yes"
                control={<Radio sx={{ display: "none" }} />}
                label={
                  <StyledBoxOne selected={formData.spermTest === "yes"}>
                    <StyledBoxTwo>A</StyledBoxTwo>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: 500,
                        color:
                          formData.spermTest === "yes" ? "white" : "#7DD3DA",
                      }}
                    >
                      Yes
                    </Typography>
                  </StyledBoxOne>
                }
                sx={{
                  margin: 0,
                  marginBottom: 2,
                  "& .MuiFormControlLabel-label": {
                    width: "fit-content",
                  },
                }}
              />
              <FormControlLabel
                value="no"
                control={<Radio sx={{ display: "none" }} />}
                label={
                  <StyledBoxOne selected={formData.spermTest === "no"}>
                    <StyledBoxTwo>B</StyledBoxTwo>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: 500,
                        color:
                          formData.spermTest === "no" ? "white" : "#7DD3DA",
                      }}
                    >
                      No
                    </Typography>
                  </StyledBoxOne>
                }
                sx={{
                  margin: 0,
                  "& .MuiFormControlLabel-label": {
                    width: "fit-content",
                  },
                }}
              />
            </RadioGroup>
            {formData.spermTest === "yes" && (
              <TextField
                fullWidth
                placeholder="Describe your situation (Optional)"
                value={formData.spermTestDescription || ""}
                onChange={(e) =>
                  handleChange("spermTestDescription", e.target.value)
                }
                inputProps={{
                  maxLength: 500,
                }}
                error={!!errors.spermTestDescription}
                helperText={
                  errors.spermTestDescription ||
                  `${formData.spermTestDescription?.length || 0}/500 characters`
                }
                sx={{
                  mt: 2,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                    fontSize: "16px",
                    color: "#999",
                    "& fieldset": {
                      borderColor: "#ddd",
                    },
                    "&:hover fieldset": {
                      borderColor: "#7DD3DA",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#7DD3DA",
                    },
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "#999",
                    opacity: 1,
                  },
                }}
              />
            )}
          </Box>
        );

      case 6:
        return (
          <Box sx={{ py: 4 }}>
            <Typography
              variant="h5"
              component="h2"
              sx={{ mb: 4, fontWeight: 500 }}
            >
              Does anyone in your family have a genetic condition or long-term
              illness?
            </Typography>
            <RadioGroup
              value={formData.familyHistory}
              onChange={(e) => handleChange("familyHistory", e.target.value)}
              sx={{ mb: 2 }}
            >
              <FormControlLabel
                value="yes"
                control={<Radio sx={{ display: "none" }} />}
                label={
                  <StyledBoxOne selected={formData.familyHistory === "yes"}>
                    <StyledBoxTwo>A</StyledBoxTwo>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: 500,
                        color:
                          formData.familyHistory === "yes"
                            ? "white"
                            : "#7DD3DA",
                      }}
                    >
                      Yes
                    </Typography>
                  </StyledBoxOne>
                }
                sx={{
                  margin: 0,
                  marginBottom: 2,
                  "& .MuiFormControlLabel-label": {
                    width: "fit-content",
                  },
                }}
              />
              <FormControlLabel
                value="no"
                control={<Radio sx={{ display: "none" }} />}
                label={
                  <StyledBoxOne selected={formData.familyHistory === "no"}>
                    <StyledBoxTwo>B</StyledBoxTwo>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: 500,
                        color:
                          formData.familyHistory === "no" ? "white" : "#7DD3DA",
                      }}
                    >
                      No
                    </Typography>
                  </StyledBoxOne>
                }
                sx={{
                  margin: 0,
                  "& .MuiFormControlLabel-label": {
                    width: "fit-content",
                  },
                }}
              />
            </RadioGroup>

            {formData.familyHistory === "yes" && (
              <StyledTextBox
                fullWidth
                placeholder="Describe your situation (Optional)"
                value={formData.familyHistoryDescription || ""}
                onChange={(e) =>
                  handleChange("familyHistoryDescription", e.target.value)
                }
                inputProps={{
                  maxLength: 500,
                }}
                error={!!errors.familyHistoryDescription}
                helperText={
                  errors.familyHistoryDescription ||
                  `${
                    formData.familyHistoryDescription?.length || 0
                  }/500 characters`
                }
              />
            )}
          </Box>
        );

      default:
        return null;
    }
  };

  const renderButtons = () => {
    if (activeStep === 0) {
      return null; // Get Started button is in the content
    }

    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 4,
          gap: 2,
        }}
      >
        <Button
          variant="outlined"
          onClick={handleBack}
          fullWidth
          startIcon={<ChevronLeft />}
          disabled={isLoading}
          sx={{
            border: "2px solid #65C3CB",
            color: "#65C3CB",
            borderRadius: "10px",
            textTransform: "none",
            fontSize: "20px",
            "&:hover": {
              backgroundColor: "#65C3CB10",
            },
            "&:disabled": {
              opacity: 0.5,
            },
          }}
        >
          Previous
        </Button>
        <Button
          variant="outlined"
          onClick={handleNext}
          endIcon={<ChevronRight />}
          fullWidth
          disabled={isLoading}
          sx={{
            backgroundColor: "#65C3CB",
            border: "none",
            textTransform: "none",
            borderRadius: "10px",
            fontSize: "20px",
            color: "#FFFFFF",
            "&:hover": {
              backgroundColor: "#65C3CB",
              color: "#FFFFFF",
            },
            "&:disabled": {
              backgroundColor: "#65C3CB",
              opacity: 0.7,
            },
          }}
        >
          {isLoading
            ? "Saving..."
            : activeStep === steps.length - 1
            ? "Complete"
            : "Next"}
        </Button>
      </Box>
    );
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 3,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 400 }}>
          Lets Get Started!
        </Typography>
        <IconButton onClick={handleClose} sx={{ color: "text.secondary" }}>
          <Close />
        </IconButton>
      </Box>

      {/* Alert */}
      <Collapse in={alert.open}>
        <Box
          sx={{
            position: "fixed",
            top: 80,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 9999,
            width: "90%",
            maxWidth: 600,
          }}
        >
          <Alert
            severity={alert.severity}
            onClose={handleAlertClose}
            sx={{
              mb: 2,
              boxShadow: 3,
            }}
          >
            {alert.message}
          </Alert>
        </Box>
      </Collapse>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: 10,
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            width: "100%",
            maxWidth: 800,
            maxHeight: "90%",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* Show success screen when form is completed */}
          {isFormCompleted ? (
            <FormCompletionScreen handleClose={handleClose} />
          ) : (
            <>
              {/* Progress Bar */}
              {activeStep > 0 && (
                <Box sx={{ px: 3, pt: 2 }}>
                  <LinearProgress
                    variant="determinate"
                    value={getProgressValue()}
                    sx={{
                      height: 8,
                      borderRadius: 4,
                      backgroundColor: "#FFF2CC",
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: "#FFC001",
                        borderRadius: 4,
                      },
                    }}
                  />
                </Box>
              )}

              {/* Content */}
              <Box sx={{ p: 3, minHeight: 300 }}>
                {renderStepContent()}
                {renderButtons()}
              </Box>
            </>
          )}
        </Box>
      </Box>

      {/* Snackbar for additional alerts if needed */}
      <Snackbar
        open={alert.open}
        autoHideDuration={6000}
        onClose={handleAlertClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        sx={{ display: "none" }}
      />
    </Box>
  );
};
