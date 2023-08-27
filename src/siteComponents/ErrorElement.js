import { Link } from "react-router-dom";

function ErrorElement() {
    document.body.style = { backgroundColor: "var(--thirtColor)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "100%", height: "100vh" }
    return (
        <div className="error">
            <div className="error-page">
                <h2>404 Page Not Found</h2>
                <Link to="/" className="back"><button>Back To Home</button></Link>
            </div>
        </div>
    );
}

export default ErrorElement;