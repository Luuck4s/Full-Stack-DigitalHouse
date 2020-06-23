import React from "react";

import "./styles.css";

function Card({ name, description, icon, color }) {
  return (
    <div className="card" style={{ background: color }}>
      <div className="card-body">
        <div className="card-content">
          <p style={{ color }} className="card-title">{name}</p>
          <p className="card-description">{description}</p>
        </div>
        {icon}
      </div>
    </div>
  );
}

export default Card;
