import Button from "../Button/Button";
import { ReactComponent as WebLogo } from "../../assets/websiteLogo.svg";
import { FiMenu } from "react-icons/fi";

const Navbar = (props) => {
    const showAndHideMenu = (e) => {
        document.getElementById("primary_menu").toggleAttribute("data-invisible");
        document.getElementById("burger_menu").toggleAttribute("data-invisible");
    };

    const hideMenu = () => {
        document.getElementById("primary_menu").setAttribute("data-invisible", "true");
        document.getElementById("burger_menu").setAttribute("data-invisible", "true");
    };

    return (
        <nav className="violet_background" aria-label="primary_navbar">
            <WebLogo />
            <div id="menu">
                <button id="burger_menu" onClick={(e) => showAndHideMenu(e)} data-invisible>
                    <FiMenu size="2rem" />
                </button>
                <section id="primary_menu" className="primary_nav_buttons" data-invisible>
                    <Button
                        className="primary_nav_button blue_background"
                        children="Home"
                        id="primary_home_nav_button"
                        onClick={() => {
                            hideMenu();
                            props.handlePageChange("home");
                        }}
                    ></Button>
                    <Button
                        className="primary_nav_button"
                        children="Services & Products"
                        id="primary_services_nav_button"
                        onClick={() => {
                            hideMenu();
                            props.handlePageChange("services");
                        }}
                    ></Button>
                    <Button
                        className="primary_nav_button"
                        children="About"
                        id="primary_about_nav_button"
                        onClick={() => {
                            hideMenu();
                            props.handlePageChange("about");
                        }}
                    ></Button>
                </section>
            </div>
        </nav>
    );
};

export default Navbar;
