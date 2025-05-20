import React from 'react';
import './Header.css';
import logo from '../assets/logo.png';


const Header: React.FC = () => (
    <header className="header">
        <div className="header-top">
            <span>Government of Chhattisgarh</span>
            <div className="header-actions">
                <a href="#main-content" className="skip-link">Skip To Main Content</a>
                <button>A-</button>
                <button>A</button>
                <button>A+</button>
                <button>हिंदी</button>
            </div>
        </div>
        <nav className="navbar">
            <img src={logo} alt="Chhattisgarh Police Logo" className="logo" />
            <ul>
                <li><a href="#contact">Contact us</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#awareness">Cyber Awareness</a></li>
                <li><a href="#volunteer">Volunteer Program</a></li>
            </ul>
        </nav>
    </header>
);

export default Header;
