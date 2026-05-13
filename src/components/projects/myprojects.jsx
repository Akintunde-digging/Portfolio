import "./myprojects.css";
import movieImg from "../../assets/moviecartImg.png";

function MyProjects(){
    return(
        <div className="myProjects" id="portfolio">
            <h1>My Projects</h1>
            <div className="allProjects">
                <div className="eachProjects">
                    <a href="https://akintunde-movie-cart.vercel.app/">
                        <div className="imgDiv"><img src="https://res.cloudinary.com/ddehh0jdv/image/upload/v1778591291/moviecartImg_nvxjpg.png" alt="" /></div>
                        <div className="projectText">
                            <h3>Movie Cart</h3>
                            <p>Built with react.js, it uses an api that fetches the latest movie and featured movies at the very moment, you can add them to cart, view their details and watch their trailers.</p>
                        </div>
                    </a>
                </div>
                <div className="eachProjects">
                    <a href="https://thehospitalityamb.com/">
                        <div className="imgDiv"><img src="https://res.cloudinary.com/ddehh0jdv/image/upload/v1778595334/thaImg_yy49bw.png" alt="" /></div>
                        <div className="projectText">
                            <h3>The Hospitality Ambassador</h3>
                            <p>The hospitality ambassador help hospitality brands grow, it's a site for everything hospitality, from reservation to food, culture, event, entertainments and so on.</p>
                        </div>
                    </a>
                </div>
                <div className="eachProjects">
                    <a href="https://blackneon.wuaze.com/">
                        <div className="imgDiv"><img src="https://res.cloudinary.com/ddehh0jdv/image/upload/v1778597414/blackneonImg_aghtrs.png" alt="" /></div>
                        <div className="projectText">
                            <h3>Black Neon</h3>
                            <p>Black Neon Fashion is a responsive website where users can go through available clothes they want to purchase and add them to cart for whenever they are ready to make purchase</p>
                        </div>
                    </a>
                </div>
                <div className="eachProjects">
                    <a href="https://thegrandeurhotel.vercel.app/">
                        <div className="imgDiv"><img src="https://res.cloudinary.com/ddehh0jdv/image/upload/v1778599828/thegrandeurImg_vtyez8.png" alt="" /></div>
                        <div className="projectText">
                            <h3>The Grandeur</h3>
                            <p>The Grandeur is a hotel booking site where you can pick from avalable rooms located at the heart of lagosat very affordable prices and make reservations at your convenient time.</p>
                        </div>
                    </a>
                </div>
                <div className="eachProjects">
                    <a href="https://akintunde-digging.github.io/pricing-card-frontend-mentor-challenge/">
                        <div className="imgDiv"><img src="https://res.cloudinary.com/ddehh0jdv/image/upload/v1778601022/Pricing_card_axpaue.png" alt="" /></div>
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