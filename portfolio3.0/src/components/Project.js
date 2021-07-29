import React from 'react';
import VinoVR from "../images/vinoVR.png";
import bartering from "../images/bartering.png";
import tarot from "../images/tipsy-tarot.png";
import password from "../images/pw-generator.png"
//FontAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
//React popupbox
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css"


const Project = () => {

//vinoVR
const openPopupboxVinoVR = () => {
    const content = (
        <>
        <img className="project-image-popupbox" src={VinoVR} alt="A browser VR for wine-mood picking"/>
        <p> A browser-based VR experience that allows you to find new wines to try or enjoy your own in a scenic Mediterranean villa, with music that matches your mood. 
            This is an extension of our portal site.</p>
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/raposogiselle/Aframe-VinoVR")}>https://github.com/raposogiselle/Aframe-VinoVR</a>  
        </>
    )
    
    PopupboxManager.open({ content })
}

const popupboxConfigVinoVR = {
    titleBar: {
        enable: true,
        text: "Web browser VR experience."
    },
    fadeIn: true, 
    fadeInSpeed: 500
}

//Bartering
const openPopupboxbartering = () => {
    const content = (
        <>
        <img className="project-image-popupbox" src={bartering} alt="Bartering app"/>
        <p> An app to trade services of equal value, or earn "barterCoins" for future services.</p>
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/raposogiselle/smarter-to-barter")}>https://github.com/raposogiselle/smarter-to-barter</a>  
        </>
    )
    
    PopupboxManager.open({ content })
}

const popupboxConfigbartering = {
    titleBar: {
        enable: true,
        text: "A bartering app."
    },
    fadeIn: true, 
    fadeInSpeed: 500
}

//Tarot App
const openPopupboxtarot = () => {
    const content = (
        <>
        <img className="project-image-popupbox" src={tarot} alt=""/>
        <p> Tarot reading and cocktail picking app.</p>
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/raposogiselle/team-project")}>https://github.com/raposogiselle/team-project</a>  
        </>
    )
    
    PopupboxManager.open({ content })
}

const popupboxConfigtarot = {
    titleBar: {
        enable: true,
        text: "Tarot reading and cocktail picking app."
    },
    fadeIn: true, 
    fadeInSpeed: 500
}

//Password Generator
const openPopupboxpassword = () => {
    const content = (
        <>
        <img className="project-image-popupbox" src={password} alt="Secure password generator"/>
        <p> An ultra secure password generator.</p>
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/raposogiselle/passwordGenerator")}>https://github.com/raposogiselle/passwordGenerator</a>  
        </>
    )
    
    PopupboxManager.open({ content })
}

const popupboxConfigpassword = {
    titleBar: {
        enable: true,
        text: "Secure password generator."
    },
    fadeIn: true, 
    fadeInSpeed: 500
}






    return (
        <div id="projects" className="projects-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5" style={{color: "#D1A103"}}>Projects</h1>
                    <div className="d-flex">
                        
                        <div className="project-image-box" onClick={openPopupboxVinoVR}>
                          <img className="projects-images" src={VinoVR} alt="A browser VR experience"/>
                          <div className="overflow"></div>
                        <FontAwesomeIcon  className="project-icon" icon={faSearchPlus} />
                        </div>
                        
                        <div className="project-image-box" onClick={openPopupboxbartering}>
                          <img className="projects-images" src={bartering} alt="bartering app"/>
                          <div className="overflow"></div>
                          <FontAwesomeIcon  className="project-icon" icon={faSearchPlus} />
                        </div>
                       
                        <div className="project-image-box" onClick={openPopupboxtarot}>
                          <img className="projects-images" src={tarot} alt="tarot cards and cocktail recipies app"/>
                          <div className="overflow"></div>
                          <FontAwesomeIcon  className="project-icon" icon={faSearchPlus} />
                        </div>
                    
                        <div className="project-image-box" onClick={openPopupboxpassword}>
                          <img className="projects-images" src={password} alt="password generator app"/>
                          <div className="overflow"></div>
                          <FontAwesomeIcon  className="project-icon" icon={faSearchPlus} />
                        </div>
                    </div>  
            </div>
            <PopupboxContainer {...popupboxConfigVinoVR}/>
            <PopupboxContainer {...popupboxConfigbartering}/>
            <PopupboxContainer {...popupboxConfigtarot}/>
            <PopupboxContainer {...popupboxConfigpassword}/>
        </div>
    )
}

export default Project
