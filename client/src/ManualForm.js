import React, { useState } from "react";
import { Paper, TextField, Button } from "@mui/material";
import axios from "axios";

const ManualForm = () => {
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
    const prompt = {
      message: `You are an interviewer named 'InterviewBot' interviewing an applicant applying for a company similar to ${formValues.companyName}. Through your questions you want to assess whether the candidate possess ${formValues.companyValues} and is suitable for a ${formValues.companyPosition} position at ${formValues.companyName}. 
    You: Thank you for taking the time to interview me, InterviewBot!"`,
    };
    console.log(prompt);
    console.log(typeof prompt);
    axiosinstance
      .post("/create_question", {
        prompt: prompt,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    setFormValues({});
  };
  return (
    <Paper style={{ display: "flex", justifyContent: "center", padding: 20 }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <TextField
          label="Company Name"
          variant="outlined"
          margin="normal"
          name="companyName"
          value={formValues.companyName || ""}
          onChange={handleFormChange}
        />
        <TextField
          label="Interview Position"
          variant="outlined"
          margin="normal"
          name="companyPosition"
          value={formValues.companyPosition || ""}
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

export default ManualForm;
