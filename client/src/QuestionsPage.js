import React, { useState } from "react";
import {
  Paper,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const QuestionsPage = () => {
  const navigate = useNavigate();
  const handleQuestions = () => {
    console.log(`We will do something here`);
    // navigate("/questionsPage");
  };

  return (
    <Paper style={{ display: "flex", justifyContent: "center", padding: 20 }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        This is the questions page
      </div>
    </Paper>
  );
};

export default QuestionsPage;
