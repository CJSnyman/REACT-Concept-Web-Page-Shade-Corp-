import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import About from "./Pages/About/About";
import Footer from "./Components/Footer/Footer";

function App() {
    const [activePage, setActivePage] = useState("home");

    window.onscroll = () => {
        document.getElementById("primary_menu").setAttribute("data-invisible", "true");
        document.getElementById("burger_menu").setAttribute("data-invisible", "true");
    };
    window.onclick = (e) => {
        if (!document.getElementById("menu").contains(e.target)) {
            document.getElementById("primary_menu").setAttribute("data-invisible", "true");
            document.getElementById("burger_menu").setAttribute("data-invisible", "true");
        }
    };

    const handlePageChange = (newPage) => {
        window.scrollTo(0, 0);
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
            return <Home handlePageChange={handlePageChange}></Home>;
        } else if (page === "services") {
            return <Services></Services>;
        } else if (page === "about") {
            return <About></About>;
        }
    };

    return (
        <div className="App">
            <Navbar handlePageChange={handlePageChange}></Navbar>
            {pageToShow(activePage)}
            <Footer handlePageChange={handlePageChange}></Footer>
        </div>
    );
}

export default App;
