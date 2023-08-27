import React from "react";
import "../styles/Contact.css";
import "../styles/ContactResponsive.css";

function Contact() {
    return (
        <>
            <section className="contact-section">
                <h2>Contact Us</h2>
                <h3>We can Reserver A table For You.</h3>
                <a href="#reservation-section"><button id="table-button">Take A Table</button></a>
            </section>
            <section className="reservation-section" id="reservation-section">
                <h4>Reserve your Table</h4>
                <form>
                    <input type="text" placeholder="Name" id="name" />
                    <input type="tel" placeholder="Phone" id="phone" />
                    <textarea id="desc" placeholder="Type Of Services time etc..."></textarea>
                    <input type="submit" value="Send" />
                </form>
            </section>
        </>
    );
}

export default Contact;