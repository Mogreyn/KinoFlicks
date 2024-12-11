import React from "react";
import "./MovieDetails.css";

const MovieDetails = ({ movie, onClose }) => {
  return (
    <div>
      <div className="movie-details-overlay" onClick={onClose}></div>{" "}
      <div className="movie-details">
        <button className="close-btn" onClick={onClose}></button>
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <p>Рейтинг: {movie.vote_average}</p>
        <p>Дата выхода: {movie.release_date}</p>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
    </div>
  );
};

export default MovieDetails;
