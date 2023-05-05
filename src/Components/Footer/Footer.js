import Button from "../Button/Button";

const Footer = (props) => {
    return (
        <footer className="centered_elements">
            <section className="violet_background grid_3">
                <img src={props.logo} alt="Footer Shade Corp Logo" className="grid_item_3" />
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
                <a className="footer email" href="mailto:craigsnyman200@gmail.com">
                    craigsnyman200@gmail.com
                </a>
            </section>
            <p className="blue_background">Created by Craig Snyman</p>
        </footer>
    );
};

export default Footer;
