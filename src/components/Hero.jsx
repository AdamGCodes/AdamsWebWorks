// Hero.jsx
// This component renders the hero section with animated cogs and social links.
// Cogs are animated using CSS, social icons use Framer Motion.

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Custom hook to get the current window size
function useWindowSize() {
    const [size, setSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const updateSize = () =>
            setSize({ width: window.innerWidth, height: window.innerHeight });

        updateSize(); // set initial size
        window.addEventListener('resize', updateSize);

        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return size;
}

// List of available cog SVG images
const cogImages = [
    'DCS_COGS_GEARS-07.svg',
    'DCS_COGS_GEARS-09.svg',
    'DCS_COGS_GEARS-15.svg',
    'DCS_COGS_GEARS-17.svg',
    'DCS_COGS_GEARS-31.svg'
];

// Returns a random cog image filename from the list
const getRandomCog = () => {
    const index = Math.floor(Math.random() * cogImages.length);
    return cogImages[index];
};

function Hero() {
    const { width, height } = useWindowSize();
    const { scrollY } = useScroll();
    const isMobile = width <= 768;
    
    const cogSize = Math.max(Math.floor(height * 0.08), 90);
    const cogsPerRow = Math.ceil(width / cogSize);
    const numberOfRows = Math.ceil(height / cogSize);

    // Mobile cog configurations - positioned on edges
    const mobileCogs = [
        { id: 1, position: 'top-left', image: getRandomCog(), size: 120 },
        { id: 2, position: 'top-right', image: getRandomCog(), size: 100 },
        { id: 3, position: 'bottom-left', image: getRandomCog(), size: 140 },
        { id: 4, position: 'bottom-right', image: getRandomCog(), size: 110 }
    ];

    if (cogsPerRow === 0 || numberOfRows === 0) return null; //Preventing error on initial render

    const generateCogRow = (rowIndex, count) => (
        <div className="cog-row" key={`row-${rowIndex}`}> 
            {[...Array(count)].map((_, colIndex) => (
                <img
                    key={`cog-${rowIndex}-${colIndex}`}
                    className="cog"
                    src={`/assets/images/${getRandomCog()}`}
                    alt=""
                    style={{ width: `${cogSize}px` }}
                    width="90" height="90"
                />
            ))}
        </div>
    );

    // Mobile cog component with scroll-responsive animation
    const MobileCog = ({ cog }) => {
        const scrollYProgress = useTransform(scrollY, [0, 500], [0, 1]);
        const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
        const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

        const getPositionStyles = (position) => {
            switch (position) {
                case 'top-left':
                    return { top: '-10%', left: '-5%' };
                case 'top-right':
                    return { top: '-8%', right: '-8%' };
                case 'bottom-left':
                    return { bottom: '-15%', left: '-5%' };
                case 'bottom-right':
                    return { bottom: '-12%', right: '-10%' };
                default:
                    return {};
            }
        };

        return (
            <motion.img
                className="mobile-cog"
                src={`/assets/images/${cog.image}`}
                alt=""
                style={{
                    position: 'absolute',
                    width: `${cog.size}px`,
                    height: 'auto',
                    opacity: 0.3,
                    zIndex: 1,
                    ...getPositionStyles(cog.position),
                    rotate,
                    y
                }}
            />
        );
    };

    return (
        <div id="home" className="hero-block">
            <div className="hero-background">
                {isMobile ? (
                    // Mobile cogs - positioned on edges
                    mobileCogs.map(cog => (
                        <MobileCog key={cog.id} cog={cog} />
                    ))
                ) : (
                    // Desktop cogs - grid layout
                    [...Array(numberOfRows)].map((_, rowIndex) => 
                        generateCogRow(rowIndex, cogsPerRow))
                )}
            </div>
            <div className="hero-text">
                <h1>Adam's Web Works</h1>
                <h2>Technology with <span className="flair">Humanity</span></h2>
            </div>
            <div className="hero-socials">
                <a href="https://github.com/AdamGCodes" target="_blank" rel="noopener noreferrer">
                    <motion.i
                        className="fa-brands fa-github"
                        aria-hidden="true"
                        whileHover={{ scale: 1.12 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: 'tween', duration: 0.18, ease: 'easeOut' }}
                    />
                    <span className="sr-only">GitHub</span>
                    GitHub
                </a>
                <a href="https://www.linkedin.com/in/adam-m-g/" target="_blank" rel="noopener noreferrer">
                    <motion.i
                        className="fa-brands fa-linkedin"
                        aria-hidden="true"
                        whileHover={{ scale: 1.12 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: 'tween', duration: 0.18, ease: 'easeOut' }}
                    />
                    <span className="sr-only">LinkedIn</span>
                    LinkedIn
                </a>
            </div>
        </div>
    );
}

export default Hero;