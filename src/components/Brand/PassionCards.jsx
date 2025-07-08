// PassionCards.jsx
// Renders a set of expandable cards describing personal passions, with accessibility features.

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

// Expandable card for each passion, with accessible toggle and smooth expand/collapse
const PassionCardExpandable = ({ icon, title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    const cardRef = useRef(null);

    // Animation variants for smooth expand/collapse
    const contentVariants = {
        collapsed: { 
            opacity: 0, 
            height: 0,
            y: -10
        },
        expanded: { 
            opacity: 1, 
            height: "auto",
            y: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 25
            }
        }
    };

    return (
        <motion.button
            ref={cardRef}
            type='button'
            className={`passion-card ${isOpen ? 'open' : ''}`}
            onClick={() => {
                if (!isOpen) {
                    // Scroll to center the card first
                    cardRef.current.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                        inline: "center"
                    });
                    
                    setTimeout(() => {
                        setIsOpen(true);
                    }, 300);
                } else {
                    setIsOpen(false);
                }
            }}
            onKeyDown={(e) => {
                if ((e.key === 'Enter' || e.key === ' ') && !isOpen) {
                    cardRef.current.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                        inline: "center"
                    });
                    
                    setTimeout(() => {
                        setIsOpen(true);
                    }, 300);
                } else if (e.key === 'Enter' || e.key === ' ') {
                    setIsOpen(false);
                }
            }}
            role="button"
            tabIndex={0}
            aria-expanded={isOpen}
            aria-label={`${title} details toggle`}
            aria-controls={`panel-${title.toLowerCase().replace(/\s+/g, '-')}`}
            aria-describedby={`tooltip-${title.toLowerCase().replace(/\s+/g, '-')}`}
            whileHover={{ 
                y: -5,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
            whileTap={{ scale: 0.98 }}
        >
            <span className="tooltip" id={`tooltip-${title.toLowerCase().replace(/\s+/g, '-')}`}>
                Click to expand and learn more about {title}
            </span>
            
            <div className='passion-card-inner'>
                <div className="passion-icon">{icon}</div>
                <h3 className="passion-title">{title}</h3>
                <motion.div
                    className="passion-content-wrapper"
                    variants={contentVariants}
                    initial="collapsed"
                    animate={isOpen ? "expanded" : "collapsed"}
                    style={{ overflow: "hidden" }}
                    aria-hidden={!isOpen}
                >
                    <p className="passion-content">{content}</p>
                </motion.div>
            </div>
        </motion.button>
    );
};

// Renders all passion cards from a static array
const PassionCards = () => {
    const passions = [
        {
            icon: (
                <img
                    src="/assets/images/icon-accessibility.svg"
                    alt="Accessibility icon"
                    width="50"
                    height="50"
                />
            ),
            title: 'Accessibility',
            content: "I design and build with accessibility in mind from the very beginning. I write semantic, inclusive code and create user experiences that aim to work for everyone. Beyond development, I also advocate for accessibility during delivery, helping ensure that tools and training support users of all abilities."
        },
        {
            icon: (
                <img
                    src="/assets/images/icon-functionality.svg"
                    alt="Functionality icon"
                    width="50"
                    height="50"
                />
            ),
            title: 'Clarity & Function',
            content: "Whether I'm coding a feature or supporting an implementation, I focus on clarity. I care about whether users can complete tasks smoothly, find what they need quickly, and feel confident using the tools I help deliver."
        },
        {
            icon: (
                <img
                    src="/assets/images/icon-efficiency.svg"
                    alt="Efficiency icon"
                    width="50"
                    height="50"
                />
            ),
            title: 'Impact & Efficiency',
            content: "I strive to deliver well-crafted, maintainable code and practical solutions that help people save time, reduce effort, and do more with confidence. Whether I'm working behind the scenes or face to face with end users, I want my work to feel efficient and empowering."
        },
        {
            icon: (
                <img
                    src="/assets/images/icon-engagement.svg"
                    alt="Engagement icon"
                    width="50"
                    height="50"
                />
            ),
            title: 'Engagement',
            content: "Great tech doesn't just work. It feels good to use. I aim to create experiences that are enjoyable, efficient, and meaningful, whether through polished interfaces, strong onboarding, or empathetic support."
        }
    ];

    return (
        <div className="passion-cards-wrapper">
            {passions.map(({ icon, title, content }) => (
                <PassionCardExpandable
                    key={title}
                    icon={icon}
                    title={title}
                    content={content}
                />
            ))}
        </div>
    );
};

export default PassionCards;