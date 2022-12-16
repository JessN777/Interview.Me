import React, { useState } from "react";
import {
  Paper,
  TextField,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { setGlobalState } from "../global";

const companyProfiles = [
  {
    companyName: "Amazon",
    pictureUrl: require("..//images/amazon-logo.png"),
    companyValues: "commitment, teamwork, communication",
  },
  {
    companyName: "Google",
    pictureUrl: require("..//images/Google.jpg"),
    companyValues: "commitment, teamwork, communication",
  },
  {
    companyName: "Microsoft",
    pictureUrl: require("..//images/Microsoft.png"),
    companyValues: "commitment, teamwork, communication",
  },
  {
    companyName: "Salesforce",
    pictureUrl: require("..//images/Salesforce.jpg"),
    companyValues: "commitment, teamwork, communication",
  },
  {
    companyName: "Tesla",
    pictureUrl: require("..//images/Tesla-Logo.jpg"),
    companyValues: "commitment, teamwork, communication",
  },
  {
    companyName: "Uber Eats",
    pictureUrl: require("..//images/Uber Eats.png"),
    companyValues: "commitment, teamwork, communication",
  },
  {
    companyName: "Netflix",
    pictureUrl: require("..//images/Netflix.png"),
    companyValues: "commitment, teamwork, communication",
  },
  {
    companyName: "Apple",
    pictureUrl: require("..//images/Apple.png"),
    companyValues: "commitment, teamwork, communication",
  },
];

const HomePage = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({});

  const handleCompanySelection = (companyName, companyValues) => {
    //There is a delay between setting and getting
    setGlobalState("companyName", companyName);
    setGlobalState("companyValues", companyValues);
    navigate("/position");
  };

  const handleFormChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = () => {
    setGlobalState("companyName", formValues.companyName);
    setGlobalState("companyValues", formValues.companyValues);
    navigate("/position");

    setFormValues({});
  };
  return (
    <>
      <Paper
        sx={{
          ml: 20,
          mr: 20,
          backgroundColor: "lightblue",
          justifyItems: "center",
        }}
        elevation={0}
        paddingBottom={"10px"}
      >
        <Typography fontSize={60} align="center" variant="h6">
          Interview.ME
        </Typography>
        <Typography align="center" variant="h6">
          "Software to help you invest in your education"
        </Typography>
      </Paper>
      <Typography
        variant="h6"
        style={{
          flexGrow: 1,
          textAlign: "left",
          color: "black",
          fontWeight: "bold",
        }}
      >
        Better Prepare For Interviews
      </Typography>
      <Typography>
        Internships are a great way to gain work experience and transition into
        a role post-graduation. Our team has built an application to provide you
        with feedback to
      </Typography>
      <Typography>
        ace the behavioral interview. We will help you better structure your
        response, align with the company’s values and leave a strong lasting
        impression.
      </Typography>
      <Paper
        elevation={0}
        style={{ display: "flex", justifyContent: "center", padding: 20 }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Grid justifyContent="center" container my={1} spacing={3}>
            {companyProfiles.map((company) => (
              <Grid item key={company.companyName}>
                <Button
                  sx={{ textTransform: "none" }}
                  onClick={() =>
                    handleCompanySelection(
                      company.companyName,
                      company.companyValues
                    )
                  }
                >
                  <Card elevation={3} sx={{ minWidth: 350, maxWidth: 350 }}>
                    <CardMedia
                      component="img"
                      height="100"
                      image={company.pictureUrl}
                      alt="amazon"
                    />
                  </Card>
                </Button>
              </Grid>
            ))}
          </Grid>

          <TextField
            label="Company Name"
            variant="outlined"
            margin="normal"
            name="companyName"
            value={formValues.companyName || ""}
            onChange={handleFormChange}
          />
          <TextField
            label="Company Values"
            variant="outlined"
            margin="normal"
            value={formValues.companyValues || ""}
            name="companyValues"
            onChange={handleFormChange}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleFormSubmit}
            position="absolute"
            bottom={0}
          >
            Submit
          </Button>
        </div>
      </Paper>
    </>
  );
};

export default HomePage;
