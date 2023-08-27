import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <section className="first-section home-section">
                <h2>WELCOME TO OUR STORE</h2>
                <h3>We Made Awesome Dishes and Fast-Food<br />Burger And pizza etc...</h3>
                <div className="buttons-division">
                    <button>Visit Store</button>
                    <button>Make An Order</button>
                </div>
            </section>

            <section className="menu-section">
                <h2>Our Menu Block</h2>
                <div className="menu-container">
                    <Link className="menu-item">
                        <img src="https://www.eatthis.com/wp-content/uploads/sites/4/2022/04/burger-fries.jpg?quality=82&strip=all" alt="burger" />
                        <h4>Burger</h4>
                    </Link>
                    <Link className="menu-item">
                        <img src="https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg" alt="pizza" />
                        <h4>Pizza</h4>
                    </Link>
                </div>
            </section>

            <section className="website-info">
                <div className="website-detail">
                    <h5>phone: <strong>+0 111 222 333 1423</strong></h5>
                    <h5>e-mail: <strong>thisWebsite@gmail.com</strong></h5>
                    <h5>Adress: <strong>1234 Street Name City, AA 99999</strong></h5>
                </div>
                <div className="website-detail">
                    <h5>Opening Hours</h5>
                    <div className="website-datail-day">
                        <h5>Monday</h5>
                        <h6>8:00 - 22:00</h6>
                        <hr />
                    </div>
                    <div className="website-datail-day">
                        <h5>Tuesday</h5>
                        <h6>8:00 - 22:00</h6>
                        <hr />
                    </div>
                    <div className="website-datail-day">
                        <h5>Wednesday</h5>
                        <h6>8:00 - 22:00</h6>
                        <hr />
                    </div>
                    <div className="website-datail-day">
                        <h5>Thursday</h5>
                        <h6>8:00 - 22:00</h6>
                        <hr />
                    </div>
                    <div className="website-datail-day">
                        <h5>Friday</h5>
                        <h6>8:00 - 11:30</h6>
                        <hr />
                    </div>
                    <div className="website-datail-day">
                        <h5>Saturday</h5>
                        <h6>8:00 - 12:00</h6>
                        <hr />
                    </div>
                    <div className="website-datail-day">
                        <h5>Monday</h5>
                        <h6>Closed</h6>
                        <hr />
                    </div>
                </div>
                <div className="website-detail">
                    <h5>Contact Us</h5>
                    <form id="website-detail-form">
                        <input type="text" placeholder="Name" />
                        <input type="tel" placeholder="Phone" />
                        <textarea placeholder="Message or Comment"></textarea>
                        <input type="submit" value="Send" />
                    </form>
                </div>
            </section>
        </>
    );
}

export default Home;