import React from 'react';
import heroBg from '../assets/hero-bg.png';


const Hero: React.FC = () => (
    <section
        className="hero-section"
        style={{
            backgroundImage: `linear-gradient(120deg, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.3) 100%), url("${heroBg}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100vh', // <-- This is the key!
            display: 'flex',
            alignItems: 'center',
            color: '#fff',
            margin: 0, // Remove any margin
            padding: 0, // Remove any padding
        }}
    >
        <div className="hero-content">
            <h1>Cyber Police<br />Chhattisgarh</h1>
            <h2>साइबर पुलिस<br />छत्तीसगढ़</h2>
        </div>
    </section>


);

export default Hero;
