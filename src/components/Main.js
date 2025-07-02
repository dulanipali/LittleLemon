import greekSalad from '../assests/greek salad.jpg'
import heroImg from '../assests/restauranfood.jpg';
import teamImg from '../assests/Mario and Adrian A.jpg';
import restImg from '../assests/restaurant.jpg';
import deliveryLogo from '../assests/delivery.jpg';

function Main() {
    return (
        <main className="container">
            {/* Hero Section */}
            <section id="home">
                <div>
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button>Reserve a Table</button>
                </div>
                <img src={heroImg} alt="Restaurant view" />
            </section>

            {/* Highlights Section */}
            <section id="menu">
                <div>
                    <h2>This weeks specials!</h2>
                    <button>Online Menu</button>
                </div>
                <div className="specials">
                    {/* Repeat for each special */}
                    <article>
                        <img src={greekSalad} alt="Greek Salad" />
                        <div>
                            <h3>Greek Salad</h3>
                            <h4>$12.99</h4>
                        </div>
                        <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with chopped tomatoes, oregano and fresh bazil.</p>
                        <button>Order Delivery
                            <img src={deliveryLogo}></img>
                        </button>
                    </article>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials">
                <h2>Testimonials</h2>
                {/* Repeat testimonial card */}
                <div>
                    <p>⭐⭐⭐⭐</p>
                    <img src="/path-to-user.jpg" alt="User Profile" />
                    <p>“Great service!”</p>
                </div>
            </section>

            {/* About Section */}
            <section id="about">
                <div>
                    <h2>Little Lemon - Chicago</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div>
                    <img src={teamImg} alt="Adrian" />
                    <img src={restImg} alt="Mario" />
                </div>
            </section>
        </main>
    )
}

export default Main;