import React from "react";
import './card.css';

function card({ src, title, description, price }) {
  return (
    <div className="card">
      <img src={src} alt="Your hotel" />
      <div className="card__info">
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h2>{price}</h2>
      </div>
    </div>
  );
}

export default card;
