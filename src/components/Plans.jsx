function Plans() {
    return (
        <section className="container">
            <div className="plans">
                <div className="plans-content">
                    <h1>Plans built for growth</h1>
                    <div className="plans-content-cards">
                        <div
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            className="plans-card"
                        >
                            <img src="/images/plans-img1.png" alt="" />
                            <h2>Early stage startup</h2>
                            <p>
                                Need your accounting system set up? Learn
                                financial best practice and prime your business
                                for the next stage of growth. We get you moving
                                quickly with an accounting solution that does
                                what you need.
                            </p>
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="2000"
                            className="plans-card"
                        >
                            <img src="/images/plans-img2.png" alt="" />
                            <h2>Scale up</h2>
                            <p>
                                Spend less time worrying about your finances and
                                more time shaping your company's future. Get
                                your bookkeeping, R&D credits and CFO problems,
                                solved.
                            </p>
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="3000"
                            className="plans-card"
                        >
                            <img src="/images/plans-img3.png" alt="" />
                            <h2>High growth</h2>
                            <p>
                                Gain the financial accuracy, visibility, and
                                real-time analysis you need to make smarter
                                decisions, drive efficiency, and achieve total
                                organizational alignment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Plans;
