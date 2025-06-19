import React from "react";
import experienceData from "../../Data/experience";
import ExperienceCard from "./ExperienceCard";

const ExperienceTrack = () => {
    return (
        <section id="experience-section" className="experience-section timeline-view">
            <h2 className="section-title">My Journey</h2>
            <div className="timeline-container">
                {experienceData.map((item, index) => (
                    <ExperienceCard
                        key={item.id}
                        item={item}
                        index={index}
                    />
                ))}
            </div>
        </section>
    );
};

export default ExperienceTrack;
