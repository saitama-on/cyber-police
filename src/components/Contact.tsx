import React from 'react';
import officer from '../assets/officer.jpg'; // Adjust filename as needed
import './Contact.css';

const Contact: React.FC = () => (
    <section className="contact-section">
        <div className="contact-left">
            <h2>
                <span className="contact-heading-en">CONTACT US</span> / <span className="contact-heading-hi">संपर्क करे</span>
            </h2>
            <p className="contact-subheading">छत्तीसगढ़ साइबर पुलिस आपकी सेवा में</p>
            <p className="contact-toll-label">Toll-Free No.</p>
            <div className="contact-toll-btn">
                <span className="contact-toll-icon">📞</span>
                <span className="contact-toll-number">+91 XXXXXX XXXXX</span>
            </div>
            <p className="contact-visit">
                Visit <a href="https://cybercrime.gov.in/" target="_blank" rel="noopener noreferrer">https://cybercrime.gov.in/</a>
            </p>
        </div>
        <div className="contact-right">
            <img src={officer} alt="Cyber Police Officer" className="contact-officer-img" />
        </div>
    </section>
);

export default Contact;
