import React from "react"
import "../styles/About.css";

function About() {
    return (
        <section className="first-section about-section">
            <h2>About Us</h2>
            <div className="about-infos">
                <div className="about-items">
                    <h3>E-mail</h3>
                    <h4>1234Restaurant@gmail.com</h4>
                </div>
                <div className="about-items">
                    <h3>Phone</h3>
                    <h4>+123 05 111 222 333</h4>
                </div>
                <div className="about-items">
                    <h3>Adress</h3>
                    <h4>1234 Street Name City, AA 99999</h4>
                </div>
            </div>
        </section>
    );
}

export default About;