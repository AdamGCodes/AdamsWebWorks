import React, { useEffect, useState } from 'react';
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

function SkillsGrid() {
    const [firstRowCount, setFirstRowCount] = useState(5);

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
        <section id="skills" className="skills-section">
            <div className="skills-group">
                <h2>My Stack</h2>
                <div className="skills-grid">
                    {stackRows.map((row, rowIdx) => (
                        <div className="skill-row" key={rowIdx}>
                            {row.map(({ icon, label, prefix }, i) => (
                                <div key={`${label}-${rowIdx}-${i}`} className="skill-tile">
                                    <FontAwesomeIcon icon={icon} title={label} size="2x" />
                                    <span>{label}</span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div className="skills-group">
                <h2>Workflow Tools & Methods</h2>
                <div className="skills-grid">
                    {workflowRows.map((row, rowIdx) => (
                        <div className="skill-row" key={rowIdx}>
                            {row.map(({ icon, label, prefix }, i) => (
                                <div key={`${label}-${rowIdx}-${i}`} className="skill-tile">
                                    <i className={`${prefix} ${icon}`} title={label}></i>
                                    <span>{label}</span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SkillsGrid;
