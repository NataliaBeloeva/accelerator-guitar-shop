import { createReducer } from '@reduxjs/toolkit';
import { GuitarsData } from '../../types/state';
import { loadGuitars } from '../action';

const initialState: GuitarsData = {
  guitars: [],
  isDataLoaded: false,
};

const guitarsData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadGuitars, (state, action) => {
      state.guitars = action.payload;
      state.isDataLoaded = true;
    });
});

export {guitarsData};
