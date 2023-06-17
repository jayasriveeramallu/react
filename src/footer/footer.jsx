import React from "react";
import './footer.css';
import {Link} from 'react-router-dom';
import fb from '../asserts/facebook.png';
import insta from '../asserts/instagram.png';
import twitter from '../asserts/twitter.png';
import linkedin from '../asserts/linkedin.png';


const Footer =() => {
    return (
        <div className="footer">
           <div className="sb_footer section_padding">
            <div className="sb_footer_links">
                <div className="sb_footer_links_div">
                    <h1>Quick Links</h1>
                      <Link to="/" ><p>Explore</p></Link>
                      <Link to="/"><p>Login</p></Link>
                      <Link to ="/"><p>Register</p></Link>
                </div>
                <div className="sb_footer_links_div">
                    <h4>Resources</h4>
                    <Link to="/"><p>Community</p></Link>
                    <Link to="/"><p>How it works</p></Link>
                    <Link to="/"><p>Latest Products</p></Link>
                </div>
                <div className="sb_footer_links_div">
                    <h4>Snapcoins</h4>
                    <Link to="/"><p>Connect Walle</p>t</Link>
                    <Link to="/"><p>Faq</p></Link>
                    <Link to="/"><p>Become a Partner</p></Link>
                </div>
                <div className="sb_footer_links_div">
                    <h4>Contact!</h4>
                    <div className="socialmedia">
                        <p><img src={fb} alt = ""/></p>
                        <p><img src={twitter} alt = ""/></p>
                        <p><img src={linkedin} alt = ""/></p>
                        <p><img src={insta} alt = ""/></p>
                    </div>
                </div>
            </div>

            <hr></hr>
            <div className="sb_footer-below">
                <div className="sb_footer-copyright">
                    <p>
                        @{new Date().getFullYear()}2023 Snapcoins
                    </p>
                </div>
                <div className="sb_footer-below-links">
                    <Link to="/terms">
                        <div><p>Terms and Conditions</p></div>
                    </Link>
                    <Link to="/cookie">
                        <div><p>Cookie Declaration</p></div>
                    </Link>
                    <Link to="/privacy">
                        <div><p>Privacy Policy</p></div>
                    </Link>
                </div>
            </div>
           </div>
        </div>
    )
}

export default Footer;