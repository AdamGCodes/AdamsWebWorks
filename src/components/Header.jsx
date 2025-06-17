import Navbar from './Navbar';
import Hero from './Hero';

function Header() {
    console.log("header loaded")
    return (
        <header>
            <Navbar />
            <Hero />
        </header>
    );
}

export default Header;
