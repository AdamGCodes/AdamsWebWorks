// Navbar.jsx
// This component renders the navigation bar with a hamburger menu for mobile and hide-on-scroll for desktop.

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
    // State for hiding navbar on scroll
    const [isHidden, setIsHidden] = useState(false);
    // State for hamburger menu open/close
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // Track last scroll position
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        // Hide navbar on scroll down, show on scroll up (desktop only)
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

    // Toggle hamburger menu open/close
    const handleToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Animation variants for hamburger bars
    const barVariants = {
        closed: { 
            rotate: 0, 
            y: 0,
            opacity: 1
        },
        open: (i) => ({
            rotate: i === 0 ? 45 : i === 2 ? -45 : 0,
            y: i === 0 ? 8 : i === 2 ? -8 : 0,
            opacity: i === 1 ? 0 : 1,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 20,
                delay: i * 0.1
            }
        })
    };

    // Animation variants for menu
    const menuVariants = {
        closed: {
            opacity: 0,
            y: -20,
            scale: 0.95,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 25
            }
        },
        open: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 25,
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    // Animation variants for menu items
    const menuItemVariants = {
        closed: {
            opacity: 0,
            x: -20
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 25
            }
        }
    };

    return (
        <nav className={`navbar ${isHidden ? 'navbar--hidden' : ''}`} role="navigation" aria-label="Main navigation">
            <a href="#main" className="skip-link">Skip to main content</a>

            <ul className={`nav-menu ${isMenuOpen ? 'nav-menu--hidden' : ''}`}>
                <a href="#brand-section" onClick={() => setIsMenuOpen(false)}>Home</a>
                <li><a href="#portfolio-section" onClick={() => setIsMenuOpen(false)}>Portfolio</a></li>
                <li><a href="#experience-section" onClick={() => setIsMenuOpen(false)}>Experience</a></li>
            </ul>

            <motion.button
                className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                onClick={handleToggle}
                aria-controls="nav"
                aria-expanded={isMenuOpen}
                aria-label="Toggle navigation menu"
                whileHover={{ 
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                whileTap={{ scale: 0.9 }}
            >
                <motion.span 
                    className="bar"
                    custom={0}
                    variants={barVariants}
                    initial="closed"
                    animate={isMenuOpen ? "open" : "closed"}
                />
                <motion.span 
                    className="bar"
                    custom={1}
                    variants={barVariants}
                    initial="closed"
                    animate={isMenuOpen ? "open" : "closed"}
                />
                <motion.span 
                    className="bar"
                    custom={2}
                    variants={barVariants}
                    initial="closed"
                    animate={isMenuOpen ? "open" : "closed"}
                />
            </motion.button>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="mobile-menu"
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        style={{
                            position: "absolute",
                            top: "70px",
                            left: 0,
                            right: 0,
                            background: "rgba(255, 255, 255, 0.95)",
                            padding: "1rem",
                            zIndex: 9,
                            borderBottom: "1px solid #013846"
                        }}
                    >
                        <motion.a 
                            href="#brand-section" 
                            onClick={() => setIsMenuOpen(false)}
                            variants={menuItemVariants}
                        >
                            Home
                        </motion.a>
                        <motion.a 
                            href="#portfolio-section" 
                            onClick={() => setIsMenuOpen(false)}
                            variants={menuItemVariants}
                        >
                            Portfolio
                        </motion.a>
                        <motion.a 
                            href="#experience-section" 
                            onClick={() => setIsMenuOpen(false)}
                            variants={menuItemVariants}
                        >
                            Experience
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

export default Navbar;
