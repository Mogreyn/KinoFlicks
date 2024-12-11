import React, { useState, useEffect } from "react";
import "./App.css"; // Подключение стилей

function App() {
  const [movies, setMovies] = useState([]);

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

  return (
    <div className="app">
      <h1>Популярные фильмы</h1>
      <div className="movies-container">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <div
              className="movie-poster-container"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
              }}
            >
              <h2 className="movie-vote_average">{movie.vote_average}</h2>
              <h3 className="movie-title">{movie.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
