import { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCogs, faLink, faBook, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { iconMap } from '../../Data/skills'; // Import your icon map

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
                    width="400"
                    height="300"
                    src={image || '/assets/images/default-thumbnail.png'}
                    loading="lazy"
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

            {isOpen && (
                <li id={`details-${id}`} className="fullwidth expanded" ref={fullRef}>
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
                            <FontAwesomeIcon icon={faXmark} />
                        </button>

                        <div className="project-body">
                            <div className="project-summary">
                                <h4>Summary</h4>
                                <p className="summary">{summary}</p>
                            </div>

                            {Array.isArray(tools) && tools.length > 0 && (
                                <div className="tools-used">
                                    <h4>Tools Used</h4>
                                    <ul className="tool-list">
                                        {tools.map((tool) => (
                                            <li key={tool} className="tool-item">
                                                <FontAwesomeIcon icon={iconMap[tool.toLowerCase()] || faCogs} title={tool} />
                                                <span>{tool}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className="project-links">
                            {deployed && (
                                <a href={deployed} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faLink} /> Deployed Site
                                </a>
                            )}
                            {readme && (
                                <a href={readme} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faBook} /> README
                                </a>
                            )}
                            {repo && (
                                <a href={repo} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faCodeBranch} /> GitHub Repo
                                </a>
                            )}
                        </div>
                    </div>
                </li>
            )}
        </>
    );
};

export default ProjectCard;
