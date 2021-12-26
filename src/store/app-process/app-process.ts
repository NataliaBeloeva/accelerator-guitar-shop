import { createReducer } from '@reduxjs/toolkit';
import { AppProcess } from '../../types/state';
import { setSearchValue} from '../action';

const initialState: AppProcess = {
  searchValue: '',
};

const appProcess = createReducer(initialState, (builder) => {
  builder
    .addCase(setSearchValue, (state, action) => {
      state.searchValue = action.payload;
    });
});

export {appProcess};
