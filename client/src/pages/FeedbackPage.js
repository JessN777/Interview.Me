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
import { setGlobalState } from "../global";

const FeedbackPage = () => {
  const navigate = useNavigate();

  // Initialize the state with an empty array
  const [feedback, setFeedback] = useState([]);

  // Function to handle navigating to the home page
  const handleNavigateToHome = () => {
    navigate("/");
  };

  return (
    <Paper elevation={0}>
      <Typography variant="h6">Feedback</Typography>
      <Typography>
        Now it is time to understand how you can improve your responses.
      </Typography>

      {/* Display feedback cards here */}

      <Button onClick={handleNavigateToHome}>Go to Home</Button>
    </Paper>
  );
};

export default FeedbackPage;
