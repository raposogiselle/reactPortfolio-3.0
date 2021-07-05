import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Header from "./components/Header";
// import { BrowserRouter as Router, Route } from "react-router-dom";

//here i will import my components

function App() {
    return (
        <>

        <Navbar />
        <Header />

        </>
    );
}

export default App;