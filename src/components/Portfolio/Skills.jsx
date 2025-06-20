import React from 'react';

const stackSkills = [
    { icon: 'fa-python', label: 'Python', prefix: 'fab' },
    { icon: 'fa-js', label: 'JavaScript', prefix: 'fab' },
    { icon: 'fa-react', label: 'React', prefix: 'fab' },
    { icon: 'fa-code', label: 'Django', prefix: 'fas' },
    { icon: 'fa-code', label: 'Flask', prefix: 'fas' },
    { icon: 'fa-node-js', label: 'Node.js', prefix: 'fab' },
    { icon: 'fa-css3-alt', label: 'CSS', prefix: 'fab' },
    { icon: 'fa-html5', label: 'HTML', prefix: 'fab' },
    { icon: 'fa-cogs', label: 'Express.js', prefix: 'fas' },
    { icon: 'fa-sass', label: 'Sass', prefix: 'fab' },
    { icon: 'fa-database', label: 'PostgreSQL', prefix: 'fas' },
    { icon: 'fa-database', label: 'SQL', prefix: 'fas' },
    { icon: 'fa-database', label: 'MongoDB', prefix: 'fas' },
    { icon: 'fa-database', label: 'SQL Server', prefix: 'fas' },
    { icon: 'fa-github', label: 'GitHub', prefix: 'fab' },
];

const workflowAndMethods = [
    { icon: 'fa-figma', label: 'Figma', prefix: 'fab' },
    { icon: 'fa-slack', label: 'Slack', prefix: 'fab' },
    { icon: 'fa-trello', label: 'Trello', prefix: 'fab' },
    { icon: 'fa-microsoft', label: 'Microsoft 365', prefix: 'fab' },
    { icon: 'fa-video', label: 'Microsoft Teams', prefix: 'fas' },
    { icon: 'fa-google', label: 'Google Workspace', prefix: 'fab' },
    { icon: 'fa-chart-line', label: 'HubSpot', prefix: 'fas' },
    { icon: 'fa-video', label: 'Zoom', prefix: 'fas' },
    { icon: 'fa-project-diagram', label: 'Project Management', prefix: 'fas' },
    { icon: 'fa-sync-alt', label: 'Agile', prefix: 'fas' },
    { icon: 'fa-chess-board', label: 'Scrum', prefix: 'fas' },
    { icon: 'fa-users', label: 'Stakeholder Communication', prefix: 'fas' },
    { icon: 'fa-universal-access', label: 'Accessibility-First', prefix: 'fas' },
    { icon: 'fa-user-check', label: 'User-Centred Design', prefix: 'fas' },
];

function Skills() {
    return (
        <section id="skills" className="skills-section">
            <div className="skills-group">
                <h2>My Stack</h2>
                <div className="skills-grid">
                    {stackSkills.map(({ icon, label, prefix }) => (
                        <div key={label} className="skill-tile">
                            <i className={`${prefix} ${icon}`} aria-hidden="true" title={label}></i>
                            <span>{label}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="skills-group">
                <h2>Workflow Tools & Methods</h2>
                <div className="skills-grid">
                    {workflowAndMethods.map(({ icon, label, prefix }) => (
                        <div key={label} className="skill-tile">
                            <i className={`${prefix} ${icon}`} aria-hidden="true" title={label}></i>
                            <span>{label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
