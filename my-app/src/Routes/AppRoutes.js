import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "../Scripts/MainPage";
import ExercisesPage from "../Scripts/ExercisesPage";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/exercises" element={<ExercisesPage />} />
        </Routes>
    );
}

export default AppRoutes;
