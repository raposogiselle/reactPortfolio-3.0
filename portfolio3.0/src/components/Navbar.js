import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container">  
            <Link className="navbar-brand" href="#"></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <FontAwesomeIcon  icon={faBars} style={{ color: "#ffffff"}}/>
            </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link smooth={true} to="home" className="nav-link" href="#">Home <span className="sr-only"></span></Link>
              </li>
              <li className="nav-item">
                <Link smooth={true} to="about" className="nav-link" href="#">About Me</Link>
              </li>
              <li className="nav-item">
                <Link smooth={true} to="projects" className="nav-link" href="#">Projects</Link>
              </li>
              <li className="nav-item">
                <Link smooth={true} to="technologies" className="nav-link" href="#">Technologies</Link>
              </li>
              <li className="nav-item">
                <Link smooth={true} to="contact" className="nav-link" href="#">Contact Me</Link>
              </li>
            </ul>
          </div>
          </div>
        </nav>
    )
}

export default Navbar;
