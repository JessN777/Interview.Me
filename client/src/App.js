import HomePage from "./pages/HomePage";
import PositionPage from "./pages//PositionPage";
import QuestionsPage from "./pages/QuestionsPage";
import InterviewPage from "./pages/InterviewPage";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FeedbackPage from "./pages/FeedbackPage";
import { Typography, Paper, Container } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Router>
        <Container
          sx={{
            backgroundColor: "white",
            borderRadius: 4,
            height: 300,
          }}
        >
          <NavBar />
          <Paper
            sx={{
              backgroundColor: "lightblue",
              justifyItems: "center",
            }}
            elevation={0}
          >
            <Typography fontSize={60} align="center" variant="h6">
              Interview.ME
            </Typography>
            <Typography align="center" variant="h6">
              "Software to help you invest in your education"
            </Typography>
          </Paper>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/position" element={<PositionPage />} />
            {/* <Route path="/questions" element={<QuestionsPage />} /> */}
            <Route path="/interview" element={<InterviewPage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
