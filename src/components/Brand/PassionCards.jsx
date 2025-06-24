import React, { useState, useRef, useEffect } from 'react';


const PassionCardExpandable = ({ icon, title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);
    const cardRef = useRef(null);

    useEffect(() => {
        if (isOpen && contentRef.current && cardRef.current) {
                contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
            
            setTimeout(()=> {
                cardRef.current.scrollIntoView({
                    behaviour: 'smooth',
                    block: 'center',
            });
            }, 200);
        } else if (contentRef.current) {
            contentRef.current.style.maxHeight = '0px';
        }
    }, [isOpen]);

    return (
        <button
            ref={cardRef}
            type='button'
            className={`passion-card ${isOpen ? 'open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setIsOpen(!isOpen)}
            role="button"
            tabIndex={0}
            aria-expanded={isOpen}
            aria-label={`${title} details toggle`}
            aria-controls={`panel-${title.toLowerCase().replace(/\s+/g, '-')}`}
            aria-describedby={`tooltip-${title.toLowerCase().replace(/\s+/g, '-')}`}
        >
            <span className="tooltip" id={`tooltip-${title.toLowerCase().replace(/\s+/g, '-')}`}>
                Click to expand and learn more about {title}
            </span>
            
            <div className='passion-card-inner'>
                <div className="passion-icon">{icon}</div>
                <h3 className="passion-title">{title}</h3>
                <div
                    ref={contentRef}
                    className="passion-content-wrapper"
                    aria-hidden={!isOpen}
                >
                    <p className="passion-content">{content}</p>
                </div>
            </div>
        </button>
    );
};

const PassionCards = () => {
    const passions = [
        {
            icon: (
                <img
                    src="/assets/images/icon-accessibility.svg"
                    alt="Accessibility icon"
                    width="50"
                    height="50"
                />
            ),
            title: 'Accessibility',
            content: 'I design and build with accessibility from the start—writing semantic, inclusive code and crafting user experiences that consider everyone. I also advocate for accessibility in delivery, making sure tools and training support users of all abilities.'
        },
        {
            icon: (
                <img
                    src="/assets/images/icon-functionality.svg"
                    alt="Functionality icon"
                    width="50"
                    height="50"
                />
            ),
            title: 'Clarity & Function',
            content: 'Whether I’m coding a feature or supporting an implementation, I focus on clarity. I care about whether users can complete tasks easily, find what they need quickly, and feel confident using the tools I help deliver.'
        },
        {
            icon: (
                <img
                    src="/assets/images/icon-efficiency.svg"
                    alt="Efficiency icon"
                    width="50"
                    height="50"
                />
            ),
            title: 'Impact & Efficiency',
            content: 'I strive to deliver well-crafted, maintainable code and practical solutions that help people save time, reduce effort, and do more with confidence—whether I’m working behind the scenes or face-to-face with end users.'
        },
        {
            icon: (
                <img
                    src="/assets/images/icon-engagement.svg"
                    alt="Engagement icon"
                    width="50"
                    height="50"
                />
            ),
            title: 'Engagement',
            content: 'Great tech doesn’t just work—it feels good to use. I aim to create experiences that are enjoyable, efficient, and meaningful, whether that’s through polished interfaces, strong onboarding, or empathetic support.'
        }
    ];

    return (
        <div className="passion-cards-wrapper">
            {passions.map(({ icon, title, content }) => (
                <PassionCardExpandable
                    key={title}
                    icon={icon}
                    title={title}
                    content={content}
                />
            ))}
        </div>
    );
};

export default PassionCards;