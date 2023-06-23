import React from "react";
import { Stack, Typography } from "@mui/material";
import { Logo } from "./icons";
function AuthLogoAndText() {
  return (
    <Stack
      direction="column"
      spacing={4}
      sx={{ alignItems: "center", width: "100%" }}
    >
      <img src={Logo} alt="Mentor Management System" />
      <Typography
        variant="h3"
        sx={{
          flexGrow: 1,
          fontSize: "32px",
          fontWeight: 700,
          lineHeight: "53px",
          fontFamily: "Mukta",
          color: "#FFFFFF",
        }}
      >
        Mentor’s Managers System
      </Typography>
    </Stack>
  );
}

export default AuthLogoAndText;
