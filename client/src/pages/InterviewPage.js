import React, { useState, useEffect } from "react";
import { Typography, Grid, Button } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import { Container } from "@mui/system";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import axios from "axios";
import { useGlobalState } from "../global";

const axiosinstance = axios.create({
  baseURL: "http://localhost:5000",
});

const QuestionOutputSection = () => {
  const [gptOutput, setGptOutput] = useState("Waiting for a response...");

  const [companyName] = useGlobalState("companyName");
  const [companyPosition] = useGlobalState("companyPosition");
  const [companyValues] = useGlobalState("companyValues");

  const handleQuestionCall = () => {
    const prompt = {
      message: `You are an interviewer named 'InterviewBot' interviewing an applicant applying for a company similar to ${companyName}. Through your questions you want to assess whether the candidate possess ${companyValues} and is suitable for a ${companyPosition} position at ${companyName}. The conversation starts with the user greeting you.
    You: Thank you for taking the time to interview me, InterviewBot!"`,
    };
    axiosinstance
      .post("/create_question", {
        prompt: prompt,
      })
      .then((response) => {
        console.log(
          `Passed prompt with companyName: ${companyName}, companyValues: ${companyValues}, and companyPosition: ${companyPosition}`
        );
        console.log(response);
        console.log(response.data.choices[0].text);
        setGptOutput(response.data.choices[0].text);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Typography variant="h6">Interview</Typography>
      <Typography>
        Listen to the question asked. Use the speaker button to replay the
        interview question again. Use the microphone button to record you
        response. Press the microphone button again to stop recording your
        response.
      </Typography>
      <Typography>This is where the questions will output:</Typography>
      <Button onClick={handleQuestionCall}>
        This is a placeholder button to trigger the api call
      </Button>
      <Typography>{gptOutput}</Typography>
    </>
  );
};

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = "en-CAN";

const AudioInputSection = () => {
  const [isListening, setIsListening] = useState(false);
  const [answer, setAnswer] = useState(null);
  const [savedAnswer, setSavedAnswer] = useState([]);

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

  const handleSaveAnswer = () => {
    setSavedAnswer([...savedAnswer, answer]);
    setAnswer("");
  };
  return (
    <Container>
      <Typography variant="h6">Your answer</Typography>
      <Grid container direction="column">
        <Typography variant="h6">Current answer</Typography>
        {isListening ? <MicIcon /> : <MicOffIcon />}
        <Button
          width={0.6}
          onClick={handleSaveAnswer}
          disabled={!answer}
          variant="contained"
        >
          Keep Answer
        </Button>
        <Button
          width={0.6}
          onClick={() => setIsListening((prevState) => !prevState)}
        >
          Start/Stop
        </Button>
        <Typography variant="h7">{answer}</Typography>
        <div className="box">
          <h2>Notes</h2>
          {savedAnswer.map((n) => (
            <p key={n}>{n}</p>
          ))}
        </div>
      </Grid>
    </Container>
  );
};

const InterviewPage = () => {
  const navigate = useNavigate();
  return (
    <Container alignItems="center">
      <QuestionOutputSection />
      <AudioInputSection />
      <Button onClick={() => navigate("/feedback")}>Finish interview</Button>
    </Container>
  );
};

export default InterviewPage;
