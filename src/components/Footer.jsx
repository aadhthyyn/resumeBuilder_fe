import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import { IoIosMail, IoIosCall } from "react-icons/io";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";


const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#020202", padding: "40px" }}>
      <Stack
        direction="row"
        sx={{
          color: "white",
          gap: 100,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ maxWidth: "650px" }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
            Resume Builder
          </Typography>

          <Typography variant="p" sx={{ lineHeight: 1.6 }}>
            An AI Resume Builder suggests job-specific keywords, professional
            summaries, and skill recommendations to make the resume more
            effective and ATS (Applicant Tracking System) friendly. The main
            goal of the AI Powered Resume Builder is to simplify the resume
            creation process and help job seekers build professional,
            well-structured resumes in a few minutes.
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", marginBottom: "15px" }}
          >
            Contact Us
          </Typography>

          <Typography sx={{ marginBottom: "10px" }}>
            <IoIosMail /> abc@gmail.com
          </Typography>

          <Typography sx={{ marginBottom: "20px" }}>
            <IoIosCall /> +91 99999 99999
          </Typography>

          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", marginBottom: "15px" }}
          >
            Connect With Us
          </Typography>

          <Stack direction="row" spacing={2}>
            <GrInstagram size={22} />
            <FaFacebookSquare size={22} />
            <IoLogoWhatsapp size={22} />
          </Stack>
        </Box>
      </Stack>

      <Box sx={{ textAlign: "center", marginTop: "40px" }}>
        <Typography
          sx={{ fontWeight: "bold", color: "white", fontSize: "15px" }}
        >
          Designed & built with ❤️ using React
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
