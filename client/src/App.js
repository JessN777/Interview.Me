import HomePage from "./pages/HomePage";
import PositionPage from "./pages//PositionPage";
import QuestionsPage from "./pages/QuestionsPage";
import InterviewPage from "./pages/InterviewPage";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/position" element={<PositionPage />} />
          <Route path="/questions" element={<QuestionsPage />} />
          <Route path="/interview" element={<InterviewPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
