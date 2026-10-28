import React from "react";
import { Typography, Box, Button, Stack } from "@mui/material";

import { FcDocument } from "react-icons/fc";
import { FaFilePdf } from "react-icons/fa";
import { Link } from "react-router-dom";

const ResumeGenarate = () => {
  return (
    <Box>
      <Box
        sx={{
          textAlign: "center",
          padding: 5,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Georgia",
            fontWeight: "bold",
            marginBottom: 5,
          }}
        >
          Create an ATS Friendly Resume in Minutes with AI
        </Typography>

        <Stack direction="row" spacing={15} sx={{ justifyContent: "center" }}>
          <Box
            sx={{
              width: 380,
              height: 225,
              boxShadow: 5,
              padding: 3,
              boxSizing: "border-box",
              textAlign: "center",
              backgroundColor: "white",
            }}
          >
            <FcDocument size={40} />

            <Typography
              variant="h6"
              sx={{
                fontFamily: "Georgia",
                fontWeight: "bold",
                marginTop: 2,
              }}
            >
              Add Your Details
            </Typography>

            <Typography sx={{ marginTop: 1 }}>
              Our AI will generate Skills & Summary
            </Typography>

            <Typography
              sx={{
                fontWeight: "bold",
                marginTop: 2,
              }}
            >
              Step 1
            </Typography>
          </Box>

          <Box
            sx={{
              width: 380,
              height: 225,
              boxShadow: 5,
              padding: 3,
              boxSizing: "border-box",
              textAlign: "center",
              backgroundColor: "white",
            }}
          >
            <FaFilePdf size={40} color="red" />

            <Typography
              variant="h6"
              sx={{
                fontFamily: "Georgia",
                fontWeight: "bold",
                marginTop: 2,
              }}
            >
              Download your Resume
            </Typography>

            <Typography sx={{ marginTop: 1 }}>
              Download CV as PDF and start applying
            </Typography>

            <Typography
              sx={{
                fontWeight: "bold",
                marginTop: 2,
              }}
            >
              Step 2
            </Typography>
          </Box>
        </Stack>

        <Button component={Link} to={"/resume-details"}
          variant="contained"
          sx={{

            marginTop: 5,
            backgroundColor: "#805333",
            color:"white"
            
          }}
        >
          LET'S START
        </Button>
      </Box>
    </Box>
  );
};

export default ResumeGenarate;
