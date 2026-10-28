import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getSingleResume, updateResume } from "../services/allAPI";
import { Box, Button, Grid, MenuItem, TextField } from "@mui/material";
import { FaFileDownload } from "react-icons/fa";
import { MdEditDocument } from "react-icons/md";
import Preview from "../components/Preview";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import jobJson from "../assets/jobRole.json";
import summeryJson from "../assets/summaries.json";
import SkillJson from "../assets/jobSkills.json";

const Singleresume = () => {
  const [newSkill, setNewSkill] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [SingleResume, setSingleResume] = useState({
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
    id: 0,
  });

  const { id } = useParams();

  useEffect(() => {
    getData();
  }, []);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const getData = async () => {
    try {
      let apiResponse = await getSingleResume(id);

      if (apiResponse.status == 200) {
        setSingleResume(apiResponse.data);
      } else {
        toast.error("failed to get data");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to get data");
    }
  };

  const inputStyle = {
    width: "100%",
    border: "none",
    outline: "none",
    padding: "6px 0",
    fontSize: "16px",
    background: "transparent",
  };

  const skillStyle = {
    backgroundColor: "#b49b9c",
    color: "white",
    padding: "12px 8px",
    borderRadius: "4px",
    boxShadow: 1,
    fontSize: "14px",
    textAlign: "center",
  };
  const onJobRoleChange = (role) => {
    setSingleResume({
      ...SingleResume,
      jobTitle: role,
      summary: summeryJson[role],
      skills: SkillJson[role],
    });
  };

  const addNewSkill = () => {
    setSingleResume({
      ...SingleResume,
      skills: [...SingleResume.skills, newSkill],
    });
  };

  const onUpdateClick = async () => {
    try {
      let apiResponse = await updateResume(id, SingleResume);
      if (apiResponse.status == 200) {
        toast.success("update successfully");
        handleClose();
      } else {
        toast.error("update failed");
      }
    } catch (error) {
      console.log(error);
      toast.error("update failed");
    }
  };

  return (
    <Box>
      <Box
        sx={{
          color: "brown",
          display: "flex",
          justifyContent: "center",
          gap: 2,
          mt: 3,
        }}
      >
        <Button onClick={handleOpen} variant="contained">
          <MdEditDocument style={{ marginRight: "8px" }} />
          Edit CV
        </Button>

        <Button variant="outlined" href="/">
          Home
        </Button>
      </Box>

      <Box>
        <Preview resumeData={SingleResume} />
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            ...style,
            width: { xs: "92%", sm: 680 },
            maxWidth: "95vw",
            maxHeight: "90vh",
            overflowY: "auto",
            bgcolor: "white",
            p: { xs: 2, sm: 4 },
            boxSizing: "border-box",
          }}
        >
          <Typography
            id="modal-modal-title"
            sx={{
              bgcolor: "#604c4e",
              color: "white",
              p: 2,
              fontSize: "22px",
              mb: 2,
            }}
          >
            Edit Resume Details
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
            Personal Details
          </Typography>

          <Box sx={{ mb: 2 }}>
            <Typography sx={{ fontSize: 14, color: "#666" }}>
              FullName
            </Typography>
            <Box sx={{ borderBottom: "1px solid #aaa", py: 0.5, mb: 1.5 }}>
              <input
                onChange={(e) =>
                  setSingleResume({ ...SingleResume, fullName: e.target.value })
                }
                value={SingleResume?.fullName}
                placeholder="Enter Full Name"
                style={inputStyle}
              />
            </Box>

            <Typography sx={{ fontSize: 14, color: "#666" }}>
              Location
            </Typography>
            <Box sx={{ borderBottom: "1px solid #aaa", py: 0.5, mb: 1.5 }}>
              <input
                onChange={(e) =>
                  setSingleResume({ ...SingleResume, location: e.target.value })
                }
                value={SingleResume?.location}
                placeholder="Enter Location"
                style={inputStyle}
              />
            </Box>

            <Typography sx={{ fontSize: 14, color: "#666" }}>
              Choose Job Title
            </Typography>
            <Box sx={{ borderBottom: "1px solid #aaa", py: 0.5 }}>
              <TextField
                select
                label="Choose Job Title"
                onChange={(e) => onJobRoleChange(e.target.value)}
                value={SingleResume?.jobTitle}
                variant="standard"
                fullWidth
              >
                {jobJson?.jobRoles?.map((eachJob, index) => (
                  <MenuItem key={index} value={eachJob}>
                    {eachJob}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          </Box>

          <Typography variant="h5" sx={{ fontWeight: "bold", mt: 3, mb: 2 }}>
            Contact Details
          </Typography>

          <Box>
            <Typography sx={{ fontSize: 14, color: "#666" }}>Email</Typography>
            <Box sx={{ borderBottom: "1px solid #aaa", mb: 1.5 }}>
              <input
                onChange={(e) =>
                  setSingleResume({ ...SingleResume, email: e.target.value })
                }
                value={SingleResume?.email}
                placeholder="Enter Email"
                style={inputStyle}
              />
            </Box>

            <Typography sx={{ fontSize: 14, color: "#666" }}>
              Contact Number
            </Typography>
            <Box sx={{ borderBottom: "1px solid #aaa", mb: 1.5 }}>
              <input
                onChange={(e) =>
                  setSingleResume({
                    ...SingleResume,
                    contactNo: e.target.value,
                  })
                }
                value={SingleResume?.contactNo}
                placeholder="Enter Contact Number"
                style={inputStyle}
              />
            </Box>

            <Typography sx={{ fontSize: 14, color: "#666" }}>
              Linkedin Link
            </Typography>
            <Box sx={{ borderBottom: "1px solid #aaa", mb: 1.5 }}>
              <input
                onChange={(e) =>
                  setSingleResume({ ...SingleResume, linkedin: e.target.value })
                }
                value={SingleResume?.linkedin}
                placeholder="Enter LinkedIn Link"
                style={inputStyle}
              />
            </Box>

            <Typography sx={{ fontSize: 14, color: "#666" }}>
              Github Link
            </Typography>
            <Box sx={{ borderBottom: "1px solid #aaa", mb: 1.5 }}>
              <input
                onChange={(e) =>
                  setSingleResume({ ...SingleResume, github: e.target.value })
                }
                value={SingleResume?.github}
                placeholder="Enter Github Link"
                style={inputStyle}
              />
            </Box>
          </Box>

          <Typography variant="h5" sx={{ fontWeight: "bold", mt: 3, mb: 2 }}>
            Educational Details
          </Typography>

          <Box>
            <Typography sx={{ fontSize: 14, color: "#666" }}>
              Bachelor's Degree
            </Typography>
            <Box sx={{ borderBottom: "1px solid #aaa", mb: 1.5 }}>
              <input
                onChange={(e) =>
                  setSingleResume({ ...SingleResume, degree: e.target.value })
                }
                value={SingleResume?.degree}
                placeholder="Enter Degree"
                style={inputStyle}
              />
            </Box>

            <Typography sx={{ fontSize: 14, color: "#666" }}>
              College/University Name
            </Typography>
            <Box sx={{ borderBottom: "1px solid #aaa", mb: 1.5 }}>
              <input
                onChange={(e) =>
                  setSingleResume({
                    ...SingleResume,
                    university: e.target.value,
                  })
                }
                value={SingleResume?.university}
                placeholder="Enter College Name"
                style={inputStyle}
              />
            </Box>

            <Typography sx={{ fontSize: 14, color: "#666" }}>
              Year of Graduation
            </Typography>
            <Box sx={{ borderBottom: "1px solid #aaa", mb: 2 }}>
              <input
                onChange={(e) =>
                  setSingleResume({
                    ...SingleResume,
                    yog: e.target.value,
                  })
                }
                value={SingleResume?.yog}
                placeholder="Enter Graduation Year"
                style={inputStyle}
              />
            </Box>
          </Box>

          <Typography variant="h5" sx={{ fontWeight: "bold", mt: 3, mb: 2 }}>
            Skills
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
            <input
              onChange={(e) => setNewSkill(e.target.value)}
              placeholder="Add New Skill"
              style={{
                flex: 1,
                minWidth: 0,
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "6px",
                fontSize: "16px",
              }}
            />
            <Button onClick={addNewSkill} sx={{ color: "#604c4e" }}>
              ADD
            </Button>
          </Box>

          <Typography sx={{ fontWeight: "bold", mb: 2 }}>
            Added Skills :
          </Typography>

          <Grid sx={{ mb: 3, gap: 4 }}>
            {SingleResume?.skills?.map((eachSkill) => (
              <Button
                sx={{
                  bgcolor: "#604c4e",
                  color: "white",
                  mb: 3,
                  m: 1,
                }}
              >
                {eachSkill}
              </Button>
            ))}
          </Grid>

          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
            Summary
          </Typography>

          <Typography sx={{ fontSize: 14, color: "#666" }}>Summary</Typography>

          <textarea
            onChange={(e) =>
              setSingleResume({ ...SingleResume, summary: e.target.value })
            }
            value={SingleResume?.summary}
            placeholder="Enter your professional summary"
            rows={3}
            style={{
              width: "100%",
              boxSizing: "border-box",
              border: "none",
              borderBottom: "1px solid #aaa",
              padding: "10px 4px",
              fontSize: "16px",
              fontFamily: "Arial, sans-serif",
              resize: "vertical",
              outline: "none",
            }}
          />

          <Button
            onClick={onUpdateClick}
            variant="contained"
            onClick={handleClose}
            sx={{
              bgcolor: "#604c4e",
              "&:hover": { bgcolor: "#49393b" },
              fontWeight: "bold",
              mt: 3,
              px: 2,
              py: 1,
            }}
          >
            UPDATE CV
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default Singleresume;
