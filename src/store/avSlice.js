import { createSlice } from '@reduxjs/toolkit';

export const avSlice = createSlice({
  name: 'av',
  initialState: [
    { name: 'Projectors', cost: 200, quantity: 0 }, // [cite: 77]
    { name: 'Speaker', cost: 35, quantity: 0 }, // [cite: 74]
    { name: 'Microphones', cost: 45, quantity: 0 }, // [cite: 75]
    { name: 'Whiteboards', cost: 80, quantity: 0 }, // [cite: 76]
    { name: 'Signage', cost: 80, quantity: 0 }, // [cite: 78]
  ],
  reducers: {
    incrementAvQuantity: (state, action) => {
      state[action.payload].quantity++; // [cite: 79]
    },
    decrementAvQuantity: (state, action) => {
      if (state[action.payload].quantity > 0) state[action.payload].quantity--; // [cite: 79]
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;
export default avSlice.reducer;