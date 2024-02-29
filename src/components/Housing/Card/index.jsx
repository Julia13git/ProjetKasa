import "./card.scss";
import React from "react";

function Card({ src, alt }) {
  return (
    <div className="onecard">
      <img src={src} alt={alt} className="card-img" />
      <div className="one-card-content">
        <h2>{alt}</h2>
      </div>
    </div>
  );
}

export default Card;
