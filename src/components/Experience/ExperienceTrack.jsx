import React from "react";
import { motion } from "framer-motion";
import experienceData from "../../Data/experience";
import ExperienceCard from "./ExperienceCard";

const ExperienceTrack = () => {
    // Animation variants for the title
    const titleVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section id="experience-section" className="experience-section timeline-view">
            <motion.h2 
                className="section-title"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={titleVariants}
            >
                My Journey So Far...
            </motion.h2>
            
            <ul className="timeline-container">
                {/* Static timeline line */}
                <div
                    className="timeline-line"
                    style={{
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        left: "calc(50% - 2px)",
                        width: "4px",
                        backgroundColor: "#013846",
                        zIndex: 0
                    }}
                />
                
                {experienceData.map((item, index) => (
                    <ExperienceCard
                        key={item.id}
                        item={item}
                        index={index}
                    />
                ))}
            </ul>
        </section>
    );
};

export default ExperienceTrack;
