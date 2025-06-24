import { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-solid-svg-icons';
import {
    faLink,
    faBook,
    faCodeBranch,
    faDatabase,
    faCogs,
    faServer,
    faFileCode,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';
import {
    faReact,
    faNodeJs,
    faJs,
    faHtml5,
    faCss3Alt,
    faPython,
} from '@fortawesome/free-brands-svg-icons';


const iconMap = {
    JavaScript: faJs,
    HTML: faHtml5,
    CSS: faCss3Alt,
    React: faReact,
    Node: faNodeJs,
    'Node.js': faNodeJs,
    Python: faPython,
    Django: faServer,
    SCSS: faFileCode,
    PostgreSQL: faDatabase,
    MongoDB: faDatabase,
    'Express.js': faCogs,
    Express: faCogs,
    EJS: faFileCode,
};

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
                    loading='lazy'
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
                                                <FontAwesomeIcon icon={iconMap[tool] || faCogs} title={tool} />
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
