import "./herosection.css";
import { LuArrowDownRight, LuArrowRight  } from "react-icons/lu";
import CountUp from "react-countup";
import profile from "../../assets/launch.jpg";
import resumePdf from "../../assets/Akintunde, Isaac 'Tobi CV..pdf";

function HeroSection(){
    return(
        
        <div className="heroSection" id="home" style={{ backgroundImage: `url(${profile})`, backgroundSize: "cover", backgroundPosition: "center"}}>
            <div className="heroContents">
                <div className="locationAndCareer">
                    <span className="location">BASED IN NIGERIA. AVAILABLE GLOBALLY</span>
                    <div className="career"><span className="dash"></span> Frontend Developer</div>
                </div>
                <div className="h1p">
                    <h1>Akintunde Isaac,</h1>
                    <p>I am a passionate Frontend Developer with over 2 years of hands-on experience building responsive and user-focused web applications. I specialize in creating modern, scalable interfaces that deliver seamless digital experiences across industries.</p>
                </div>
                <div className="heroButtons">
                    <a href="#contact"><button className="connectButton">Connect With Me<LuArrowDownRight className="arrowDownAndRight"/></button></a>
                    <a href={resumePdf} target="_blank"><button className="resumeButton">My Resume<LuArrowRight className="arrowDownAndRight"/></button></a>
                </div>
                <div className="statsAndScroll">
                    <div className="stats">
                        <div className="stat">
                            <h2>2+</h2>
                            <p>YEARS EXP.</p>
                        </div>
                        <div className="stat">
                            <h2>5+</h2>
                            <p>PROJECTS</p>
                        </div>
                        <div className="stat">
                            <h2>5+</h2>
                            <p>TECHNOLOGIES</p>
                        </div>
                        <div className="stat">
                            <h2>100%</h2>
                            <p>COMMITMENT</p>
                        </div>
                    </div>
                    <div className="scroll">
                        <p>SCROLL</p>
                        <div className="bar"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HeroSection;