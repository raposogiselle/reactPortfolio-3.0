import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";

// import { BrowserRouter as Router, Route } from "react-router-dom";

//here i will import my components

function App() {
    return (
        <>
        <Particles 
         className="particles-canvas"        
         params={{ 
             particles: {
                 number: {
                     value: 30,
                     density: {
                         enable: true, 
                         value_area: 900
                     }
                 },
                 shape: {
                     type: "star",
                     stroke: {
                         width: 6,
                         color: "#D1A103"
                     }
                 }
             }
        }}
        />
        <Navbar />
        <Header />
        <About />
        <Project />
        </>
    );
}

export default App;