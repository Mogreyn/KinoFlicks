import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./MoviePage.sass";
import Sidebar from "../Sidebsr/Sidebar.js"; // Импортируем Sidebar

function MoviePage() {
  const { id } = useParams(); // Получаем id из URL
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);

  // Загрузка данных фильма
  useEffect(() => {
    const apiKey = "d97fe0ef1a384d6b2d23d46d6e0ce4f2";

    // Функция для получения деталей фильма
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
        );
        const data = await response.json();
        if (data && data.id) {
          setMovieDetails(data);
        } else {
          setError("Не удалось загрузить детали фильма.");
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setIsLoading(false);
        setError("Произошла ошибка при загрузке данных.");
      }
    };

    // Функция для получения списка популярных фильмов
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
        );
        const data = await response.json();
        setMovies(data.results); // Сохраняем список фильмов
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovieDetails();
    fetchMovies(); // Загружаем список популярных фильмов
  }, [id]);

  return (
    <div className="movie-page">
      <Sidebar movies={movies} /> {/* Добавляем Sidebar с фильмами */}
      <div className="movie-details">
        {isLoading && <p>Загрузка...</p>}
        {error && <p>{error}</p>}
        {movieDetails && !isLoading && (
          <>
            <div
              className="movie-poster"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500${movieDetails.poster_path})`,
              }}
            ></div>
            <h1>{movieDetails.title}</h1>
            <h3>{movieDetails.release_date}</h3>
            <p>{movieDetails.overview}</p>
            <div className="movie-rating">
              <h2>Рейтинг: {movieDetails.vote_average}</h2>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default MoviePage;
