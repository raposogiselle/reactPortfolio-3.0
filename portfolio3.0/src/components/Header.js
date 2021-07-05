import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Giselle Raposo</h1>
                <Typed 
                    className="typed-text"
                    strings={["Full Stack Web Developer", "Stylist","MERN", "High Tech Fashion", "Creativity", "Technology", "Aesthetics"]}
                    typeSpeed={40}
                    backSpeed={70}
                    loop
                />
                <a href="#" className="btn-main">Contact Me</a>
            </div>
        </div>
    )
}

export default Header;
