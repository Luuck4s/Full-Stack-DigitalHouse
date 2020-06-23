import React from "react";

import "./styles.css";

function CardLarge({ title, imageSource, imageAlt, textDescription }) {
  return (
    <div className="card-large-container">
      <div className="card-large-header">
        <h2>{title}</h2>
      </div>
      <div className="card-large-body">
        <div className="card-large-image">
          <img src={imageSource} alt={imageAlt} />
        </div>
        <div className="card-large-content">
          <p>{textDescription}</p>
        </div>
        <a href="/" className="card-large-link">View product detail</a>
      </div>
    </div>
  );
}

export default CardLarge;
