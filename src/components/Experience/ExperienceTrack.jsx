import { useRef } from 'react';
import experienceData from '../../Data/experience';
import '../Experience/ExperienceTrack';

const ExperienceTrack = () => {
    const trackRef = useRef(null);

    return (
        <section className="experience-section">
            <h2 className="section-title">My Journey</h2>
            <div
                className="experience-track"
                ref={trackRef}
                role="list"
                aria-label="Experience Timeline"
            >
                {experienceData.map((item) => (
                    <article
                        key={item.id}
                        className="experience-card"
                        tabIndex={0}
                        role="listitem"
                        aria-label={`Experience at ${item.title}`}
                    >
                        <div className="timeline-dot" aria-hidden="true" />
                        <h3>{item.title}</h3>
                        <p className="date">{item.date}</p>
                        <p className="summary">{item.summary}</p>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default ExperienceTrack;