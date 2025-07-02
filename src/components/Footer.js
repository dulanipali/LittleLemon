import logo from "../assests/logo2.png"
function Footer() {
    return (
        <footer>
            <div>
                <img src={logo} alt="Little Lemon Logo"></img>

            </div>
            <div>
                <h3>Doormat Navigation</h3>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#reservations">Reservations</a></li>
                    <li><a href="#order">Order Online</a></li>
                    <li><a href="#login">Login</a></li>
                </ul>
            </div>
            <div>
                <h3>Contact</h3>
                <p>Address</p>
                <p>Phone number</p>
                <p>Email</p>
            </div>
            <div>
                <h3>Social Media Links</h3>
                <p>Facebook</p>
                <p>Instagram</p>
                <p>Email</p>
            </div>
            <p>&copy; 2025 Little Lemon. All rights reserved.</p>
        </footer>
    )
}

export default Footer;