import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import NavBar from "./Scripts/Navbar";
import AppRoutes from "./Routes/AppRoutes";
import "./App.css";

function App() {
    return (
        <Router>
            {/* <NavBar /> */}
            <AppRoutes />
        </Router>
    );
}

export default App;
