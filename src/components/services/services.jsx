import "./services.css";

function Services(){
    return(
        <div className="servicesSection" id="services">
            <h1>My Services</h1>
            <div className="allServices">
                <div className="eachServices">
                    <h3>01</h3>
                    <h2>Website Design</h2>
                    <p>Creating visually appealing, user-friendly and scalable websites tailored to client needs.</p>
                </div>
                <div className="eachServices">
                    <h3>02</h3>
                    <h2>UI/UX Optimization</h2>
                    <p>Improving the usability and overall user experience of websites.</p>
                </div>
                <div className="eachServices">
                    <h3>03</h3>
                    <h2>Responsive Development</h2>
                    <div><p>Ensuring websites look great on all devices, from desktops to smartphones.</p></div>
                </div>
                <div className="eachServices">
                    <h3>04</h3>
                    <h2>SEO Integration</h2>
                    <p>Implementing best practices for search engine optimization to improve site visibility.</p>
                </div>
            </div>
        </div>
    )
}
export default Services;