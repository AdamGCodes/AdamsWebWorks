import React from "react";

const ScrollNav = ({ direction, onClick }) => {
    const isLeft = direction === "left";
    const arrow = isLeft ? "◀" : "▶";
    const ariaLabel = isLeft ? "Scroll left" : "Scroll right";

    return (
        <button
            className={`scroll-nav ${direction}`}
            onClick={onClick}
            aria-label={ariaLabel}
        >
            {arrow}
        </button>
    );
};

export default ScrollNav;