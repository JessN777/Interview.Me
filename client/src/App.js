import ManualForm from "./ManualForm";
import NavBar from "./NavBar";
import TestForm from "./TestForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ManualForm />} />
          <Route path="/test" element={<TestForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
