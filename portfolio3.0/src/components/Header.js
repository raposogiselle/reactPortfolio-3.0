import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Header = () => {
    return (
        <div id="home" className="header-wrapper">
            <div className="main-info">
                <h1>Giselle Raposo</h1>
                <Typed 
                    className="typed-text"
                    strings={["Full Stack Web Developer", "Stylist", "MERN", "High Tech Fashion", "Creativity", "Technology", "Aesthetics"]}
                    typeSpeed={40}
                    backSpeed={70}
                    loop
                />
                <Link smooth={true} to="contact" href="#" className="btn-main">Contact Me</Link>
            </div>
        </div>
    )
}

export default Header;
