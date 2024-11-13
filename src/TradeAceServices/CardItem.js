import React from 'react';

const CardItem = ({ icon: Icon, title, description }) => {
  return (
    <div className="image-box-container">
      <div className="image-box">
        <div className="image-box-img">
          {/* Render the icon component here */}
          <Icon size={80} color="#c3a34e" />
        </div>
        <div className="image-box-content">
          <h3 className="image-box-title">{title}</h3>
          <p className="image-box-description">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
