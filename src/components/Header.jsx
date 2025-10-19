function Header() {
    return (
        <section className="container">
            <header>
                <img src="/images/header-logo.png" alt="" />
                <div className="navbar">
                    <div className="navbar-content">
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">How it works</a>
                            </li>
                            <li>
                                <a href="#">What we do</a>
                            </li>
                            <li>
                                <a href="#">Who we help</a>
                            </li>
                            <li>
                                <a href="#">Resources</a>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-buttons">
                        <button className="btn-login">Login</button>
                        <button className="btn-exp">Talk to an Expert</button>
                    </div>
                </div>
            </header>
        </section>
    );
}

export default Header;
