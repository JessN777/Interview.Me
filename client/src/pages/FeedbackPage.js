import React, { useState, useEffect } from "react";
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
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useGlobalState, setGlobalState, postGptFeedback } from "../global";

const FeedbackPage = () => {
  const navigate = useNavigate();
  const results = useGlobalState("results");
  const [gptOutput, setGptOutput] = useState("Waiting for feedback");
  const [prompt, setPrompt] = useState({ message: "" });
  const test = results[0];
  console.log(test);

  // Function to handle navigating to the home page
  const handleNavigateToHome = () => {
    navigate("/");
  };

  const handleSubmit = () => {
    const exchangeList = [];
    for (var i = 1, len = test.length; i < len; i++) {
      exchangeList.push(test[i].sentence);
    }
    exchangeList.pop();
    setPrompt({
      message: `With regard to the interview question of ${exchangeList[0]}, I answered by saying ${exchangeList[1]}. Do you have any tips for improving my answer?`,
    });

    for (var i = 0, len = exchangeList.length; i < len; i += 2) {
      setPrompt({
        message: `With regard to the interview question of ${
          exchangeList[i]
        }, I answered by saying ${
          exchangeList[i + 1]
        }. Do you have any tips for improving my answer?`,
      });
    }

    console.log(exchangeList);
    console.log(exchangeList[2]);
  };

  useEffect(() => {
    console.log("Prompt updated");
    postGptFeedback(prompt, setGptOutput);
  }, [prompt]);

  return (
    <Paper elevation={0}>
      <Typography variant="h6" style={{ textAlign: "center" }}>
        Feedback
      </Typography>
      <Button onClick={() => console.log(typeof results)}>
        Click me for results
      </Button>
      <Typography style={{ textAlign: "center " }}>
        Now it is time to understand how you can improve your responses.
        {results[0].sentence}
      </Typography>
      <Typography variant="h6">Notes:</Typography>
      <Avatar alt="Bryan Li" src="/images/Bryan Li.jpg">
        {"Bryan Li"}
      </Avatar>
      <Typography>
        This will be the spot where the feedback will be presented.
      </Typography>

      {/* Display the boxes side by side */}
      <Button onClick={handleSubmit}>Print ExchangeList</Button>
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
            width: "30%",
            height: 600,
            backgroundColor: "lightblue",
            alignSelf: "start",
            alignItems: "center",
            justifyContent: "center",
            marginRight: 10,
            padding: 2,
            borderRadius: 3,
            borderColor: "gray",
            borderWidth: 2,
            borderStyle: "solid",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            What was said during the interview:
          </Typography>
          <List
            sx={{ width: "100%", bgcolor: "background.paper", borderRadius: 3 }}
          >
            {test.map((output, index) => {
              return (
                <>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar
                        alt={output.speaker}
                        src="/static/images/avatar/1.jpg"
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={index % 2 === 0 ? "Question" : "Answer"}
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            {`${output.speaker}: `}
                          </Typography>
                          {output.sentence}
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </>
              );
            })}
          </List>
        </Box>

        {/* Display the second box */}
        <Box
          sx={{
            width: "30%",
            height: 600,
            backgroundColor: "lightblue",
            alignSelf: "start",
            alignItems: "center",
            justifyContent: "center",
            marginRight: 10,
            padding: 2,
            borderRadius: 3,
            borderColor: "gray",
            borderWidth: 2,
            borderStyle: "solid",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Interview Feedback:
          </Typography>
          <Typography>{gptOutput}</Typography>
          {/* <List
            sx={{ width: "100%", bgcolor: "background.paper", borderRadius: 3 }}
          >
            {test.map((output, index) => {
              return (
                <>
                  <ListItem alignItems="flex-start">
                    <ListItemText
                      primary="Feedback"
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            {`${output.speaker}: `}
                          </Typography>
                          {output.sentence}
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </>
              );
            })}
          </List> */}
        </Box>
      </Box>
    </Paper>
  );
};

export default FeedbackPage;
