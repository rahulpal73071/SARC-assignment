import React from "react";
import './Footer.css';
import Image from '../assets/cheaorange.png'

const Footer = () =>{
    return(
        <div className="Footer">
           

            <div className="content_footer">
                <h1 className="head1_footer">Website Created and Mentained By</h1>
                <img src={Image} alt="footerimage" className="image_footer"/>
            </div>
        </div>
    );

};
export default Footer;