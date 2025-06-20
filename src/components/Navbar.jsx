import { useState, useEffect } from 'react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Close the menu if window is resized above mobile breakpoint
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar" role="navigation" aria-label="Main navigation">
            <a href="#main" className="skip-link">Skip to main content</a>
            <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                <li><a href="#brand-section" className="active">Home</a></li>
                <li><a href="#portfolio-section">Portfolio</a></li>
                <li><a href="#experience-section">Experience</a></li>
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
