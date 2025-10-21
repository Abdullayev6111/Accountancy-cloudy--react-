function Switch() {
    return (
        <section className="container">
            <div className="switch">
                <h1>Why Switch?</h1>
                <div className="switch-content">
                    <div
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        className="switch-content-card"
                    >
                        <img src="/images/switch-img1.png" alt="" />
                        <h2>Powerful software</h2>
                        <p>
                            Included in our service, each customer gets in-house
                            software to access live{" "}
                            <span>financial dashboards</span> and real-time
                            management reports.
                        </p>
                    </div>
                    <div
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        className="switch-content-card"
                    >
                        <img src="/images/switch-img2.png" alt="" />
                        <h2>Track cashflow</h2>
                        <p>
                            Stay on top of your working capital,{" "}
                            <span>taxes</span>, and cashflow, to ensure your
                            business is performing at its best.
                        </p>
                    </div>
                    <div
                        data-aos="fade-up"
                        data-aos-duration="3000"
                        className="switch-content-card"
                    >
                        <img src="/images/switch-img3.png" alt="" />
                        <h2>Award winning support</h2>
                        <p>
                            Expect the best from us. Get a dedicated finance
                            team that will handle all your accounting, R&D
                            credits and CFO needs.
                        </p>
                    </div>
                </div>
                <button
                    className="btn-switch
                "
                >
                    Discover what we do
                </button>
            </div>
        </section>
    );
}

export default Switch;
