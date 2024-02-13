import React, { useState, useEffect } from "react";
import "../css/moviecard.css";
import { fetchImageWithToken } from "../service/apiUtils";


const MovieCard = (props) => {
  const [imageBlob, setImageBlob] = useState(null);

  useEffect(() => {
    const imagePath = props.Image_name;
    
    fetchImageWithToken(imagePath)
      .then(blob => setImageBlob(blob))
      .catch(error => console.error(error));
  }, [props.Image_name]);


  return (
    <div className="card movie_card">
      {imageBlob && (
        <img
          src={URL.createObjectURL(imageBlob)}
          alt={`Movie poster for ${props.title}`}
          className="card-img-top"
        />
      )}
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.genre}</p>
        <span className="card-text">{props.director}</span>
        <p className="card-text float-right">{props.release_year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
