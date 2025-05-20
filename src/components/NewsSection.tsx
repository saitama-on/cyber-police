import React, { useState } from 'react';
import news1 from '../assets/news1.png'; // Use your actual image name
import news2 from '../assets/news2.png';
import './NewsSection.css';


const newsData = [
    {
        title: 'NEWS',
        subtitle: 'CG: साइबर सेल के कर्मचारियों को कॉप ऑफ द मंथ अवार्ड',
        description: `Marwahi. मरवाही  गौरेला-पेंड्रा-मरवाही में साइबर सेल के 4 कर्मचारियों को 'कॉप ऑफ द मंथ' का अवार्ड दिया गया। चारों ने ब्लाइंड मर्डर की गुत्थी सुलझाकर 48 घंटे के भीतर आरोपियों को गिरफ्तार किया था...`,
        image: news1,
    },
    {
        title: 'NEWS',
        subtitle: 'दूसरी खबर का शीर्षक',
        description: 'यह दूसरी खबर का विवरण है...',
        image: news2,
    },
    // Add more news as needed
];

const NewsSection: React.FC = () => {
    const [current, setCurrent] = useState(0);

    const nextNews = () => {
        setCurrent((prev) => (prev + 1) % newsData.length);
    };

    const prevNews = () => {
        setCurrent((prev) => (prev - 1 + newsData.length) % newsData.length);
    };

    return (
        <section className="news-section">
            <div className="news-carousel">
                <button className="news-arrow left" onClick={prevNews} disabled={newsData.length < 2}>
                    &#8592;
                </button>
                <div className="news-card">
                    <div className="news-card-text">
                        <h3 className="news-title">{newsData[current].title}</h3>
                        <h4 className="news-subtitle">{newsData[current].subtitle}</h4>
                        <p className="news-description">{newsData[current].description}</p>
                    </div>
                    <div className="news-card-image">
                        <img src={newsData[current].image} alt={newsData[current].subtitle} />
                    </div>
                </div>
                <button className="news-arrow right" onClick={nextNews} disabled={newsData.length < 2}>
                    &#8594;
                </button>
            </div>
            <div className="news-dots">
                {newsData.map((_, idx) => (
                    <span
                        className={`dot${idx === current ? ' active' : ''}`}
                        key={idx}
                        onClick={() => setCurrent(idx)}
                    ></span>
                ))}
            </div>
        </section>
    );
};

export default NewsSection;
