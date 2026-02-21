import React from 'react';
import './Home.css'; // Crearemos este archivo para el diseño

const Home = ({ onStart }) => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>BudgetEase Solutions</h1>
        <p>Tu aliado perfecto para la planificación de conferencias y eventos corporativos.</p>
        <button className="get-started-btn" onClick={onStart}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;