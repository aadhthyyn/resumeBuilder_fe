import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

const PNF = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#f8fafc",
        textAlign: "center",
        p: 3,
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: 100, sm: 160 },
          fontWeight: 800,
          color: "#6366f1",
          animation: "float 2s ease-in-out infinite",
          "@keyframes float": {
            "0%, 100%": { transform: "translateY(0)" },
            "50%": { transform: "translateY(-15px)" },
          },
        }}
      >
        404
      </Typography>

      <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>
        Page Not Found
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 4 }}>
        Sorry, the page you are looking for doesn't exist.
      </Typography>

      <Button
        variant="contained"
        onClick={() => navigate("/")}
        sx={{
          px: 4,
          py: 1.2,
          borderRadius: 2,
          textTransform: "none",
          bgcolor: "#6366f1",
          "&:hover": {
            bgcolor: "#4f46e5",
          },
        }}
      >
        Back to Home
      </Button>
    </Box>
  );
};

export default PNF;
