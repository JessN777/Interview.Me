import React, { useState, useEffect } from "react";
import {
  Typography,
  Grid,
  Button,
  Paper,
  Box,
  TextField,
  InputAdornment,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import { useGlobalState, postGptCommand } from "../global";
import SendIcon from "@mui/icons-material/Send";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = "en-CAN";

const InterviewPage = () => {
  const navigate = useNavigate();
  const [gptOutput, setGptOutput] = useState("Waiting for a response...");
  const [companyName] = useGlobalState("companyName");
  const [companyPosition] = useGlobalState("companyPosition");
  const [companyValues] = useGlobalState("companyValues");
  const [isListening, setIsListening] = useState(false);
  const [answer, setAnswer] = useState("");
  const [prompt, setPrompt] = useState({
    message: `You are an interviewer named 'InterviewBot' interviewing an applicant applying for a job at ${companyName}. Through your questions you want to assess whether the candidate possess ${companyValues} and is suitable for a ${companyPosition} position at ${companyName}. The conversation starts with the user greeting you. Once the user has provided a response to your question, you should return with a question of your own. Do not add on to the user's response.\n Hi InterviewBot great to be interviewing with you today!. \nInterviewBot:`,
  });

  const handleSubmitAnswer = () => {
    setPrompt({
      message:
        prompt.message + `${gptOutput} \nYou: ${answer} \nInterviewBot:   `,
    });
    console.log(prompt);
    // postGptCommand(prompt, setGptOutput);
  };

  useEffect(() => {
    console.log("Prompt updated");
    postGptCommand(prompt, setGptOutput);
  }, [prompt]);

  useEffect(() => {
    handleListen();
  }, [isListening]);

  const handleListen = () => {
    if (isListening) {
      mic.start();
      mic.onend = () => {
        mic.start();
      };
    } else {
      mic.stop();
      mic.onend = () => {};
    }
    mic.onstart = () => {};

    mic.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
      setAnswer(transcript);
      mic.onerror = (event) => {
        console.log(event.error);
      };
    };
  };

  return (
    <Paper
      sx={{
        ml: 15,
        mr: 15,
        backgroundColor: "lightblue",
        display: "flex",
        justifyItems: "center",
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        padding="30px"
      >
        <Typography variant="h4">Interview</Typography>
        <Typography>
          Listen to the question asked. Use the speaker button to replay the
          interview question again. Use the microphone button to record you
          response. Press the microphone button again to stop recording your
          response. The response will appear below:
        </Typography>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: 200,
            backgroundColor: "white",
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 3,
          }}
        >
          <Typography sx={{ fontWeight: "bold" }}>{gptOutput}</Typography>
        </Box>

        <Grid
          sx={{ pl: 15, pr: 15 }}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Button
            onClick={() => {
              console.log(prompt.message);
            }}
          >
            Log Prompt
          </Button>
          <TextField
            value={answer}
            multiline
            fullWidth
            rows={4}
            variant="filled"
            onChange={(e) => {
              setAnswer(e.target.value);
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button onClick={handleSubmitAnswer}>
                    <SendIcon />
                  </Button>
                  <Button
                    width={0.6}
                    onClick={() => setIsListening((prevState) => !prevState)}
                  >
                    {isListening ? (
                      <>
                        <Typography
                          sx={{ color: "red", textTransform: "none" }}
                        >
                          Stop
                        </Typography>
                        <MicOffIcon sx={{ color: "red" }} />
                      </>
                    ) : (
                      <>
                        <Typography
                          sx={{ color: "green", textTransform: "none" }}
                        >
                          Start
                        </Typography>
                        <MicIcon sx={{ color: "green" }} />
                      </>
                    )}
                  </Button>
                </InputAdornment>
              ),
              style: {
                borderRadius: 4,
              },
            }}
          />
          <Button onClick={() => navigate("/feedback")}>
            Finish interview
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default InterviewPage;
