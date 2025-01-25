// import React from "react";
// import NavBar from "./Navbar";
// import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ExercisesPage from "./Scripts/ExercisesPage";

// function App() {
//     return (
//         // <div>
//         //   <NavBar />
//         //     <h1 style={{ color: "white", textAlign: "center", paddingTop: "100px" }}>
//         //         Welcome to GymWebApp
//         //     </h1>
//         // </div>
//         <Router>
//             <NavBar />
//             <Routes>
//                 <Route path="/" element={
//                     <h1 style={{ color: "white", textAlign: "center", paddingTop: "100px" }}>
//                         Welcome to GymWebApp
//                     </h1>
//                 } />
//                 <Route path="/exercises" element={<ExercisesPage />} />
//             </Routes>
//         </Router>
//     );
// }

// export default App;


import React from "react";
import NavBar from "./Scripts/Navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExercisesPage from "./Scripts/ExercisesPage";
import MainPage from "./Scripts/MainPage";

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/exercises" element={<ExercisesPage />} />
            </Routes>
        </Router>
    );
}

export default App;
