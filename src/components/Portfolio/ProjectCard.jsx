import { useRef, useEffect } from 'react';

const ProjectCard = ({ project, isOpen, onToggle }) => {
    const { id, title, image, summary, tools, deployed, readme, repo } = project;
    const fullRef = useRef(null);
    const toggleRef = useRef(null);

    useEffect(() => {
        if (isOpen && fullRef.current) {
            fullRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [isOpen]);

    return (
        <>
            <li className={`project-tile ${isOpen ? 'active' : ''}`}>
                <h3>{title}</h3>
                    <img
                        src={image || '/assets/images/default-thumbnail.png'}
                        alt={`Screenshot of ${title}`}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = '/assets/images/default-thumbnail.png';
                        }}
                    />
                <button
                    ref={toggleRef}
                    aria-expanded={isOpen}
                    aria-controls={`details-${id}`}
                    onClick={() => onToggle(isOpen ? null : id)}
                >
                    Check it out
                </button>
            </li>

            <li
                id={`details-${id}`}
                className={`fullwidth ${isOpen ? 'expanded' : 'is-hidden'}`}
                ref={fullRef}
                tabIndex={isOpen ? 0 : -1}
                aria-hidden={!isOpen}
            >
                <div className="project-details">
                    <button
                        className="close-button"
                        onClick={() => {
                            onToggle(null);
                            toggleRef.current?.focus();
                        }}
                        aria-label="Close"
                        title="Close"
                    >
                        ×
                    </button>

                    <p className="summary">{summary}</p>

                    <div className="tools-used">
                        <strong>Tools:</strong> {tools.join(', ')}
                    </div>

                    <div className="project-links">
                        {deployed && (
                            <a href={deployed} target="_blank" rel="noopener noreferrer">
                                Deployed Site
                            </a>
                        )}
                        {readme && (
                            <a href={readme} target="_blank" rel="noopener noreferrer">
                                README
                            </a>
                        )}
                        {repo && (
                            <a href={repo} target="_blank" rel="noopener noreferrer">
                                GitHub Repo
                            </a>
                        )}
                    </div>
                </div>
            </li>
        </>
    );
};

export default ProjectCard;