import shadeSails from "../../assets/sailsimage10.jpg";
import vehicleShadePorts from "../../assets/sailsimage6.jpg";
import tensonMembranes from "../../assets/sailsimage5.jpg";
import stretchTent from "../../assets/sailsimage1.jpg";

const Services = () => {
    return (
        <main>
            <h2 className="blue_background">SERVICES & PRODUCTS</h2>
            <section className="light_violet_background grid">
                <div className="grid_item left_text">
                    <h3>Shade Sails</h3>
                    <p>
                        The advances that has been made with the fabric allows us to install the
                        sails without the support of structural steel. This make the product safer
                        and provide an open space below the sails.
                    </p>
                    <p>
                        Being customizable the shade sails can be adapted to fit any area like a
                        glove.
                    </p>
                </div>
                <img src={shadeSails} alt="Shade Sail" width="80%" />
            </section>
            <section className="light_blue_background grid">
                <img src={vehicleShadePorts} alt="Vehicle Shade Ports" width="80%" />
                <div className="grid_item right_text">
                    <h3>Vehicle Shade Ports</h3>
                    <p>
                        Shade Ports are perfect to protect your vehicle against the weather. It can
                        easily be installed for single vehicles or massive parking lots for
                        thousands of vehicles.
                    </p>
                </div>
            </section>
            <section className="light_violet_background grid">
                <div className="grid_item left_text">
                    <h3>Tension Membranes</h3>
                    <p>
                        The fabric used for Tension Membranes is incredibly strong. It can easily
                        handle any load that is associated with roofs. The fabric is also able to
                        withstand extreme cold and heat while being fire resistant and can easily be
                        cleaned with just a rinse with water.
                    </p>
                </div>
                <img src={tensonMembranes} alt="Tension Membranes" width="80%" />
            </section>
            <section className="light_blue_background grid">
                <img src={stretchTent} alt="Waterproof Stretch Tents" width="80%" />
                <div className="grid_item right_text">
                    <h3>Waterproof Stretch Tents</h3>
                    <p>
                        This product is perfect for displeasing outdoor spaces into usable space.
                        The product uphold to international safety standards while being easily
                        branded and is machine washable
                    </p>
                </div>
            </section>
        </main>
    );
};

export default Services;
