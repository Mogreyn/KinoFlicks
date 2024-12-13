// src/components/Sidebar/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.sass"; // или .css в зависимости от вашего подхода

const Sidebar = ({ movies }) => {
  return (
    <aside className="sidebar">
      <h2>Каталог фильмов</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} className="sidebar-link">
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
