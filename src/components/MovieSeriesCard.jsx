import React from "react";
import "./MovieSeriesCard.css";

const MovieSeriesCard = ({ image, title }) => {
  return (
    <div className="card">
      <img src={image} className="img-fluid" alt="..." />
      <div className="card-body">
        <p className="card-title">{title}</p>
      </div>
    </div>
  );
};

export default MovieSeriesCard;
