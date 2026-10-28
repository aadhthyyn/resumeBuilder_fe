import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import jobJson from "../assets/jobRole.json";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import React, { useEffect, useState } from "react";
import summeryJson from "../assets/summaries.json";
import SkillJson from "../assets/jobSkills.json";
import { toast } from "react-toastify";
import { addResume } from "../services/allAPI";
import { useNavigate } from "react-router-dom";
const Form = ({ setResumeData, resumeData }) => {
  const navigate = useNavigate();
  const steps = [
    "Basic Information",
    "Personal Details",
    "Education Details",
    "Review & Submit",
  ];
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const onFinishButtonClick = async () => {
    try {
      if (
        resumeData.fullName == "" ||
        resumeData.location == "" ||
        resumeData.jobTitle == "" ||
        resumeData.email == "" ||
        resumeData.contactNumber == "" ||
        resumeData.linkedln == "" ||
        resumeData.github == "" ||
        resumeData.degree == "" ||
        resumeData.university == "" ||
        resumeData.yog == "" ||
        resumeData.summary == "" ||
        !resumeData.skills?.length
      ) {
        toast.error("Please fill the form");
      } else {
        let apiResponse = await addResume(resumeData);
        console.log(apiResponse);

        if (apiResponse.status == 201) {
          toast.success("Resume added successfully");
          navigate(`/resume/${apiResponse.data.id}`);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while adding resume");
    }
  };

  const onJobRoleChange = (role) => {
    setResumeData({
      ...resumeData,
      jobTitle: role,
      summary: summeryJson[role],
      skills: SkillJson[role],
    });
  };
  const renderStepper = () => {
    switch (activeStep) {
      case 0:
        return (
          <>
            {" "}
            <Typography variant="h5"> Personal Details </Typography>
            <TextField
              sx={{ width: "100%" }}
              id="fullName"
              label="Full Name"
              variant="standard"
              value={resumeData.fullName}
              onChange={(e) =>
                setResumeData({ ...resumeData, fullName: e.target.value })
              }
            />{" "}
            <TextField
              sx={{ width: "100%" }}
              id="location"
              label="Location"
              variant="standard"
              value={resumeData.location}
              onChange={(e) =>
                setResumeData({ ...resumeData, location: e.target.value })
              }
            />
            <Box sx={{ mt: 3, minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Choose Job Title{" "}
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={""}
                  onChange={(e) => onJobRoleChange(e.target.value)}
                  label="Select Job"
                >
                  {jobJson?.jobRoles?.map((eachJob, index) => (
                    <MenuItem key={index} value={eachJob}>
                      {eachJob}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </>
        );
        break;
      case 1:
        return (
          <>
            {" "}
            <Typography variant="h5"> Contact Details </Typography>
            <TextField
              sx={{ width: "100%" }}
              id="email"
              label="email"
              variant="standard"
              value={resumeData.email}
              onChange={(e) =>
                setResumeData({ ...resumeData, email: e.target.value })
              }
            />
            <TextField
              sx={{ width: "100%" }}
              id="contactNumber"
              label="Contact Number"
              variant="standard"
              value={resumeData.contactNo}
              onChange={(e) =>
                setResumeData({ ...resumeData, contactNo: e.target.value })
              }
            />
            <TextField
              sx={{ width: "100%" }}
              id="LinkedinLink"
              label="Linkedin Link"
              variant="standard"
              value={resumeData.linkedin}
              onChange={(e) =>
                setResumeData({ ...resumeData, linkedin: e.target.value })
              }
            />
            <TextField
              sx={{ width: "100%", mb: 5 }}
              id="GithubLink"
              label="Github Link"
              variant="standard"
              value={resumeData.github}
              onChange={(e) =>
                setResumeData({ ...resumeData, github: e.target.value })
              }
            />
          </>
        );
        break;
      case 2:
        return (
          <>
            {" "}
            <Typography variant="h5"> Educational Details </Typography>
            <TextField
              sx={{ width: "100%" }}
              id="bDegree"
              label="Bachelor's Degree"
              variant="standard"
              value={resumeData.degree}
              onChange={(e) =>
                setResumeData({ ...resumeData, degree: e.target.value })
              }
            />
            <TextField
              sx={{ width: "100%", mt: 2 }}
              id="clgDetails"
              label="Collage/University Name"
              variant="standard"
              value={resumeData.university}
              onChange={(e) =>
                setResumeData({ ...resumeData, university: e.target.value })
              }
            />
            <TextField
              sx={{ width: "100%", mt: 2 }}
              id="yrofgradu"
              label="Year of Graduation"
              variant="standard"
              value={resumeData.yog}
              onChange={(e) =>
                setResumeData({ ...resumeData, yog: e.target.value })
              }
            />
          </>
        );
        break;
      case 3:
        return (
          <>
            {" "}
            <Typography variant="p">
              Our AI will generate Skills & Summary according to your job
              role.Once the form get submitted, user won't get the chance to
              update the resume details. If you want ot proceed please click the
              Generate AI Skill & Summary button to submit.{" "}
            </Typography>
          </>
        );
        break;

      default:
        break;
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          {renderStepper()}
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            {activeStep === steps.length - 1 ? (
              <Button onClick={onFinishButtonClick}>Finish</Button>
            ) : (
              <Button onClick={handleNext}> Next</Button>
            )}
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
};
export default Form;
