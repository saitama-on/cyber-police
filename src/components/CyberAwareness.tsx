import React, { useState } from 'react';
import awareness1 from '../assets/awareness1.jpg'; // Replace with your actual filenames

import './CyberAwareness.css';

const awarenessData = [
    {
        image: awareness1,
        alt: 'COVID-19 Awareness',

    },

    // Add more awareness cards as needed
];

const CyberAwareness: React.FC = () => {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((prev) => (prev + 1) % awarenessData.length);
    const prev = () => setCurrent((prev) => (prev - 1 + awarenessData.length) % awarenessData.length);

    return (
        <section className="cyber-awareness-section">
            <h2 className="cyber-awareness-title">CYBER AWARENESS</h2>
            <div className="cyber-awareness-carousel">
                <button className="carousel-arrow left" onClick={prev} aria-label="Previous">
                    &#8592;
                </button>
                <div className="carousel-card">
                    <img src={awarenessData[current].image} alt={awarenessData[current].alt} className="carousel-image" />
                    <div className="carousel-caption">{awarenessData[current].caption}</div>
                </div>
                <button className="carousel-arrow right" onClick={next} aria-label="Next">
                    &#8594;
                </button>
            </div>
            <div className="carousel-dots">
                {awarenessData.map((_, idx) => (
                    <span
                        key={idx}
                        className={`carousel-dot${current === idx ? ' active' : ''}`}
                        onClick={() => setCurrent(idx)}
                    />
                ))}
            </div>
        </section>
    );
};

export default CyberAwareness;
