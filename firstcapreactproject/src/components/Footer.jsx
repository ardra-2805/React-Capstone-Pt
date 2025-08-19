import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <img src="Logo.svg" alt="Logo" className="logo-img" />
                <h3>LITTLE LEMON</h3>
            </div>

            <div className="sitemap">
                <h4>Sitemap</h4>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/reservations">Reservations</Link></li>
                    <li><Link to="/order-online">Order Online</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </div>

            <div className="contact">
                <h4>Contact Us</h4>
                <p>678 Pisa Ave, Chicago, IL 60611</p>
                <p>(312) 593-2744</p>
                <p>customer@littlelemon.com</p>
            </div>
        </footer>
    );
}

export default Footer;