import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { stackSkills, workflowAndMethods } from '../../Data/skills';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Utility to chunk in alternating row lengths (e.g. 5, 4, 5, 4...)
function chunkAlternating(array, firstRow = 5) {
    const chunks = [];
    let toggle = firstRow;
    let i = 0;

    while (i < array.length) {
        chunks.push(array.slice(i, i + toggle));
        i += toggle;
        toggle = toggle === firstRow ? firstRow - 1 : firstRow;
    }

    return chunks;
}

// Insert optional tile if there's space in the last row
function insertOptionalToAlternate(data, firstRow) {
    const base = data.filter(x => !x.optional);
    const optional = data.find(x => x.optional);
    const rows = chunkAlternating(base, firstRow);

    const last = rows[rows.length - 1] || [];
    const prev = rows[rows.length - 2] || [];

    const isPrevEven = prev.length % 2 === 0;
    const nextLen = last.length + 1;
    const wouldFlipParity = (nextLen % 2 === 0) !== isPrevEven;

    if (
        optional &&
        last.length < firstRow &&
        wouldFlipParity
    ) {
        last.push({ ...optional });
    }

    return rows;
}

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const rowVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const tileVariants = {
    hidden: { 
        opacity: 0, 
        scale: 0.8, 
        y: 20,
        rotate: -10
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        rotate: 0,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 20,
            duration: 0.5
        }
    }
};

function SkillsGrid() {
    const [firstRowCount, setFirstRowCount] = useState(5);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        function updateRowCount() {
            const w = window.innerWidth;
            let count;
            if (w < 320) count = 2;
            else if (w < 400) count = 3;
            else if (w < 600) count = 4;
            else if (w < 900) count = 5;
            else if (w < 1200) count = 7;
            else count = 9;
            setFirstRowCount(count);
        }

        updateRowCount();
        window.addEventListener('resize', updateRowCount);
        return () => window.removeEventListener('resize', updateRowCount);
    }, []);

    const stackRows = insertOptionalToAlternate(stackSkills, firstRowCount);
    const workflowRows = insertOptionalToAlternate(workflowAndMethods, firstRowCount);

    return (
        <section id="skills" className="skills-section" ref={ref}>
            <motion.div 
                className="skills-group"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <h2>My Stack</h2>
                <div className="skills-grid">
                    {stackRows.map((row, rowIdx) => (
                        <motion.div 
                            className="skill-row" 
                            key={rowIdx}
                            variants={rowVariants}
                        >
                            {row.map(({ icon, label, prefix }, i) => (
                                <motion.div 
                                    key={`${label}-${rowIdx}-${i}`} 
                                    className="skill-tile"
                                    variants={tileVariants}
                                    whileHover={{ 
                                        scale: 1.1,
                                        y: -8,
                                        rotate: [0, -5, 5, 0],
                                        transition: {
                                            scale: { type: "spring", stiffness: 400, damping: 10 },
                                            y: { type: "spring", stiffness: 300, damping: 15 },
                                            rotate: { duration: 0.6, ease: "easeInOut" }
                                        }
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FontAwesomeIcon icon={icon} title={label} size="2x" />
                                    <span>{label}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <motion.div 
                className="skills-group"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <h2>Workflow Tools & Methods</h2>
                <div className="skills-grid">
                    {workflowRows.map((row, rowIdx) => (
                        <motion.div 
                            className="skill-row" 
                            key={rowIdx}
                            variants={rowVariants}
                        >
                            {row.map(({ icon, label, prefix }, i) => (
                                <motion.div 
                                    key={`${label}-${rowIdx}-${i}`} 
                                    className="skill-tile"
                                    variants={tileVariants}
                                    whileHover={{ 
                                        scale: 1.1,
                                        y: -8,
                                        rotate: [0, -5, 5, 0],
                                        transition: {
                                            scale: { type: "spring", stiffness: 400, damping: 10 },
                                            y: { type: "spring", stiffness: 300, damping: 15 },
                                            rotate: { duration: 0.6, ease: "easeInOut" }
                                        }
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FontAwesomeIcon icon={icon} title={label} size="2x" />
                                    <span>{label}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

export default SkillsGrid;
