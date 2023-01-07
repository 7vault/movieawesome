import React from "react";
import "./card.css";

const Card = ({ release_date, title, poster_path }) => {
  return (
    <div className="tc dib br3 pa3 ma2 grow bw2 shadow-8 card-container h">
      <img src={poster_path} alt="movie" />
      <div>
        <h2 className="txtName f4">{title}</h2>
        <p className="txtEmail">{release_date}</p>
      </div>
    </div>
  );
};

export default Card;
