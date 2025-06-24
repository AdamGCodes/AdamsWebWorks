import React, { useEffect, useState } from 'react';

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

function maybeIncludeOptional(data, firstRow) {
    const base = data.filter((x) => !x.optional);
    const optional = data.find((x) => x.optional);
    const rows = chunkAlternating(base, firstRow);
    const last = rows[rows.length - 1] || [];
    const prev = rows[rows.length - 2] || [];

    // Ensure last row parity matches previous
    const isPrevEven = prev.length % 2 === 0;
    const isLastEven = last.length % 2 === 0;

    if (optional && last.length < firstRow) {
        last.push(optional);
    }

    if (last.length > 0 && isPrevEven !== isLastEven) {
        last.push({ placeholder: true });
    }

    return rows;
}

function SkillGrid({ data, allowPlaceholder = true }) {
    const [firstRowCount, setFirstRowCount] = useState(5);

    useEffect(() => {
        function updateRowCount() {
            const w = window.innerWidth;
            let count;
            if (w < 320) count = 2;       // extra-small: 2 on even rows, 1 on odd
            else if (w < 400) count = 3;  // small mobile: 3 per row
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

    const rows = maybeIncludeOptional(data, firstRowCount);

    return (
        <div className="skills-grid">
            {rows.map((row, idx) => (
                <div className="skill-row" key={idx}>
                    {row.map(({ icon, label, prefix, placeholder }, i) => (
                        <div
                            key={label ?? `placeholder-${idx}-${i}`}
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
