import React from "react";
import {
    EmailShareButton,
    EmailIcon,
    LinkedinShareButton,
    LinkedinIcon,
    TwitterShareButton,
    TwitterIcon,
} from "react-share";

const Footer = () => {
    return (
        <div id="contact" className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>66 Perry St, New York, NY 10014</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:555-555-5555">347.524.9497</a>
                        </div>
                        <div className="d-flex">
                            <p>giselleraposo0@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav">Home</a>
                                <br/>
                                <a className="footer-nav">About</a>
                                <br/>
                                <a className="footer-nav">Projects</a>
                            </div>
                            <div className="col">
                                <a className="footer-nav">Technologies</a>
                                <br/>
                                <a className="footer-nav">Contact Me</a>
                                <br/>
                                <a className="footer-nav">Projects</a>
                            </div>                                                          
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <EmailShareButton
                            url={"giselleraposo0@gmail.com"}
                            subject={""}
                            body={""}
                            separator={""}
                            >
                                <EmailIcon className="mx3" size={36}/>
                            </EmailShareButton>

                            <LinkedinShareButton
                            url={"linkedin.com/in/giselleraposowebdev"}
                            title={""}
                            summary={""}
                            source={""}
                            >
                                <LinkedinIcon className="mx3" size={36}/>
                            </LinkedinShareButton>

                            <TwitterShareButton
                            url={"https://twitter.com/raposo_Giselle"}
                            subject={""}
                            body={""}
                            separator={""}
                            >
                                <TwitterIcon className="mx3" size={36}/>
                            </TwitterShareButton>
                        </div>
                        <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp; New Horizon | All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
