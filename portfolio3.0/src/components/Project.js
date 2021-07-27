import React from 'react'
import notetaker from "../images/note-taker.png";
import bartering from "../images/bartering.png";
import tarot from "../images/tipsy-tarot.png";
import password from "../images/pw-generator.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


const Project = () => {
    return (
        <div className="projects-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Projects</h1>
                    <div className="image-box-wrapper row justify-content-center">
                        <div className="project-image-box">
                        <img className="projects-images" src={notetaker} alt="note taking app"/>
                        <FontAwesomeIcon  className="project-github" icon={faBars} />
                        </div>
                
                        <div className="project-image-box">
                        <img className="projects-images" src={bartering} alt="bartering app"/>
                        </div>
                
        
                        <div className="project-image-box">
                        <img className="projects-images" src={tarot} alt="tarot cards and cocktail recipies app"/>
                        </div>
                
                        <div className="project-image-box">
                        <img className="projects-images" src={password} alt="password generator app"/>
                        </div>
                    </div>  
            </div>
        </div>
    )
}

export default Project
