import "./aboutme.css";
import htmlLogo from "../../assets/HTML5_logo_and_wordmark.svg";
import cssLogo from "../../assets/css3-original.svg";
import javaScriptLogo from "../../assets/JavaScript-logo.png";
import reactLogo from "../../assets/React-icon.svg";
import gitLogo from "../../assets/Git-logo.svg";
import gitHubLogo from "../../assets/Octicons-mark-github.svg";
import vercelLogo from "../../assets/Vercel_logo_black.svg";







function AboutMe(){
    return(
        <div className="aboutMeSection" id="about">
            <div className="titleAndP">
                <h1>About Me</h1>
                <p>I am a Frontend Developer with experience building robust, scalable, and user-friendly web applications. Skilled in modern frontend technologies including JavaScript, React.js, WordPress. I focus on creating responsive interfaces and seamless digital experiences. Currently working at Greystone and Ink, where I develop and maintain modern web solutions across various projects.</p>
            </div>
            <div className="stacksAndPractices">
                <div className="stacks">
                    <div className="stackAndLine">
                        <div className="stackLine"></div>
                        <span>Stacks</span>
                        <div className="stackLine"></div>
                    </div>
                    <div className="stacklogoAndName">
                        <div className="eachStackLogoAndName">
                            <img src={htmlLogo} alt="HTML5" />
                            <span>HTML</span>
                        </div>
                        <div className="eachStackLogoAndName">
                            <img src={cssLogo} alt="css3" />
                            <span>CSS</span>
                        </div>
                        <div className="eachStackLogoAndName">
                            <img src={javaScriptLogo} alt="javaScriptLogo" />
                            <span>JavaScript</span>
                        </div>
                        <div className="eachStackLogoAndName">
                            <img src={reactLogo} alt="reactLogo" />
                            <span>React.js</span>
                        </div>              
                    </div>
                </div>

                <div className="practices">
                    <div className="practicesAndLine">
                        <div className="practiceLine"></div>
                        <span>Development Practices</span>
                        <div className="practiceLine"></div>
                    </div>
                    <div className="practicesLogoAndName">
                        <div className="eachPracticesLogoAndName">
                            <img src={gitLogo} alt="gitLogo" />
                            <span>Git</span>
                        </div>
                        <div className="eachPracticesLogoAndName">
                            <img src={gitHubLogo} alt="gitHubLogo" />
                            <span>Github</span>
                        </div>
                        <div className="eachPracticesLogoAndName">
                            <img src={vercelLogo} alt="vercelLogo" />
                            <span>Vercel</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default AboutMe;