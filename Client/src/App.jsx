import React from "react";
import { Routes, Route } from "react-router-dom"; // Fixed import
import LandingPage from "./Pages/LandingPage";
import SignUp from "./Pages/Auth/SignUp";
import Login from "./Pages/Auth/Login";
import Home from "./Pages/Home/Home";
import Problems from "./Pages/Problems/Problems";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/problem" element={<Problems />} />
        </Routes>
    );
};

export default App;
