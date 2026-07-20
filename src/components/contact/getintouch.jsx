import "./getintouch.css";
import { LuMail, LuPhone, LuCopy, LuCheck } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function GetInTouch(){
const form = useRef();
const [loading, setLoading] = useState(false);
const [copied, setCopied] = useState(false);

const handleCopy = () => {
    navigator.clipboard.writeText("isaacakintunde11@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      'service_156vl2b',
      'template_xvzyifb',
      form.current,
      'TkbsoW0Tqo5U0s_Rc'
    )
    .then(() => {
      toast.success('Message sent successfully!');
      e.target.reset();
      setLoading(false);
    })
    .catch(() => {
      toast.error('Something went wrong, try again.');
      setLoading(false);
    });
  };

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
                            <button onClick={handleCopy} title="Copy email" style={{ background: "none", border: "none", cursor: "pointer", padding: "2px", display: "flex", alignItems: "center", color: copied ? "green" : "inherit",}}> {copied ? <LuCheck size={14} /> : <LuCopy size={14} />}</button>
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
                            <span>Soluyi, Gbagada, lagos.</span>
                        </div>
                    </div>
                </div>
                <form action="" className="form" ref={form} onSubmit={sendEmail}>
                    <label>Your Name</label>
                    <input type="text" placeholder="Enter your name" name="name" required/>
                    <label>Your Email</label>
                    <input type="email" placeholder="Enter your email" name="email" required/>
                    <label>Write Your Message</label>
                    <textarea name="message" id="" rows="9" placeholder="Enter your message" required></textarea>
                    <button type="submit" disabled={loading}>{loading ? 'Submitting...' : 'Submit Now'}</button>
                    <ToastContainer />
                </form>
            </div>
        </div>
    )
}
export default GetInTouch;