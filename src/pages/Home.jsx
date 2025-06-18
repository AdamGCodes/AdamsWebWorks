import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Brand from '../components/Brand/Brand';
import PortfolioGrid from '../components/Portfolio/PortfolioGrid'

function Home() {
    return (
        <main id="main">
            <Navbar />
            <Hero />
            <Brand />
            <PortfolioGrid />

        </main>
    );
}

export default Home;
