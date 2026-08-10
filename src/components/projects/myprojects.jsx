import "./myprojects.css";
import movieImg from "../../assets/moviecartImg.png";

function MyProjects(){
    return(
        <div className="myProjects" id="portfolio">
            <h1>My Projects</h1>
            <div className="allProjects">
                <div className="eachProjects">
                    <a href="https://yesummitafrica.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <div className="imgDiv"><img src="https://res.cloudinary.com/ddehh0jdv/image/upload/v1786366619/Screenshot_113_hhiiss.png" /></div>
                        <div className="projectText">
                            <h3>Grays Capital</h3>
                            <p>Grays Capital is a modern, responsive corporate website for Grays Capital, showcasing its deal facilitation, capital advisory, investment readiness, portfolio, and investment opportunities across Africa.</p>
                        </div>
                    </a>
                </div>
                <div className="eachProjects">
                    <a href="https://yesummitafrica.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <div className="imgDiv"><img src="https://res.cloudinary.com/ddehh0jdv/image/upload/v1780331330/yesImg_hnxwaj.png" alt="YES image" /></div>
                        <div className="projectText">
                            <h3>YES</h3>
                            <p>Youth Enterpreneurship Summit (YES) is a freelancing landing page project made with love for our client. The summit is to empower Africa's next generation of builders, Innovators and leaders.</p>
                        </div>
                    </a>
                </div>
                <div className="eachProjects">
                    <a href="https://akintunde-movie-cart.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <div className="imgDiv"><img src="https://res.cloudinary.com/ddehh0jdv/image/upload/v1778591291/moviecartImg_nvxjpg.png" alt="movie cart image" /></div>
                        <div className="projectText">
                            <h3>Movie Cart</h3>
                            <p>Built with react.js, it uses an api that fetches the latest movie and featured movies at the very moment, you can add them to cart, view their details and watch their trailers.</p>
                        </div>
                    </a>
                </div>
                <div className="eachProjects" >
                    <a href="https://thehospitalityamb.com/" target="_blank" rel="noopener noreferrer">
                        <div className="imgDiv"><img src="https://res.cloudinary.com/ddehh0jdv/image/upload/v1778711326/thaImg_pvu4bl.png" alt="THA image" /></div>
                        <div className="projectText">
                            <h3>The Hospitality Ambassador</h3>
                            <p>The hospitality ambassador help hospitality brands grow, it's a site for everything hospitality, from reservation to food, culture, event, entertainments and so on.</p>
                        </div>
                    </a>
                </div>
                <div className="eachProjects">
                    <a href="https://akintunde-kudger.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <div className="imgDiv"><img src="https://res.cloudinary.com/ddehh0jdv/image/upload/v1780332140/kudgerImg_bb67oc.png" alt="movie cart image" /></div>
                        <div className="projectText">
                            <h3>Kudger</h3>
                            <p>Kudger is an eNaira offline access technology for every Nigerian.</p>
                        </div>
                    </a>
                </div>
                <div className="eachProjects">
                    <a href="https://blackneon.wuaze.com/" target="_blank" rel="noopener noreferrer">
                        <div className="imgDiv"><img src="https://res.cloudinary.com/ddehh0jdv/image/upload/v1778597414/blackneonImg_aghtrs.png" alt="Black Neon Image" /></div>
                        <div className="projectText">
                            <h3>Black Neon</h3>
                            <p>Black Neon Fashion is a responsive website where users can go through available clothes they want to purchase and add them to cart for whenever they are ready to make purchase</p>
                        </div>
                    </a>
                </div>
                <div className="eachProjects">
                    <a href="https://thegrandeurhotel.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <div className="imgDiv"><img src="https://res.cloudinary.com/ddehh0jdv/image/upload/v1778599828/thegrandeurImg_vtyez8.png" alt="The Grandeur image" /></div>
                        <div className="projectText">
                            <h3>The Grandeur</h3>
                            <p>The Grandeur is a hotel booking site where you can pick from avalable rooms located at the heart of lagosat very affordable prices and make reservations at your convenient time.</p>
                        </div>
                    </a>
                </div>
                <div className="eachProjects">
                    <a href="https://akintunde-digging.github.io/pricing-card-frontend-mentor-challenge/">
                        <div className="imgDiv"><img src="https://res.cloudinary.com/ddehh0jdv/image/upload/v1778601022/Pricing_card_axpaue.png" alt="Pricing Card image" /></div>
                        <div className="projectText">
                            <h3>Pricing Card</h3>
                            <p>This is a responsive pricing card challenge. It was designed just to check responsivesness on all screen sizes</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default MyProjects;