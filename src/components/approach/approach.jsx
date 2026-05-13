import "./approach.css";
import { FaGreaterThan } from "react-icons/fa";
import { LuCodeXml } from "react-icons/lu";
import planningBg from "../../assets/planning.jpg";
import developmentBg from "../../assets/development.jpg";
import launchBg from "../../assets/launch.jpg";



function MyApproach(){
    return(
        <div className="myApproach">
            <h1>My Approach</h1>
            <div className="allApproaches">
                <div className="eachApproaches">
                    <span className="mainText"><LuCodeXml /></span>
                    <span className="hoverText" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${planningBg})`, backgroundSize: "cover", backgroundPosition: "center"}}>Planning & Strategy</span>
                </div>
                <div className="eachApproaches">
                    <span className="mainText"><LuCodeXml /></span>
                    <span className="hoverText" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${developmentBg})`, backgroundSize: "cover", backgroundPosition: "center"}}> Development & Updates</span>
                </div>
                <div className="eachApproaches">
                    <span className="mainText"><LuCodeXml /></span>
                    <span className="hoverText" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${launchBg})`, backgroundSize: "cover", backgroundPosition: "center"}}>Final Checks & Launch</span>
                </div>
            </div>
        </div>
    )
}

export default MyApproach;