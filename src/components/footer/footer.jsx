import "./footer.css";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer(){
    return(
        <div className="footerSection">
            <div className="footerNameAndCareer">
                <h1 className="footerAkintunde">&lt;AKINTUNDE/&gt;</h1>
                <p className="footerCareer"><span className="dash"></span> Frontend Developer</p>
            </div>
            <div className="footerLine"></div>
            <div className="rightsAndSocials">
                <p>© 2025 Akintunde Isaac. All rights reserved.</p>
                <div className="socials">
                    <a href="https://github.com/Akintunde-digging" target="_blank" rel="noopener noreferrer"><FaGithub className="socialsIcon"/></a>
                    <a href="https://www.linkedin.com/in/isaac-akintunde-7563bb300?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer"><FaLinkedin className="socialsIcon"/></a>
                    <a href="https://www.instagram.com/highzickakintunde?igsh=cXo1M2I4cXVncm1q&utm_source=qr" target="_blank" rel="noopener noreferrer"><FaInstagram className="socialsIcon"/></a>
                    <a href="https://x.com/diggingdeep4?s=21" target="_blank" rel="noopener noreferrer"><FaXTwitter className="socialsIcon"/></a>
                    <a href="https://wa.me/+2348070932173" target="_blank" rel="noopener noreferrer"><FaWhatsapp className="socialsIcon"/></a>
                </div>
            </div>
        </div>
    )
}
export default Footer;