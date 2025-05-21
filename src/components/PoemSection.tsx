import React from 'react';
import poem1 from '../assets/poem1.png'; // or .png
import poem2 from '../assets/poem2.png';
import './PoemSection.css';

const PoemSection: React.FC = () => (
    <section className="poem-section">
        <h2 className="poem-title">POEM</h2>
        <div className="poem-images-row">
            <img src={poem1} alt="Poem 1" className="poem-img" />
            <img src={poem2} alt="Poem 2" className="poem-img" />
        </div>
    </section>
);

export default PoemSection;
