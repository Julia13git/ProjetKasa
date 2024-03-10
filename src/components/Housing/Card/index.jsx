import "../../../assets/css/Housing/Card/card.css";
import React from "react";
import { Link } from "react-router-dom";

function Card({ housing }) {
  return (
    <Link to={`/housing/${housing.id}`}>
      <div className="onecard">
        <img src={housing.cover} alt={housing.title} className="card-img" />
        <div className="one-card-content">
          <h2>{housing.title}</h2>
        </div>
      </div>
    </Link>
  );
}

export default Card;
