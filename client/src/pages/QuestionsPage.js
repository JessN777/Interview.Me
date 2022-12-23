import React, { useState } from "react";
import {
  Paper,
  Typography,
  Button,
  TextField,
  LinearProgress,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { setGlobalState } from "../global";

const QuestionsPage = () => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    Question1: "",
    Question2: "",
    Question3: "",
  });

  const handleFormChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = () => {
    const questions = [
      formValues["Question1"],
      formValues["Question2"],
      formValues["Question3"],
    ];
    // setGlobalState("questions", questions);

    navigate("/interview");
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
      >
        <Typography fontSize={60} align="center" variant="h6">
          Interview.ME
        </Typography>
        <Typography align="center" variant="h6">
          "Software to help you invest in your education"
        </Typography>
      </Paper>
      <Box height={20}>
        <Box height={20} />
        <LinearProgress variant="determinate" value={"50"} />
        <Typography
          variant="body1"
          sx={{ textAlign: "center", color: "black" }}
        >
          50%
        </Typography>
      </Box>
      <Box height={30} />
      <Typography
        variant="h6"
        style={{
          flexGrow: 1,
          textAlign: "left",
          color: "black",
          fontWeight: "bold",
        }}
      >
        Please Insert Your Interview Questions
      </Typography>
      <Typography>
        Let us know what questions you plan to practice. This will allow our AI
        to give stronger recommendations when improving your interviewing
        skills.
      </Typography>

      <Paper
        elevation={0}
        style={{ display: "flex", justifyContent: "center", padding: 20 }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TextField
            label="Question 1"
            variant="outlined"
            margin="normal"
            name="Question1"
            sx={{ m: 1, width: "100ch" }}
            value={formValues.Question1 || ""}
            onChange={handleFormChange}
          />
          <TextField
            label="Question 2"
            variant="outlined"
            margin="normal"
            name="Question2"
            sx={{ m: 1, width: "100ch" }}
            value={formValues.Question2 || ""}
            onChange={handleFormChange}
          />
          <TextField
            label="Question 3"
            variant="outlined"
            margin="normal"
            name="Question3"
            sx={{ m: 1, width: "100ch" }}
            value={formValues.Question3 || ""}
            onChange={handleFormChange}
          />

          <Button
            variant="contained"
            color="primary"
            width="300"
            onClick={handleFormSubmit}
          >
            Submit
          </Button>
        </div>
      </Paper>
    </>
  );
};

export default QuestionsPage;
