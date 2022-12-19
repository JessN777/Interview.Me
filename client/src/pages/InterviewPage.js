import React, { useState, useEffect } from "react";
import {
  Typography,
  Grid,
  Button,
  Paper,
  Box,
  TextField,
  LinearProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import { useGlobalState, postGptQuestion, setGlobalState } from "../global";
import SendIcon from "@mui/icons-material/Send";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = "en-CAN";

const InterviewPage = () => {
  const navigate = useNavigate();
  const [gptOutput, setGptOutput] = useState("Waiting for response...");
  const [companyName] = useGlobalState("companyName");
  const [companyPosition] = useGlobalState("companyPosition");
  const [companyValues] = useGlobalState("companyValues");
  const [isListening, setIsListening] = useState(false);
  const [answer, setAnswer] = useState("");
  const [prompt, setPrompt] = useState({
    message: `You are an interviewer named 'InterviewBot' interviewing an applicant applying for a job at ${companyName}. Through your questions you want to assess whether the candidate possess ${companyValues} and is suitable for a ${companyPosition} position at ${companyName}. The conversation starts with the user greeting you. Once the user has provided a response to your question, you should return with a question of your own. Do not add on to the user's response.\n You: Hi InterviewBot great to be interviewing with you today!. \nInterviewBot:`,
  });

  const handleSubmitAnswer = () => {
    setGptOutput("Waiting for response...");
    setPrompt({
      message:
        prompt.message + `${gptOutput} \nYou: ${answer} \nInterviewBot: `,
    });
    console.log(prompt);
  };

  useEffect(() => {
    console.log("Prompt updated");
    postGptQuestion(prompt, setGptOutput);
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

  const handleFinishInterview = () => {
    const dialogue = [];
    const regex = /(InterviewBot|You): (.*)/g;
    let match;
    while ((match = regex.exec(prompt.message))) {
      dialogue.push({ speaker: match[1], sentence: match[2] });
    }
    setGlobalState("results", dialogue);
    navigate("/feedback");
  };

  return (
    <>
      <Box height={20}>
        <Box height={20} />
        <LinearProgress variant="determinate" value={"70"} />
        <Typography
          variant="body1"
          sx={{ textAlign: "center", color: "black" }}
        >
          70%
        </Typography>
      </Box>
      <Box height={30} />
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        Interview
      </Typography>
      <Typography>
        Listen to the question asked. Use the speaker button to replay the
        interview question again. Use the microphone button to record you
        response. Press the microphone button again to stop recording your
        response. Once you are satisfied with your response, press the send
        button to upload your answer. The response will appear below:
      </Typography>
      <>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          padding="30px"
        >
          <Box
            sx={{
              marginTop: 5,
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
            <TextField
              sx={{ marginTop: 5 }}
              label="Answer"
              value={answer}
              multiline
              fullWidth
              rows={4}
              variant="filled"
              inputProps={{ min: 0, style: { textAlign: "center" } }}
              onChange={(e) => {
                setAnswer(e.target.value);
              }}
            />
            <Grid
              sx={{ marginTop: 5 }}
              width="20%"
              container
              direction="row"
              justifyContent="space-around"
              alignItems="center"
            >
              <Button
                style={{
                  backgroundColor: "white",
                  borderRadius: "50%",
                  padding: "20px",
                  color: isListening ? "green" : "red",
                }}
                onClick={() => setIsListening((prevState) => !prevState)}
              >
                {isListening ? <MicIcon /> : <MicOffIcon />}
              </Button>
              <Button
                style={{
                  backgroundColor: "white",
                  borderRadius: "50%",
                  padding: "20px",
                }}
                onClick={handleSubmitAnswer}
              >
                <SendIcon />
              </Button>
            </Grid>

            <Button
              variant="contained"
              color="primary"
              position="absolute"
              bottom={0}
              onClick={handleFinishInterview}
            >
              Finish interview
            </Button>
          </Grid>
        </Grid>
      </>
    </>
  );
};

export default InterviewPage;
