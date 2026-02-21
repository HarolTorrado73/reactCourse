import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity } from '../store/venueSlice';
import { incrementAvQuantity, decrementAvQuantity } from '../store/avSlice';
import MealsSelection from './MealsSelection'; // Importamos la sección de comidas

const ProductSelection = ({ onShowDetails }) => {
  const dispatch = useDispatch();
  const venueItems = useSelector(state => state.venue);
  const avItems = useSelector(state => state.av);
  const mealsState = useSelector(state => state.meals);
  const { options, numberOfPeople } = mealsState || { options: [], numberOfPeople: 0 };
  
  // Cálculo del costo total para mostrar en la barra o consola si lo deseas
  const calculateTotalCost = () => {
    const venueTotal = venueItems.reduce((sum, item) => sum + (item.cost * item.quantity), 0);
    const avTotal = avItems.reduce((sum, item) => sum + (item.cost * item.quantity), 0);
    const mealsTotal = mealOptions
      .filter(item => item.selected)
      .reduce((sum, item) => sum + (item.cost * numberOfPeople), 0);
    return venueTotal + avTotal + mealsTotal;
  };

  return (
    <div className="product-selection">
      {/* Barra de Navegación */}
      <nav className="navbar">
        <div className="nav-links">
          <a href="#venue">Venue</a>
          <a href="#addons">Add-ons</a>
          <a href="#meals">Meals</a>
        </div>
        {/* Usamos la prop onShowDetails para abrir el modal de App.jsx */}
        <button className="details-button" onClick={onShowDetails}>
          Show Details
        </button>
      </nav>

      {/* SECCIÓN 1: Salas */}
      <section id="venue" className="section-container">
        <h2>Venue Room Selection</h2>
        <div className="item-grid">
          {venueItems.map((item, index) => (
            <div key={index} className="item-card">
              <img src={`/images/${item.name}.jpg`} alt={item.name} style={{width: '100%'}} />
              <h3>{item.name}</h3>
              <p>Cost: ${item.cost}</p>
              <div className="controls">
                <button onClick={() => dispatch(decrementQuantity(index))}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(incrementQuantity(index))}>+</button>
              </div>
            </div>
          ))}
        </div>
        <div className="subtotal">
          Total Venue Cost: ${venueItems.reduce((sum, i) => sum + (i.cost * i.quantity), 0)}
        </div>
      </section>

      {/* SECCIÓN 2: Complementos (Add-ons) */}
      <section id="addons" className="section-container">
        <h2>Add-ons Selection</h2>
        <div className="item-grid">
          {avItems.map((item, index) => (
            <div key={index} className="item-card">
              <h3>{item.name}</h3>
              <p>Cost: ${item.cost}</p>
              <div className="controls">
                <button onClick={() => dispatch(decrementAvQuantity(index))}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(incrementAvQuantity(index))}>+</button>
              </div>
            </div>
          ))}
        </div>
        <div className="subtotal">
          Total Add-ons Cost: ${avItems.reduce((sum, i) => sum + (i.cost * i.quantity), 0)}
        </div>
      </section>

      {/* SECCIÓN 3: Comidas (Meals) */}
      <MealsSelection /> 
    </div>
  );
};

export default ProductSelection;