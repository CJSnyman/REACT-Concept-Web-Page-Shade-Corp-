import Button from "../Button/Button";
import { ReactComponent as WebLogo } from "../../assets/websiteLogo.svg";

const Footer = (props) => {
    return (
        <footer className="centered_elements">
            <section className="violet_background grid_3">
                <WebLogo />
                <div className="footer_nav_buttons">
                    <Button
                        className="secondary_nav_button blue_background"
                        children="Home"
                        id="secondary_home_nav_button"
                        onClick={() => props.handlePageChange("home")}
                    ></Button>
                    <Button
                        className="secondary_nav_button"
                        children="Services & Products"
                        id="secondary_services_nav_button"
                        onClick={() => props.handlePageChange("services")}
                    ></Button>
                    <Button
                        className="secondary_nav_button"
                        children="About"
                        id="secondary_about_nav_button"
                        onClick={() => props.handlePageChange("about")}
                    ></Button>
                </div>
                <div>
                    <a className="footer email" href="mailto:craigsnyman200@gmail.com">
                        craigsnyman200@gmail.com
                    </a>
                </div>
            </section>
            <p className="blue_background">
                This is a Concept Project.
                <br />
                Created by <strong>Craig Snyman</strong>
            </p>
        </footer>
    );
};

export default Footer;
