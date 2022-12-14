import React, { useState } from "react";
import {
  Paper,
  TextField,
  Button,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Grid,
  requirePropFactory,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const companyProfiles = [
  {
    companyName: "Amazon",
    pictureUrl: "..//images/amazon-logo.png",
    companyValues: "commitment, teamwork, communication",
  },
  {
    companyName: "Google",
    pictureUrl: "..//images/Google.jpg",
    companyValues: "commitment, teamwork, communication",
  },
  {
    companyName: "Microsoft",
    pictureUrl: "..//images/Microsoft.png",
    companyValues: "commitment, teamwork, communication",
  },
  {
    companyName: "Salesforce",
    pictureUrl: "..//images/Salesforce.png",
    companyValues: "commitment, teamwork, communication",
  },
  {
    companyName: "Tesla",
    pictureUrl: "..//images/Tesla.png",
    companyValues: "commitment, teamwork, communication",
  },
  {
    companyName: "Uber",
    pictureUrl: "..//images/Uber.png",
    companyValues: "commitment, teamwork, communication",
  },
];

const HomePage = () => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({});

  const handleFormChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  // const axiosinstance = axios.create({
  //   baseURL: "http://localhost:5000",
  // });

  const handleFormSubmit = () => {
    // const prompt = {
    //   message: `You are an interviewer named 'InterviewBot' interviewing an applicant applying for a company similar to ${formValues.companyName}. Through your questions you want to assess whether the candidate possess ${formValues.companyValues} and is suitable for a ${formValues.companyPosition} position at ${formValues.companyName}.
    // You: Thank you for taking the time to interview me, InterviewBot!"`,
    // };
    // console.log(prompt);
    // console.log(typeof prompt);
    // axiosinstance
    //   .post("/create_question", {
    //     prompt: prompt,
    //   })
    //   .then((response) => {
    //     console.log(response);
    //     console.log(response.data.choices[0].text);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    navigate("/position");

    setFormValues({});
  };
  return (
    <Paper style={{ display: "flex", justifyContent: "center", padding: 20 }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
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

        <Typography
          variant="b2"
          style={{
            flexGrow: 1,
            textAlign: "left",
            color: "black",
            fontWeight: "normal",
          }}
        >
          Internships are a great way to gain work experience and transition
          into a role post-graduation. Our team has built an application to
          provide you with feedback to
        </Typography>

        <Typography
          variant="b2"
          style={{
            flexGrow: 1,
            textAlign: "left",
            color: "black",
            fontWeight: "normal",
          }}
        >
          ace the behavioral interview. We will help you better structure your
          response, align with the company’s values and leave a strong lasting
          impression.
        </Typography>

        <Grid container my={1} spacing={3}>
          {companyProfiles.map((company, index) => (
            <Grid item key={company.companyName}>
              <Card sx={{ minWidth: 345, maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="100"
                  image={require("..//images/amazon-logo.png")}
                  alt="amazon"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {company.companyName}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Select</Button>
                </CardActions>
              </Card>
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
        <Button variant="contained" color="primary" onClick={handleFormSubmit}>
          Submit
        </Button>
      </div>
    </Paper>
  );
};

export default HomePage;
