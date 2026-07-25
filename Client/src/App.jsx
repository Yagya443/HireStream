import React from "react"; 
import { Routes, Route } from "react-router-dom"; // Fixed import
import LandingPage from "./Pages/LandingPage"; 
import SignUp from "./Pages/Auth/SignUp"; 
import Login from "./Pages/Auth/Login"; 

const App = () => { 
  return ( 
    <Routes> 
      <Route path="/" element={<LandingPage />} /> 
      <Route path="/signup" element={<SignUp />} /> 
      <Route path="/login" element={<Login />} /> 
    </Routes> 
  ); 
}; 

export default App;
