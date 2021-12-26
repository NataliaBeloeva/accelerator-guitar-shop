import { createReducer } from '@reduxjs/toolkit';
import { GuitarsData } from '../../types/state';
import { loadGuitar, loadGuitarError, loadGuitars, loadGuitarSuccess } from '../action';

const initialState: GuitarsData = {
  guitars: [],
  guitar: null,
  isDataLoaded: false,
  isGuitarLoading: false,
  isGuitarError: false,
};

const guitarsData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadGuitars, (state, action) => {
      state.guitars = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadGuitar, (state) => {
      state.isGuitarLoading = true;
      state.isGuitarError = false;
    })
    .addCase(loadGuitarSuccess, (state, action) => {
      state.guitar = action.payload;
      state.isGuitarLoading = false;
    })
    .addCase(loadGuitarError, (state) => {
      state.isGuitarLoading = false;
      state.isGuitarError = true;
    });
});

export {guitarsData};
