import React from "react";

import "./styles.css";

function CardGroup({ title, categories = [] }) {
  return (
    <div className="card-group-container">
      <div className="card-group-header">
        <h2>{title}</h2>
      </div>
      <div className="card-group-content">
        {categories.map((category) => (
          <div className="category" key={category.id}>
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardGroup;
