import { useState, useEffect } from 'react';

function Navbar() {
    const [isHidden, setIsHidden] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Disable hide effect on small screens
            if (window.innerWidth <= 768) {
                setIsHidden(false);
                return;
            }
            
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsHidden(true);
            } else {
                setIsHidden(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const handleToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`navbar ${isHidden ? 'navbar--hidden' : ''}`} role="navigation" aria-label="Main navigation">
            <a href="#main" className="skip-link">Skip to main content</a>

            <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                <a href="#brand-section" onClick={() => setIsMenuOpen(false)}>Home</a>
                <li><a href="#portfolio-section" onClick={() => setIsMenuOpen(false)}>Portfolio</a></li>
                <li><a href="#experience-section" onClick={() => setIsMenuOpen(false)}>Experience</a></li>
            </ul>

            <button
                className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                onClick={handleToggle}
                aria-controls="nav"
                aria-expanded={isMenuOpen}
                aria-label="Toggle navigation menu"
            >
                <span className="bar" />
                <span className="bar" />
                <span className="bar" />
            </button>
        </nav>
    );
}

export default Navbar;
