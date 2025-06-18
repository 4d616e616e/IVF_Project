import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  Tooltip,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export const HealthcareStats = () => {
  const stats = [
    {
      number: "20,000+",
      label: "Healthy Babies",
      color: "#65C3CB",
    },
    {
      number: "78%",
      label: "Success Rate*",
      color: "#AB7FB0",
    },
    {
      number: "30+",
      label: "Certified trained clinicians",
      color: "#FA8E74",
    },
  ];

  return (
    <Box sx={{ bgcolor: "#F8F6EF" }}>
      <Container maxWidth="xl">
        <Box sx={{ borderRadius: "24px", py: 4 }}>
          <Grid container alignItems="center">
            {stats.map((stat, index) => (
              <React.Fragment key={index}>
                <Grid
                  item
                  size={4}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    borderRight: index !== 2 && "1px solid #333333",
                  }}
                >
                  {stat.label === "Success Rate*" ? (
                    <Tooltip
                      title="with Genetic Testing"
                      arrow
                      componentsProps={{
                        tooltip: {
                          sx: {
                            bgcolor: "#AB7FB0",
                            color: "#F5EFF7",
                            fontSize: "14px",
                          },
                        },
                        arrow: {
                          sx: {
                            color: "#AB7FB0",
                          },
                        },
                      }}
                    >
                      <Typography
                        color={stat.color}
                        fontSize={{ xs: "24px", md: "68px" }}
                        className="font-700"
                      >
                        {stat.number}
                      </Typography>
                      <Typography
                        color={stat.color}
                        fontSize={{ xs: "12px", md: "24px" }}
                        className="font-500"
                        textAlign={"center"}
                      >
                        {stat.label}
                      </Typography>
                    </Tooltip>
                  ) : (
                    <>
                      <Typography
                        color={stat.color}
                        fontSize={{ xs: "24px", md: "68px" }}
                        className="font-700"
                      >
                        {stat.number}
                      </Typography>
                      <Typography
                        color={stat.color}
                        fontSize={{ xs: "12px", md: "24px" }}
                        className="font-500"
                        textAlign={"center"}
                      >
                        {stat.label}
                      </Typography>
                    </>
                  )}
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};
