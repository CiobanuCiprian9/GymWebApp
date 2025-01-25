import React from "react";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar">
            {/* <div className="navbar-logo">GymWebApp</div> */}
            <Link to="/" className="navbar-logo">GymWebApp</Link>
            <ul className="navbar-links">
                <li><Link to="/workout-plans">Workout Plans</Link></li>
                <li><Link to="/exercises">Exercises</Link></li>
            </ul>
            <button className="login-button">Login</button>
        </nav>
    );
}

export default NavBar;