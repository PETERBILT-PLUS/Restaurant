import { NavLink } from "react-router-dom";

function Footer() {
    const navigationLink = document.querySelectorAll("#navigation-link");
    navigationLink.forEach((elem) => {
        elem.addEventListener("click", () => {
            window.scrollTo({top: 0, left: 0, behavior: "smooth"});
        })
    })
    return (
        <footer>
            <h3>Name OR logo etc<br />Follow Us</h3>
            <nav>
                <NavLink className={({ isActive }) => isActive ? "navigation-link-active" : "navigation-link"} to="/" id="navigation-link">Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? "navigation-link-active" : "navigation-link"} to="services" id="navigation-link">Services</NavLink>
                <NavLink className={({ isActive }) => isActive ? "navigation-link-active" : "navigation-link"} to="about" id="navigation-link">About</NavLink>
                <NavLink className={({ isActive }) => isActive ? "navigation-link-active" : "navigation-link"} to="contact" id="navigation-link">Contact</NavLink>
            </nav>
            <h4>All right are saved &copy;</h4>
        </footer>
    );
}

export default Footer;