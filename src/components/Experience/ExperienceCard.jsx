import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ExperienceCard = ({ item, index }) => {
    const alignment = index % 2 === 0 ? "left" : "right";
    const [expanded, setExpanded] = useState(false);

    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.15,
        triggerOnce: false,
        rootMargin: "0px 0px -15% 0px" // Only fire when card is comfortably in viewport from the top
    });

    React.useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [inView, controls]);

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
            <div className="tooltip-wrapper">
                <motion.article

                className={`experience-card ${expanded ? "expanded" : ""}`}
                role="listitem"
                variants={variants}
                initial="hidden"
                animate={controls}
                onClick={() => setExpanded((prev) => !prev)}
                tabIndex={0}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setExpanded((prev) => !prev)}
                aria-expanded={expanded}
            >
                <p className="experience-dates">{item.dates}</p>
                <h3 className="experience-title">{item.title}</h3>
                <p className="experience-company">{item.company}</p>
                {expanded && <p className="experience-description">{item.description}</p>}
                </motion.article>
                {!expanded ? (
                    <div className="tooltip-text" role="tooltip">
                        Click to expand for more details
                    </div>
                ) : (
                    <div className="tooltip-text" role="tooltip">
                        Click to collapse
                    </div>
                )}
            </div>
        </div>
    );
};

export default ExperienceCard;
