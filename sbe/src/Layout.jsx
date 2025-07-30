import React from "react";
import { Outlet } from "react-router";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
import bgImage from "./assets/bg.jpg";

const Layout = () => {
    return (
        <div
            className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed scroll-smooth"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bgImage})`
            }}
        >
            <Header />
            <Outlet />
            <ScrollToTop />
        </div>
    );
};

export default Layout;
