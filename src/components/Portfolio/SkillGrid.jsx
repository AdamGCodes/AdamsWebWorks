import React, { useEffect, useState } from 'react';

function chunkAlternating(array, firstRow = 4) {
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

function maybeIncludeOptional(skillsList = [], firstRow = 4) {
    const base = skillsList.filter((item) => !item.optional);
    const optional = skillsList.find((item) => item.optional);

    const rows = chunkAlternating(base, firstRow);
    const lastRow = rows[rows.length - 1];
    const isEven = lastRow.length % 2 === 0;

    if (!isEven && optional) {
        return [...base, optional];
    }

    return base;
}

function SkillGrid({ data, allowPlaceholder = true }) {
    const [firstRowCount, setFirstRowCount] = useState(4); // default

    useEffect(() => {
        function updateRowCount() {
            const width = window.innerWidth;
            let count;
            
            if (width < 400)  count = 2;
            else if (width < 540) count = 2;
            else if (width < 768)  count = 3;
            else if (width < 1024)  count = 4;
            else count = 5;

            console.log('Setting firstRowCount to:', count);
            setFirstRowCount(count);
        }

        updateRowCount();
        window.addEventListener('resize', updateRowCount);
        return () => window.removeEventListener('resize', updateRowCount);
    }, []);

    const displayData = maybeIncludeOptional(data, firstRowCount);
    let rows = chunkAlternating(displayData, firstRowCount);

    // Add placeholder if needed
    const lastRow = rows[rows.length - 1];
    if (allowPlaceholder && lastRow.length % 2 !== 0) {
        rows[rows.length - 1] = [...lastRow, { placeholder: true }];
    }

    return (
        <div className="skills-grid">
            {rows.map((row, rowIndex) => (
                <div className="skill-row" key={`row-${rowIndex}`}>
                    {row.map(({ icon, label, prefix, placeholder }, i) => (
                        <div
                            key={label || `placeholder-${i}`}
                            className={`skill-tile${placeholder ? ' placeholder-tile' : ''}`}
                            aria-hidden={placeholder ? 'true' : undefined}
                        >
                            {!placeholder && (
                                <>
                                    <i className={`${prefix} ${icon}`} title={label}></i>
                                    <span>{label}</span>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default SkillGrid;
