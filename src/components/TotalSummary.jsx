import React from 'react';
import { useSelector } from 'react-redux';

const TotalSummary = ({ onCancel }) => {
  const venueItems = useSelector(state => state.venue);
  const avItems = useSelector(state => state.av);
  const { options, numberOfPeople } = useSelector(state => state.meals);

  // Filtrar solo lo que el usuario seleccionó
  const selectedVenue = venueItems.filter(item => item.quantity > 0);
  const selectedAv = avItems.filter(item => item.quantity > 0);
  const selectedMeals = options.filter(item => item.selected);

  // Cálculo del Gran Total
  const totalCost = 
    selectedVenue.reduce((sum, i) => sum + (i.cost * i.quantity), 0) +
    selectedAv.reduce((sum, i) => sum + (i.cost * i.quantity), 0) +
    selectedMeals.reduce((sum, i) => sum + (i.cost * numberOfPeople), 0);

  return (
    <div className="modal-overlay">
      <div className="summary-container">
        <h2>TOTAL COST FOR THE EVENT [cite: 173]</h2>
        <h3 className="grand-total">${totalCost} [cite: 174]</h3>
        
        <table className="summary-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Unit Cost</th>
              <th>Quantity</th>
              <th>Total Cost</th>
            </tr>
          </thead>
          <tbody>
            {/* Filas de Salas */}
            {selectedVenue.map((item, index) => (
              <tr key={`v-${index}`}>
                <td>{item.name}</td>
                <td>${item.cost}</td>
                <td>{item.quantity}</td>
                <td>${item.cost * item.quantity}</td>
              </tr>
            ))}
            {/* Filas de Equipos AV */}
            {selectedAv.map((item, index) => (
              <tr key={`av-${index}`}>
                <td>{item.name}</td>
                <td>${item.cost}</td>
                <td>{item.quantity}</td>
                <td>${item.cost * item.quantity}</td>
              </tr>
            ))}
            {/* Filas de Comidas */}
            {selectedMeals.map((item, index) => (
              <tr key={`m-${index}`}>
                <td>{item.name}</td>
                <td>${item.cost}</td>
                <td>For {numberOfPeople} people</td>
                <td>${item.cost * numberOfPeople}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <button onClick={onCancel} className="close-btn">Close</button>
      </div>
    </div>
  );
};

export default TotalSummary;