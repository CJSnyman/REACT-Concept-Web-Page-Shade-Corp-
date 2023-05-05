import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import About from "./Pages/About/About";
import Footer from "./Components/Footer/Footer";
import logo from "./assets/ShadeCorp.png";

function App() {
    const [activePage, setActivePage] = useState("home");

    const handlePageChange = (newPage) => {
        document
            .getElementById(`primary_${activePage}_nav_button`)
            .classList.remove("blue_background");
        document
            .getElementById(`secondary_${activePage}_nav_button`)
            .classList.remove("blue_background");
        document.getElementById(`primary_${newPage}_nav_button`).classList.add("blue_background");
        document.getElementById(`secondary_${newPage}_nav_button`).classList.add("blue_background");
        setActivePage(newPage);
    };

    const pageToShow = (page) => {
        if (page === "home") {
            return <Home></Home>;
        } else if (page === "services") {
            return <Services></Services>;
        } else if (page === "about") {
            return <About></About>;
        }
    };

    return (
        <div className="App">
            <Navbar logo={logo} handlePageChange={handlePageChange}></Navbar>
            {pageToShow(activePage)}
            <Footer logo={logo} handlePageChange={handlePageChange}></Footer>
        </div>
    );
}

export default App;
