import React from 'react';

interface NewsCardProps {
    title: string;
    subtitle: string;
    description: string;
    image: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, subtitle, description, image }) => (
    <div className="news-card">
        <div className="news-card-text">
            <h3 className="news-title">{title}</h3>
            <h4 className="news-subtitle">{subtitle}</h4>
            <p className="news-description">{description}</p>
        </div>
        <div className="news-card-image">
            <img src={image} alt={title} />
        </div>
    </div>
);

export default NewsCard;
