import React from 'react';
import volunteerImg from '../assets/volunteer.jpg'; // adjust the filename/extension as needed
import './VolunteersSection.css';

const VolunteersSection: React.FC = () => (
    <section className="volunteers-section">
        <h2 className="volunteers-title">VOLUNTEERS PROGRAM</h2>
        <div className="volunteers-content">

            <img src={volunteerImg} alt="Be a Cyber Volunteer" className="volunteer-img" />

        </div>
        <div className="volunteers-cta-row">
            <a href="https://cybercrime.gov.in/webform/cybervolunteerinstruction.aspx" target="_blank" rel="noopener noreferrer" className="volunteers-cta-btn">
                JOIN NOW
            </a>
        </div>
    </section>
);

export default VolunteersSection;
