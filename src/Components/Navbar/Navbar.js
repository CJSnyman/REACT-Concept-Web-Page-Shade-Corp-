import Button from "../Button/Button";

const Navbar = (props) => {
    return (
        <nav className="violet_background" aria-label="primary_navbar">
            <img id="nav_logo" src={props.logo} alt="Shade Corp logo" />
            <section className="primary_nav_buttons">
                <Button
                    className="primary_nav_button blue_background"
                    children="Home"
                    id="primary_home_nav_button"
                    onClick={() => props.handlePageChange("home")}
                ></Button>
                <Button
                    className="primary_nav_button"
                    children="Services & Products"
                    id="primary_services_nav_button"
                    onClick={() => props.handlePageChange("services")}
                ></Button>
                <Button
                    className="primary_nav_button"
                    children="About"
                    id="primary_about_nav_button"
                    onClick={() => props.handlePageChange("about")}
                ></Button>
            </section>
        </nav>
    );
};

export default Navbar;
