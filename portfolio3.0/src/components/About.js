import React from "react";
import author from "../images/me-photo.PNG";

const About = () => {
    return (
        <div className="container py-5">
            <div className="row">
               <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                    <img className="profile-img" src={author} alt="author..."/> 
                    </div>  
               </div>
               <div className="col-lg-6 col-xm-12">
                   <h1 className="about-heading">About</h1>
                   <p className="about-p"> Ciao!! I'm Giselle, a New York City Stylist & Full Stack Web Developer. Columbia University, 2021. 
                       Fabulously passionate about fashion and creating all things aesthetically pleasing. Highly creative. I also enjoy the building process of a project, something I have learned to enjoy even more through my coding bootcamp.
                       New York City is my playground. Love everything this city has to offer: culture, diversity, art, FASHION! This whole city is fuel to creativity.
                       In my free time I play tennis, aimlessly wander the city streets with my giant puppy, and savor the many gastronomic gifts it has.
                       Fashion and technology merging caught my attention, called my name. I'm here now!!!
                   </p>
               </div>  

            </div>
        </div>
    )
}

export default About;
