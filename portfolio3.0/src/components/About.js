import React from "react";
import author from "../images/me-photo.PNG";

const About = () => {
    return (
        <div className="container py-5">
            <div className="row">
               <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap">
                    <img className="profile-img" src={author} alt="author..."/> 
                    </div>  
               </div>
               <div className="col-lg-6 col-xm-12">
                   <h1 className="about-heading">About Me</h1>
                   <p> Ciao!! I am Giselle a New York City Stylist & Full Stack Web Developer from Columbia University. 
                       Excited of all the doors this knowledge will open. 
                       I have no doubt that in due time all this knowledge will translate into exciting cutting edge projects to be showcased here.
                       Since fashion is something I am passionate about is no suprise 
                       "The Astounding World of Fashion and Technology Merging" caught my attentiom and I can not wait to be part of it.
                   </p>
               </div>  

            </div>
        </div>
    )
}

export default About;
