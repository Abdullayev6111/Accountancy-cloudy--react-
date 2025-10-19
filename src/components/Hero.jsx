function Hero() {
    return (
        <section className="container">
            <div className="hero">
                <div className="hero-top">
                    <div className="hero-top-left">
                        <h1>Get your finances right</h1>
                        <h4>
                            Get your finances right with Accountancy Cloud. We
                            offer the best accounting, R&D credits and CFO
                            services for ambitious businesses who want to grow.
                        </h4>
                        <p>Switching to us is simple</p>
                        <button className="btn-hero">Talk to us</button>
                    </div>
                    <img src="/images/hero-top-img.png" alt="" />
                </div>
                <div className="hero-bottom">
                    <img src="/images/hero-bottom-img.png" alt="" />
                    <div className="hero-bottom-right">
                        <h1>
                            The best finance <br /> stack for <br />
                            entrepreneurs
                        </h1>
                        <p>
                            70% of companies switch to us from their DIY or
                            legacy system. Now, get your bookkeeping, tax prep
                            and CFO problems, solved. Complete our{" "}
                            <span>contact form</span>, and find out why 9 out of
                            10 customers recommend us.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
