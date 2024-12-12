import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Импортируем Link
import "./Chart.sass";

function Chart() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = "d97fe0ef1a384d6b2d23d46d6e0ce4f2";
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
        );
        const data = await response.json();
        setMovies(data.results);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setError("Произошла ошибка при загрузке данных.");
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="chart">
      <h1>Популярные фильмы</h1>
      {isLoading && <p>Загрузка...</p>}
      {error && <p>{error}</p>}
      <div className="movies-container">
        {movies.map((movie) => (
          <Link key={movie.id} to={`/movies/${movie.id}`} className="movie-link">
            <div className="movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="movie-poster-main"
              />
              <h3 className="movie-title">{movie.title}</h3>
              <p className="movie-vote-average"> {movie.vote_average}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Chart;
