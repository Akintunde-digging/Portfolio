import { useState } from "react";
import "./header.css";
import { LuX } from "react-icons/lu";
import { RiMenu3Fill } from "react-icons/ri";

function Header(){
    const [menuOpen, setMenuOpen] = useState(false);
    return(
        <header>
            <nav className="navbar">
                <div className="akintunde"><a href="#home">AKINTUNDE</a></div>
                <div className={`homeToContact ${menuOpen ? "open" : ""}`} id="navMenu">
                    <ul>
                        <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
                        <li><a href="#about" onClick={() => setMenuOpen(false)}>About Me</a></li>
                        <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
                        <li><a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a></li>
                        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
                    </ul>
                </div>
                <a href="#contact" className="navContactButtonLink"><button className="navContactButton">Connect With Me</button></a>
                <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <LuX /> : <RiMenu3Fill />}</button>
            </nav>
        </header>
    )
}

export default Header;