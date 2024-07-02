import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicroscope, faBell, faSearch, faTools, faComments, faRobot, faLightbulb, faHome, faSunPlantWilt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#122b02' }}>
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">Plant Buddy</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="http://localhost:8501/">
                <FontAwesomeIcon icon={faMicroscope} className="me-1" />Disease Detection
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/my-plants">
                <FontAwesomeIcon icon={faBell} className="me-1" />My Plants
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/recommendations">
                <FontAwesomeIcon icon={faSearch} className="me-1" />Recommend Plants
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                <FontAwesomeIcon icon={faTools} className="me-1" />Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/chatbot">
                <FontAwesomeIcon icon={faRobot} className="me-1" />Chatbot
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/community">
                <FontAwesomeIcon icon={faLightbulb} className="me-1" />Plant Care Tips
              </Link>
            </li>
            <li>
            <Link className="nav-link" to="/home">
                <FontAwesomeIcon icon={faHome} className="me-1" />Home
              </Link>
            </li>
            <li>
            <Link className="nav-link" to="/motivation">
                <FontAwesomeIcon icon={faSunPlantWilt} className="me-1" />Motivations
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
