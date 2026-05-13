import "./getintouch.css";
import { LuMail, LuPhone } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

function GetInTouch(){
    return(
        <div className="getInTouch" id="contact">
            <h1>Get in Touch</h1>
            <div className="letsTalkAndForm">
                <div className="letsTalk">
                    <h3>Let's Talk</h3>
                    <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact me anytime.</p>
                    <div className="contactDetails">
                        <div className="eachContactDetails">
                            <LuMail className="contactIcon"/>
                            <span><a href="mailto:isaacakintunde11@gmail.com" target="_blank">isaacakintunde11@gmail.com</a></span>
                        </div>
                        <div className="eachContactDetails">
                            <LuPhone className="contactIcon"/>
                            <span><a href="tel:+2348070932173" target="_blank">08070932173</a></span>
                        </div>
                        <div className="eachContactDetails">
                            <FaWhatsapp className="contactIcon"/>
                            <span><a href="https://wa.me/+2348070932173" target="_blank">+2348070932173</a></span>
                        </div>
                        <div className="eachContactDetails">
                            <IoLocationOutline className="contactIcon"/>
                            <span>5, Adekunle Osomo street, Soluyi, Gbagada, lagos.</span>
                        </div>
                    </div>
                </div>
                <form action="" className="form">
                    <label>Your Name</label>
                    <input type="text" placeholder="Enter your name" name="name" required/>
                    <label>Your Email</label>
                    <input type="email" placeholder="Enter your email" name="email" required/>
                    <label>Write Your Message</label>
                    <textarea name="message" id="" rows="9" placeholder="Enter your message"></textarea>
                    <button type="submit">Submit Now</button>
                </form>
            </div>
        </div>
    )
}
export default GetInTouch;