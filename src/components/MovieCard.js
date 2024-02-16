import React, { useState, useEffect } from "react";
import "../css/card.css";
import "../css/components.css";


const MovieCard = (props) => {
  return (
      <div className="card-body">
        <h5 className="card-title">Name: {props.title}</h5>
        <p className="card-text">genre: {props.genre}</p>
        <p className="card-text">director:{props.director}</p>
        <p className="card-text">year: {props.release_year}</p>
        <div className="out-more">
        <a name="more-movies"class="btn btn-warning more"href="#"role="button">More</a>
        </div>
      </div>
  );
};

export default MovieCard;
