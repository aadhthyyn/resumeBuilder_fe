import { Box, Grid } from "@mui/material";
import Form from "../components/Form";
import Preview from "../components/Preview";
import React, { useState } from "react";

const ResumeDetails = () => {
  const [resumeData, setResumeData] = useState({
    fullName: "",
    location: "",
    jobTitle: "",
    email: "",
    contactNo: 0,
    linkedin: "",
    github: "",
    degree: "",
    university: "",
    yog: 0,
    summary: "",
    skills: [],
  });
  return (
    <Box sx={{ mt: "50px", marginLeft: "50px", marginBottom: "40px" }}>
      <Grid container>
        <Grid size={{ md: 6 }}>
          <Form setResumeData={setResumeData} resumeData={resumeData} />
        </Grid>
        <Grid size={{ md: 6 }}>
          <Preview resumeData={resumeData} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ResumeDetails;
