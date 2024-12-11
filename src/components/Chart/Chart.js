import React, { useState, useEffect } from "react";
import "./Chart.css";
import MovieDetails from "../MovieDetails/MovieDetails";

function Chart() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const apiKey = "d97fe0ef1a384d6b2d23d46d6e0ce4f2";
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
      );
      const data = await response.json();
      setMovies(data.results);
    };

    fetchMovies();
  }, []);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseDetails = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="app">
      <h1>Популярные фильмы</h1>
      <div className="movies-container">
        {movies.map((movie) => (
          <div
            className="movie-card"
            key={movie.id}
            onClick={() => handleMovieClick(movie)}
          >
            <div
              className="movie-poster-container"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
              }}
            >
              <h3 className="movie-title">{movie.title}</h3>
              <h2 className="movie-vote_average">{movie.vote_average}</h2>
            </div>
          </div>
        ))}
      </div>

      {selectedMovie && (
        <MovieDetails movie={selectedMovie} onClose={handleCloseDetails} />
      )}
    </div>
  );
}

export default Chart;
