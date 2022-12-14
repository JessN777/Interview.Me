import React, { useState } from "react";
import {
  Paper,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Grid,
  Button,
  TextField,
  Container,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const QuestionsPage = () => {
  const navigate = useNavigate();
  const handleQuestions = () => {
    console.log(`We will do something here`);
    // navigate("/Interview");
  };

  const [formValues, setFormValues] = useState({});

  const handleFormChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = () => {
    // Do stuff in here to make sure AI knows questions and bring to next page;

    navigate("/interview");

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
          Please Insert Your Interview Questions
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
          Let us know what questions you plan to practice. This will allow our
          AI to give stronger recommendations when improving
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
          your interviewing skills.
        </Typography>
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
          width="auto"
          onClick={handleFormSubmit}
        >
          Submit
        </Button>
      </div>
    </Paper>
  );
};

export default QuestionsPage;
