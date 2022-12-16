import React, { useState } from "react";
import {
  Paper,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Grid,
  Button,
  Avatar,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useGlobalState, postGptCommand } from "../global";
import { setGlobalState } from "../global";

const FeedbackPage = () => {
  const navigate = useNavigate();

  // Initialize the state with an empty array
  const [feedback, setFeedback] = useState([]);

  // Function to handle navigating to the home page
  const handleNavigateToHome = () => {
    navigate("/");
  };

  const gptOutput1 = "Good things to take from the interview";
  const gptOutput2 = "Things you should improve on";

  return (
    <Paper elevation={0}>
      <Typography variant="h6" style={{ textAlign: "center" }}>
        Feedback
      </Typography>
      <Typography style={{ textAlign: "center" }}>
        Now it is time to understand how you can improve your responses.
      </Typography>
      <Typography variant="h6"> Notes:</Typography>

      {/* Display the boxes side by side */}
      <Box
        sx={{
          marginTop: 5,
          display: "flex",
          width: "100%",
          height: 200,
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 3,
        }}
      >
        {/* Display the first box */}
        <Box
          sx={{
            width: "50%",
            height: "100%",
            backgroundColor: "white",
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 3,
            borderColor: "black",
            borderWidth: 2,
            borderStyle: "solid",
          }}
        >
          <Typography sx={{ fontWeight: "bold" }}>{gptOutput1}</Typography>
        </Box>

        {/* Display the second box */}
        <Box
          sx={{
            width: "50%",
            height: "100%",
            backgroundColor: "white",
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 3,
            borderColor: "black",
            borderWidth: 2,
            borderStyle: "solid",
          }}
        >
          <Typography sx={{ fontWeight: "bold" }}>{gptOutput2}</Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default FeedbackPage;
