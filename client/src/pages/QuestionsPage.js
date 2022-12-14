import React, { useState } from "react";
import { Paper, Typography, Button, TextField } from "@mui/material";
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
    setGlobalState("questions", questions);

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
