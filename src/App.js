import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import MoviePage from "./components/MoviePage/MoviePage";
import Chart from "./components/Chart/Chart"; // Теперь Chart будет главной страницей
// import About from "./components/About/About"; // Страница "О нас"
import "./App.sass"; // Главные стили

function App() {
  return (
    <Router>
      <Header />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Chart />} /> {/* Главная страница теперь - Chart */}
          <Route path="/movies/:id" element={<MoviePage />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* Здесь можно добавить другие маршруты в будущем */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
