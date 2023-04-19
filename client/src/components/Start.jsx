import '../styles/start.css';

import { Link } from 'react-router-dom';

const Start = () => {
  return (
    <div>
      <header className="hero">
        <div id="navbar" className="navbar">
          <h1 className="logo">
            <i className="fas fa-book-open"></i>
            Highschool catalogue
          </h1>
          <nav>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="./login.html">Login</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="hero-content">
          <h1>Highschool catalogue</h1>
          <p>Digitalizarea incepe acum</p>
          <Link to="/login" className="btn">
            <span className="btn-text">Login to start</span>
          </Link>
        </div>
      </header>
    </div>
  );
};
export default Start;
