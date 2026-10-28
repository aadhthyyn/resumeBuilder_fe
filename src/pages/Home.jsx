import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import bgImg from "../assets/bgImg1.jpeg";
import bgImg2 from "../assets/bgimg2.jpeg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box>
      <Box
        sx={{
          height: "100vh",
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(0,0,0,0.5)",
            color: "white",
            padding: "50px",
            width: "60%",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
            }}
          >
            Designed To Get Hired. Your Skills, Your Story, Your Next Job - All
            In One.
          </Typography>

          <Box
            sx={{
                
              width: "250px",
              margin: "30px auto 0",
              padding: "12px",
              "&:hover": {
                bgcolor: "#684531",
              },
            }}
          >
            <Typography sx={{textDecoration:"none", color:"white"}} component={Link} to={"/resume"}>
              Make your Resume with AI
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: "white",
          padding: "80px 10%",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            marginBottom: "60px",
            fontWeight: "bold",
          }}
        >
          What's AI rBuilder
        </Typography>

        <Stack direction="row" spacing={8} alignItems="center">
          <Box
            sx={{
              width: "50%",
            }}
          >
            <Typography
              sx={{
                marginBottom: "20px",
                lineHeight: 1.7,
              }}
            >
              An AI rBuilder is a web application that helps users create
              professional resumes quickly and efficiently using artificial
              intelligence. Traditional resume creation can be time-consuming
              and difficult, especially for freshers who may not know the
              correct format or keywords required for modern recruitment
              systems.
            </Typography>

            <Typography
              sx={{
                marginBottom: "20px",
                lineHeight: 1.7,
              }}
            >
              The system can suggest job-specific keywords, professional
              summaries, and skill recommendations to make the resume more
              effective and ATS (Applicant Tracking System) friendly.
            </Typography>

            <Typography
              sx={{
                marginBottom: "20px",
                lineHeight: 1.7,
              }}
            >
              The main goal of the AI rBuilder is to simplify the resume
              creation process and help job seekers build professional,
              well-structured resumes in a few minutes. Users can edit content,
              preview their resume, and download it in formats such as PDF.
            </Typography>

            <Typography
              sx={{
                lineHeight: 1.7,
              }}
            >
              This type of system is especially useful for students & fresh
              graduates, who want to create high-quality resumes that increase
              their chances of getting shortlisted for job interviews.
            </Typography>
          </Box>

          <Box
            sx={{
              width: "50%",
            }}
          >
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
              sx={{
                width: "100%",
                height: "450px",
                objectFit: "cover",
              }}
            />
          </Box>
        </Stack>
      </Box>

      <Box
        sx={{
          height: "500px",
          backgroundImage: `url(${bgImg2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      <Box
        sx={{
          backgroundColor: "white",
          padding: "80px 10%",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            marginBottom: "60px",
            fontWeight: "bold",
          }}
        >
          Testimony
        </Typography>

        <Stack direction="row" spacing={8} alignItems="center">
          <Box
            sx={{
              width: "50%",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              Trusted by professionals worldwide.
            </Typography>

            <Typography
              sx={{
                marginBottom: "20px",
                lineHeight: 1.7,
              }}
            >
              At rBuilder, we don't just help you create résumés — we help you
              land the job. Whether you're a seasoned professional or just
              starting out, our tools are designed to get results.
            </Typography>

            <Typography
              sx={{
                marginBottom: "20px",
                lineHeight: 1.7,
              }}
            >
              In fact, users who used rBuilder reported getting hired an average
              of 48 days faster.
            </Typography>

            <Typography
              sx={{
                lineHeight: 1.7,
              }}
            >
              Join thousands of job-seekers who've fast-tracked their careers
              with a résumé that truly stands out.
            </Typography>
          </Box>

          <Box
            sx={{
              width: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "420px",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <Box
                component="img"
                src="https://randomuser.me/api/portraits/women/44.jpg"
                sx={{
                  width: "100px",
                  height: "90px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />

              <Box
                component="img"
                src="https://randomuser.me/api/portraits/women/65.jpg"
                sx={{
                  width: "100px",
                  height: "90px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  marginTop: "25px",
                }}
              />

              <Box
                component="img"
                src="https://randomuser.me/api/portraits/men/32.jpg"
                sx={{
                  width: "100px",
                  height: "90px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />

              <Box
                component="img"
                src="https://randomuser.me/api/portraits/men/36.jpg"
                sx={{
                  width: "100px",
                  height: "90px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  marginTop: "-20px",
                }}
              />

              <Box
                component="img"
                src="https://randomuser.me/api/portraits/men/41.jpg"
                sx={{
                  width: "100px",
                  height: "90px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  marginTop: "20px",
                }}
              />

              <Box
                component="img"
                src="https://randomuser.me/api/portraits/women/68.jpg"
                sx={{
                  width: "100px",
                  height: "90px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />

              <Box
                component="img"
                src="https://randomuser.me/api/portraits/women/43.jpg"
                sx={{
                  width: "100px",
                  height: "90px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  marginTop: "-25px",
                }}
              />

              <Box
                component="img"
                src="https://randomuser.me/api/portraits/women/47.jpg"
                sx={{
                  width: "100px",
                  height: "90px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  marginTop: "15px",
                }}
              />

              <Box
                component="img"
                src="https://randomuser.me/api/portraits/men/52.jpg"
                sx={{
                  width: "100px",
                  height: "90px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />

              <Box
                component="img"
                src="https://randomuser.me/api/portraits/men/55.jpg"
                sx={{
                  width: "100px",
                  height: "90px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  marginTop: "-20px",
                }}
              />

              <Box
                component="img"
                src="https://randomuser.me/api/portraits/men/45.jpg"
                sx={{
                  width: "100px",
                  height: "90px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  marginTop: "20px",
                }}
              />

              <Box
                component="img"
                src="https://randomuser.me/api/portraits/men/67.jpg"
                sx={{
                  width: "100px",
                  height: "90px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Home;
