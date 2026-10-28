import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getResume } from "../services/allAPI";
import { Box, Button, Grid, Typography } from "@mui/material";
import Preview from "../components/Preview";
import { Link } from "react-router-dom";

const AllDownload = () => {
  const [resumeDatas, setResumeData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      let apiResponse = await getResume();
      if (apiResponse.status == 200) {
        setResumeData(apiResponse.data);
      } else {
        toast.error("api call failed");
      }
    } catch (error) {
      console.log(error);
      toast.error("Api call Failed");
    }
  };
  return (
    <Box>
      {resumeDatas?.length > 0 ? (
        <Box>
          <Typography>All Download</Typography>
          <Grid sx={{ p: 5 }} spacing={5} container>
            {resumeDatas.map((eachResume, index) => (
              <Grid size={6}>
                <Button component={Link} to={`/resume/${eachResume.id}`}>
                  View Details
                </Button>
                <Preview key={index} resumeData={eachResume} />
              </Grid>
            ))}
          </Grid>
        </Box>
      ) : (
        <Typography>no resume Available</Typography>
      )}
    </Box>
  );
};

export default AllDownload;
