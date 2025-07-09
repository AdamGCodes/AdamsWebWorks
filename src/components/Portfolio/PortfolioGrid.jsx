import { useState } from 'react';
import ProjectCard from './ProjectCard';
import projects from '../../Data/projects.jsx';
import Skills from './Skills.jsx';

const PortfolioGrid = () => {
    const [openId, setOpenId] = useState(null);

    return (
        <>
            <section id="portfolio-section">
                <h2>Made with Tech for Humans</h2>
                <ul className="portfolio-grid">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            isOpen={openId === project.id}
                            onToggle={setOpenId}
                
                        />
                    ))}
                </ul>
                
                <Skills/>
            </section>
        </>
    );
};

export default PortfolioGrid;