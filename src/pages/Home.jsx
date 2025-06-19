import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Brand from '../components/Brand/Brand';
import PortfolioGrid from '../components/Portfolio/PortfolioGrid'
import ExperienceTrack from '../components/Experience/ExperienceTrack';
import Footer from '../components/Footer'

function Home() {
    return (
        <main id="main">
            <Navbar />
            <Hero />
            <Brand />
            <PortfolioGrid />
            <ExperienceTrack />
            <Footer/>
        </main>
    );
}

export default Home;
