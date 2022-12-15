import React, { useState, useEffect } from "react";
import { Typography, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/system";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import { useGlobalState, postGptCommand } from "../global";

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

  const handleQuestionCall = () => {
    const prompt = {
      message: `You are an interviewer named 'InterviewBot' interviewing an applicant applying for a job at ${companyName}. Through your questions you want to assess whether the candidate possess ${companyValues} and is suitable for a ${companyPosition} position at ${companyName}. The conversation starts with the user greeting you. Once the user has provided a response to your question, you should return with a question of your own. Do not add on to the user's response.
    You: Thank you for taking the time to interview me, InterviewBot!"`,
    };
    postGptCommand(prompt, setGptOutput);
  };

  //Audio functions

  const [isListening, setIsListening] = useState(false);
  const [answer, setAnswer] = useState(null);

  useEffect(() => {
    handleListen();
  }, [isListening]);

  const handleSubmitAnswer = () => {
    const prompt = {
      message: `${answer}`,
    };
    postGptCommand(prompt, setGptOutput);
  };

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
    <Container alignItems="center">
      <>
        <Typography align="left" variant="h6">
          Interview
        </Typography>
        <Typography>
          Listen to the question asked. Use the speaker button to replay the
          interview question again. Use the microphone button to record you
          response. Press the microphone button again to stop recording your
          response.
        </Typography>
        <Typography>This is where the questions will output:</Typography>
        <Typography>{gptOutput}</Typography>
        <Button onClick={handleQuestionCall}>
          This is a placeholder button to trigger the api call
        </Button>
      </>
      <Container>
        <Grid container direction="column">
          <Typography variant="h6">Current answer</Typography>
          <Typography variant="h7">{answer}</Typography>
          <Button
            width={0.6}
            onClick={() => setIsListening((prevState) => !prevState)}
          >
            {isListening ? (
              <>
                <Typography sx={{ color: "red", textTransform: "none" }}>
                  Stop
                </Typography>
                <MicOffIcon sx={{ color: "red" }} />
              </>
            ) : (
              <>
                <Typography sx={{ color: "green", textTransform: "none" }}>
                  Start
                </Typography>
                <MicIcon sx={{ color: "green" }} />
              </>
            )}
          </Button>
          <Button onClick={handleSubmitAnswer}>Submit Answer</Button>
        </Grid>
      </Container>
      <Button onClick={() => navigate("/feedback")}>Finish interview</Button>
    </Container>
  );
};

export default InterviewPage;
