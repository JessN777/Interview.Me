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
  Container,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const axiosinstance = axios.create({
    baseURL: "http://localhost:5000",
  });

  const [formValues, setFormValues] = useState({});

  const handleFormChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

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
          <Grid item>
            <Card sx={{ minWidth: 345, maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="100"
                image={require("./amazon-logo.png")}
                alt="amazon"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Amazon
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Select</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{ minWidth: 345, maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="100"
                image={require("./Google.jpg")}
                alt="google"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Uber
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Select</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{ minWidth: 345, maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="100"
                image={require("./Uber.jpg")}
                alt="Uber"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Amazon
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Select</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>

        <Grid container my={3} spacing={3}>
          <Grid item>
            <Card sx={{ minWidth: 345, maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="100"
                image={require("./Microsoft.png")}
                alt="Microsoft"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Amazon
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Select</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{ minWidth: 345, maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="100"
                image={require("./Salesforce.png")}
                alt="Salesforce"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Uber
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Select</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{ minWidth: 345, maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="100"
                image={require("./Tesla.png")}
                alt="Tesla"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Amazon
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Select</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>

        <TextField
          label="Company Name"
          variant="outlined"
          margin="normal"
          name="companyName"
          value={formValues.companyName || ""}
          onChange={handleFormChange}
        />
        {/* <TextField
          label="Interview Position"
          variant="outlined"
          margin="normal"
          name="companyPosition"
          value={formValues.companyPosition || ""}
          onChange={handleFormChange}
        /> */}
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
