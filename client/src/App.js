import HomePage from "./HomePage";
import NavBar from "./NavBar";
import PositionPage from "./PositionPage";
import QuestionsPage from "./QuestionsPage";
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
