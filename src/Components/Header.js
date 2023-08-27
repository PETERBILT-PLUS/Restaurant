import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'


function Header() {
    const [state, setState] = useState(false);
    const myState = state ? "navigation-phone active" : "navigation-phone";
    const navigationLink = document.querySelectorAll("#navigation-link");
    navigationLink.forEach((elem) => {
        elem.addEventListener("click", () => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        });
    })
    return (
        <header className="header">
            <h1>LOGO</h1>
            <nav className="navigation-links">
                <NavLink className={({ isActive }) => isActive ? "navigation-link-active" : "navigation-link"} to="/" id="navigation-link">Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? "navigation-link-active" : "navigation-link"} to="services" id="navigation-link">Services</NavLink>
                <NavLink className={({ isActive }) => isActive ? "navigation-link-active" : "navigation-link"} to="about" id="navigation-link">About</NavLink>
                <NavLink className={({ isActive }) => isActive ? "navigation-link-active" : "navigation-link"} to="contact" id="navigation-link">Contact</NavLink>
                <FontAwesomeIcon icon={faBars} className="speciale-icone" onClick={() => setState((state) => !state)} />
            </nav>
            <nav className={myState}>
                <NavLink className={({ isActive }) => isActive ? "navigation-link-active" : "navigation-link"} to="/">Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? "navigation-link-active" : "navigation-link"} to="services">Services</NavLink>
                <NavLink className={({ isActive }) => isActive ? "navigation-link-active" : "navigation-link"} to="about">About</NavLink>
                <NavLink className={({ isActive }) => isActive ? "navigation-link-active" : "navigation-link"} to="contact">Contact</NavLink>
            </nav>
        </header>
    )
}

export default Header;