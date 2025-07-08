import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const ExperienceCard = ({ item, index }) => {
    const alignment = index % 2 === 0 ? "left" : "right";
    const [expanded, setExpanded] = useState(false);
    
    // Use useInView to detect when element enters/exits viewport
    const ref = useRef(null);
    const inView = useInView(ref, {
        threshold: 0.1,
        margin: "-50px"
    });

    // Animation variants
    const cardVariants = {
        hidden: { 
            opacity: 0, 
            x: alignment === "left" ? -50 : 50,
            y: 30,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 25,
                delay: 0.1
            }
        }
    };

    const dotVariants = {
        hidden: { 
            scale: 0,
            opacity: 0
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 15,
                delay: 0.3
            }
        }
    };

    const expandVariants = {
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
        <motion.div 
            ref={ref}
            className={`experience-item ${alignment}`}
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
        >
            <motion.div 
                className="timeline-dot" 
                aria-hidden="true"
                variants={dotVariants}
                whileHover={{ 
                    scale: 1.3,
                    boxShadow: "0 0 20px rgba(236, 125, 0, 0.6)"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
            <div className="timeline-spacer" />
            <motion.li
                className={`experience-card ${expanded ? "expanded" : ""}`}
                role="listitem"
                tabIndex="-1"
                whileHover={{ 
                    y: -5,
                    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
                    scale: 1.02
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20 
                }}
            >
                <p className="experience-dates">{item.dates}</p>
                <h3 className="experience-title">{item.title}</h3>
                <p className="experience-company">{item.company}</p>

                <motion.div
                    variants={expandVariants}
                    initial="collapsed"
                    animate={expanded ? "expanded" : "collapsed"}
                    style={{ overflow: "hidden" }}
                >
                    <div className="experience-description">
                        <p>{item.description}</p>
                    </div>
                </motion.div>

                <motion.button
                    className="expand-toggle"
                    aria-expanded={expanded}
                    aria-controls={`exp-desc-${index}`}
                    onClick={() => {
                        if (!expanded && ref.current) {
                            // Scroll to center the card first
                            ref.current.scrollIntoView({
                                behavior: "smooth",
                                block: "center",
                                inline: "center"
                            });

                            setTimeout(() => {
                                setExpanded(true);
                            }, 300);
                        } else {
                            setExpanded(false);
                        }
                    }}
                    whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "#EC7D00",
                        color: "#ffffff"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    {expanded ? "Show Less" : "View More"}
                </motion.button>
            </motion.li>
        </motion.div>
    );
};

export default ExperienceCard;
