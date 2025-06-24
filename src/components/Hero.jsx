import React, { useEffect, useState } from 'react';

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

const cogImages = [
    'DCS_COGS_GEARS-07.svg',
    'DCS_COGS_GEARS-09.svg',
    'DCS_COGS_GEARS-15.svg',
    'DCS_COGS_GEARS-17.svg',
    'DCS_COGS_GEARS-31.svg'
];

const getRandomCog = () => {
    const index = Math.floor(Math.random() * cogImages.length);
    return cogImages[index];
};

function Hero() {
    const { width, height } = useWindowSize();
    const baseCogSize = 8;
    const cogSize = Math.max(Math.floor(height * 0.08), 90);
    const cogsPerRow = Math.ceil(width / cogSize);
    const numberOfRows = Math.ceil(height / cogSize);

    if (cogsPerRow === 0 || numberOfRows === 0) return null; //Preventing error on initial render

    const generateCogRow = (rowIndex, count) => (
        <div className="cog-row" key={`row-${rowIndex}`}>
            {[...Array(count)].map((_, colIndex) => (
                <img 
                    key={`cog-${rowIndex}-${colIndex}`} 
                    className="cog" 
                    src={`/assets/images/${getRandomCog()}`} 
                    alt="" 
                    style={{ width: `${cogSize}px`}}
                    width="90" height="90"
                    />
            ))}
        </div>
        );

    return (
        <div id="home" className="hero-block">
            <div className="hero-background">
                {[...Array(numberOfRows)].map((_, rowIndex) => 
                    generateCogRow(rowIndex, cogsPerRow))}
            </div>
            {/* <div className='hero-content'> */}
                <div className="hero-text">
                    <h1>Adam's Web Works</h1>
                <h2>Technology with <span className="flair" >Humanity</span></h2>
                </div>
                <div className="hero-socials">
                    <a href="https://github.com/AdamGCodes" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-github" aria-hidden="true"></i>
                        <span className="sr-only">GitHub</span>
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/adam-m-g/" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
                        <span className="sr-only">LinkedIn</span>
                        LinkedIn
                    </a>
                </div>
            {/* </div> */}
        </div>
    );
}

export default Hero;