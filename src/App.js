import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Distortion from "./components/Distortion";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Distortion" element={<Distortion/>} />
      </Routes>
    </Router>
  );
}

export default App;
