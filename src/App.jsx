import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";

function App() {
  return (
  <div>
    <Router>
      <Routes>
        <Route path="/js-24/" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </Router>
  </div>
  );
}

export default App;