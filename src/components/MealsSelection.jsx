import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMealSelection, setNumberOfPeople } from '../store/mealsSlice';

const MealsSelection = () => {
  const dispatch = useDispatch();
  const { options, numberOfPeople } = useSelector(state => state.meals);

  const totalMealsCost = options
    .filter(meal => meal.selected)
    .reduce((sum, meal) => sum + (meal.cost * numberOfPeople), 0);

  return (
    <section id="meals" className="section-container">
      <h2>Meals Selection</h2>
      
      <div className="people-input">
        <label>Number of People: </label>
        <input 
          type="number" 
          value={numberOfPeople} 
          onChange={(e) => dispatch(setNumberOfPeople(Number(e.target.value)))} 
        />
      </div>

      <div className="meals-grid">
        {options.map((meal, index) => (
          <div key={index} className="meal-item">
            <input 
              type="checkbox" 
              checked={meal.selected} 
              onChange={() => dispatch(toggleMealSelection(index))} 
            />
            <span>{meal.name} (${meal.cost} per person)</span>
          </div>
        ))}
      </div>

      <div className="total-display">
        Total Meals Cost: ${totalMealsCost}
      </div>
    </section>
  );
};

export default MealsSelection;