import React from "react";
import Button from "../../Components/Button/Button";
import heroImg from "../../assets/Hero Image.jpg";
import servicesImg from "../../assets/sailsimage4.jpg";
import { ReactComponent as CJSnymanLogo } from "../../assets/CJSnyman.svg";
import { ReactComponent as ProfZESLogo } from "../../assets/ProfZES.svg";
import { ReactComponent as EMOREELogo } from "../../assets/EMOREE.svg";
import { AiFillClockCircle } from "react-icons/ai";
import { MdStar } from "react-icons/md";
import { GiPodiumWinner } from "react-icons/gi";

const Home = (props) => {
    return (
        <main>
            <header className="blue_background grid">
                <div className="grid_item left_text violet_background">
                    <h1>We’ll put you in the SHADE.</h1>
                    <p>
                        Custom shade sails, shade ports and canopies for every place, area and
                        situation you can think of.
                    </p>
                    <a className="footer email" href="mailto:craigsnyman200@gmail.com">
                        craigsnyman200@gmail.com
                    </a>
                </div>
                <img src={heroImg} alt="Hero sails" width="100%" />
            </header>
            <section className="light_violet_background grid">
                <img src={servicesImg} alt="Services sails" width="80%" />
                <div className="grid_item right_text">
                    <h2>From Custom Shade Sails to Vehicle Shade Ports. We got you covered.</h2>
                    <p>
                        Our Custom Shade Sails is perfect for most applications and comes in
                        multiple colors. We also provide Vehicle Shade Ports to protect your
                        vehicles, Tension Membrane Structures for lightweight energy conserving
                        roofing systems and Stretch Tents for that awkward shaped areas.
                    </p>
                    <Button
                        className="blue_background"
                        children="Services & Products"
                        id="main_services_button"
                        onClick={() => props.handlePageChange("services")}
                    ></Button>
                </div>
            </section>
            <section className="light_blue_background centered_elements">
                <h2>Why Us?</h2>
                <div className="grid_3">
                    <div className="grid_item_3">
                        <h3>World Class Quality</h3>
                        <MdStar size="4rem"></MdStar>
                    </div>
                    <div className="grid_item_3">
                        <h3>2 Decades Experience</h3>
                        <AiFillClockCircle size="4rem"></AiFillClockCircle>
                    </div>
                    <div className="grid_item_3">
                        <h3>Industry Leaders</h3>
                        <GiPodiumWinner size="4rem"></GiPodiumWinner>
                    </div>
                </div>
            </section>
            <section className="light_violet_background centered_elements">
                <h2>Our Clients</h2>
                <div className="grid_3">
                    <figure className="grid_item_3 client">
                        <ProfZESLogo />
                    </figure>
                    <figure className="grid_item_3 client">
                        <CJSnymanLogo />
                    </figure>
                    <figure className="grid_item_3 client">
                        <EMOREELogo />
                    </figure>
                </div>
            </section>
        </main>
    );
};

export default Home;
