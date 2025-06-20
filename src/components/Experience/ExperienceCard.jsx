import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";


const ExperienceCard = ({ item, index }) => {
    const alignment = index % 2 === 0 ? "left" : "right";
    const [expanded, setExpanded] = useState(false);

    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.15,
        triggerOnce: false,
        rootMargin: "0px 0px -15% 0px"
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [inView, controls]);

    const cardRef = useRef(null);

    const variants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <div className={`experience-item ${alignment}`} ref={ref}>
            <div className="timeline-dot" aria-hidden="true" />
            <div className="timeline-spacer" />
            <motion.article
                ref={cardRef}
                className={`experience-card ${expanded ? "expanded" : ""}`}
                role="listitem"
                variants={variants}
                initial="hidden"
                animate={controls}
                tabIndex="-1"
            >
                <p className="experience-dates">{item.dates}</p>
                <h3 className="experience-title">{item.title}</h3>
                <p className="experience-company">{item.company}</p>

                <AnimatePresence initial={false}>
                    {expanded && (
                        <motion.div
                            key="description"
                            id={`exp-desc-${index}`}
                            className="experience-description"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            <p>{item.description}</p>
                        </motion.div>
                    )}
                </AnimatePresence>


                <button
                    className="expand-toggle"
                    aria-expanded={expanded}
                    aria-controls={`exp-desc-${index}`}
                    onClick={() => {
                        if (!expanded && cardRef.current) {
                            const top = cardRef.current.getBoundingClientRect().top + window.scrollY - 20;

                            window.scrollTo({
                                top,
                                behavior: "smooth"
                            });

                            setTimeout(() => {
                                setExpanded(true);
                            }, 200);
                        } else {
                            setExpanded(false);
                        }
                    }}
                >
                    {expanded ? "Show Less" : "View More"}
                </button>
            </motion.article>
        </div>
    );
};

export default ExperienceCard;
