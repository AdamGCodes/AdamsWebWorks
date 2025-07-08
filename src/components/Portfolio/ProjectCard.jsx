import { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCogs, faLink, faBook, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { iconMap } from '../../Data/skills'; // Import your icon map

const ProjectCard = ({ project, isOpen, onToggle }) => {
    const { id, title, image, summary, tools, deployed, readme, repo } = project;
    const fullRef = useRef(null);
    const toggleRef = useRef(null);

    useEffect(() => {
        if (isOpen && fullRef.current) {
            // Add a small delay to ensure the animation has started
            setTimeout(() => {
                fullRef.current.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center',
                    inline: 'center'
                });
            }, 100);
        }
    }, [isOpen]);

    // Animation variants for the expanded content
    const expandedVariants = {
        collapsed: { 
            opacity: 0, 
            height: 0,
            y: -20,
            scale: 0.95
        },
        expanded: { 
            opacity: 1, 
            height: "auto",
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 25
            }
        }
    };

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

            <AnimatePresence>
                {isOpen && (
                    <motion.li 
                        id={`details-${id}`} 
                        className="fullwidth expanded" 
                        ref={fullRef}
                        variants={expandedVariants}
                        initial="collapsed"
                        animate="expanded"
                        exit="collapsed"
                        style={{ overflow: "hidden" }}
                    >
                        <div className="project-details">
                            <motion.button
                                className="close-button"
                                onClick={() => {
                                    onToggle(null);
                                    toggleRef.current?.focus();
                                }}
                                aria-label="Close"
                                title="Close"
                                whileHover={{ 
                                    scale: 1.1,
                                    rotate: 90,
                                    transition: { type: "spring", stiffness: 400, damping: 10 }
                                }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <FontAwesomeIcon icon={faXmark} />
                            </motion.button>

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
                                    <motion.a 
                                        href={deployed} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        whileHover={{ 
                                            scale: 1.05,
                                            transition: { type: "spring", stiffness: 400, damping: 10 }
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FontAwesomeIcon icon={faLink} /> Deployed Site
                                    </motion.a>
                                )}
                                {readme && (
                                    <motion.a 
                                        href={readme} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        whileHover={{ 
                                            scale: 1.05,
                                            transition: { type: "spring", stiffness: 400, damping: 10 }
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FontAwesomeIcon icon={faBook} /> README
                                    </motion.a>
                                )}
                                {repo && (
                                    <motion.a 
                                        href={repo} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        whileHover={{ 
                                            scale: 1.05,
                                            transition: { type: "spring", stiffness: 400, damping: 10 }
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FontAwesomeIcon icon={faCodeBranch} /> GitHub Repo
                                    </motion.a>
                                )}
                            </div>
                        </div>
                    </motion.li>
                )}
            </AnimatePresence>
        </>
    );
};

export default ProjectCard;
