import React, { useState, useEffect } from "react";
import {
  Paper,
  Typography,
  Button,
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useGlobalState, postGptFeedback } from "../global";

const FeedbackPage = () => {
  const navigate = useNavigate();
  const results = useGlobalState("results");
  const [gptOutput, setGptOutput] = useState("Waiting for feedback...");
  const resultsBody = results[0];
  const exchangeList = [];
  for (var i = 1, len = resultsBody.length; i < len; i++) {
    exchangeList.push(resultsBody[i].sentence);
  }
  exchangeList.pop();
  const [count, setCount] = useState(0);
  const [prompt, setPrompt] = useState({
    message: `With regard to the interview question of ${
      exchangeList[count]
    }, I answered by saying ${
      exchangeList[count + 1]
    }. What are some tips you would give for me to improve my answer?`,
  });
  // Function to handle navigating to the home page
  const handleNavigateToHome = () => {
    navigate("/");
  };

  const handleSubmit = () => {
    if (count < exchangeList.length - 1) {
      setPrompt({
        message: `With regard to the interview question of ${
          exchangeList[count]
        }, I answered by saying ${
          exchangeList[count + 1]
        }. How well did I do in answering the question and what are some improvements I can make?`,
      });
    }
    setGptOutput("Waiting for feedback...");

    console.log(exchangeList);
    console.log(prompt);
  };

  useEffect(() => {
    console.log("Prompt updated");
    postGptFeedback(prompt, setGptOutput).then(() => {
      console.log(`postGptFeedback was run`);
    });
    const updatedCount = count + 2;
    setCount(updatedCount);
  }, [prompt]);

  return (
    <Paper elevation={0}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        {" "}
        <Button
          onClick={handleSubmit}
          disabled={count >= exchangeList.length - 1}
        >
          Reveal Next Feedback
        </Button>
        <Button
          onClick={handleNavigateToHome}
          disabled={count < exchangeList.length - 1}
        >
          Finish Interview
        </Button>
      </Grid>
      <Grid
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
            backgroundColor: "lightblue",
            alignSelf: "start",
            alignItems: "center",
            justifyContent: "center",
            marginRight: 2,
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
            {resultsBody.slice(1, -1).map((output, index) => {
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

        <Box
          sx={{
            width: "30%",
            backgroundColor: "lightblue",
            alignSelf: "start",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 2,
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
          <Typography>{`Question ${count / 2}`}</Typography>

          <Typography>{gptOutput}</Typography>
        </Box>
      </Grid>
    </Paper>
  );
};

export default FeedbackPage;
