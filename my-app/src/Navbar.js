import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">GymWebApp</div>
            <ul className="navbar-links">
                {/* <li><a href="workout-plans">Workout Plans</a></li>
                <li><a href="exercises">Exercises</a></li> */}
                <li><Link to="/workout-plans">Workout Plans</Link></li>
                <li><Link to="/exercises">Exercises</Link></li>
            </ul>
            <button className="login-button">Login</button>
        </nav>
    );
}

export default NavBar;