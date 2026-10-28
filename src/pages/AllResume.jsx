import { useState, useEffect, useMemo } from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Container,
  Paper,
  Button,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "react-toastify";
import { deleteResume, getResume } from "../services/allAPI";
import { Link } from "react-router-dom";

const AllResume = () => {
  const [resumes, setResumes] = useState([]);
  const [duplicateData, setDuplicateData] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  useEffect(() => {
    getResumeDatas();
  }, []);

  const getResumeDatas = async () => {
    try {
      const response = await getResume();
      setResumes(response.data);
      setDuplicateData(response.data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to get resume data");
    }
  };

  const onDeleteClick = async (id) => {
    try {
      let apiResponse = await deleteResume(id);
      if (apiResponse.status == 200) {
        toast.success("sucessfully deleted");
      } else {
        toast.error("failed to get delete resume");
      }
    } catch (error) {
      console.log(error);
      toast.error("failed to get delete resume");
    }
  };

  const onSearchClick = useMemo(() => {
    let filteredData = duplicateData.filter((eachData) =>
      eachData.jobTitle.toLowerCase().includes(searchVal.toLowerCase()),
    );
    setResumes(filteredData);
  }, [searchVal]);

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontWeight: "bold",
          fontFamily: "Georgia, serif",
          color: "#20252b",
          mb: 5,
        }}
      >
        All Saved Resumes
      </Typography>

      <Typography sx={{ fontFamily: "Georgia, serif", mb: 4, lineHeight: 1.6 }}>
        All resumes submitted to the platform in one place, allowing
        administrators or recruiters to view and manage candidate profiles.
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", mb: 5 }}>
        <TextField
          onChange={(e) => setSearchVal(e.target.value)}
          fullWidth
          size="small"
          placeholder="Search Candidate by their Job Roles"
          sx={{ maxWidth: 560 }}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            },
          }}
        />
      </Box>

      <TableContainer component={Paper} elevation={0}>
        <Table sx={{ minWidth: 550 }}>
          <TableHead>
            <TableRow sx={{ bgcolor: "#e99739" }}>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                #
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Resume
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Job Role
              </TableCell>
              <TableCell
                align="center"
                sx={{ color: "white", fontWeight: "bold" }}
              >
                ...
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {resumes.map((resume, index) => (
              <TableRow key={resume.id || resume._id}>
                <TableCell>{index + 1}</TableCell>

                <TableCell>
                  <Link href="#" underline="always">
                    {resume.fullName}
                  </Link>
                </TableCell>

                <TableCell>
                  {resume.jobRole || resume.jobTitle || resume.role || "-"}
                </TableCell>

                <TableCell align="center">
                  <IconButton
                    onClick={() => onDeleteClick(resume.id)}
                    sx={{ color: "#dc3545" }}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                  <Button component={Link} to={`/resume/${resume.id}`}>
                    showDetails
                  </Button>
                </TableCell>
              </TableRow>
            ))}

            {resumes.length === 0 && (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  No resumes found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default AllResume;
