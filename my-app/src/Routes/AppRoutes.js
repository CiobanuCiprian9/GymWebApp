import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "../Scripts/MainPage";
import ExercisesPage from "../Scripts/ExercisesPage";
import LoginPage from "../Scripts/LoginPage";
import NavBar from "../Scripts/Navbar";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<><NavBar /><MainPage /></>} />
            <Route path="/exercises" element={<><NavBar /><ExercisesPage /></>} />
        </Routes>
    );
}

export default AppRoutes;
