import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Switch from "./components/Switch.jsx";
import Plans from "./components/Plans.jsx";
import Companies from "./components/Companies.jsx";
import Hub from "./components/Hub.jsx";
import Expert from "./components/Expert.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);
    return (
        <div>
            <Header />
            <Hero />
            <Switch />
            <Plans />
            <Companies />
            <Hub />
            <Expert />
            <Footer />
        </div>
    );
}

export default App;
