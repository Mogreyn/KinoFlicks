import React from 'react';
import { Link } from 'react-router-dom';
import"./Header.sass"


function Header (){
    return(
        <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li>
            <Link to="/" className="nav-link">
              Главная
            </Link>
          </li>
         
          <li>
            <Link to="/about" className="nav-link">
              О нас
            </Link>
          </li>
          {/* Оставим пустые ссылки для будущих страниц */}
          <li>
            <Link to="/future-page" className="nav-link">
              Будущая страница
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header