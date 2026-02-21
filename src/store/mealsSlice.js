import { createSlice } from '@reduxjs/toolkit';

export const mealsSlice = createSlice({
  name: 'meals',
  initialState: {
    options: [
      { name: 'Breakfast', cost: 50, selected: false },
      { name: 'High Tea', cost: 25, selected: false },
      { name: 'Lunch', cost: 65, selected: false },
      { name: 'Dinner', cost: 70, selected: false },
    ],
    numberOfPeople: 1
  },
  reducers: {
    toggleMealSelection: (state, action) => {
      state.options[action.payload].selected = !state.options[action.payload].selected;
    },
    setNumberOfPeople: (state, action) => {
      state.numberOfPeople = action.payload;
    },
  },
});

export const { toggleMealSelection, setNumberOfPeople } = mealsSlice.actions;
export default mealsSlice.reducer;