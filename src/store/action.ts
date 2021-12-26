import { createAction } from '@reduxjs/toolkit';
import { ActionType } from '../types/action';
import { Guitar } from '../types/guitar';

const loadGuitars = createAction(
  ActionType.LoadGuitars,
  (guitars: Guitar[]) => ({
    payload: guitars,
  }),
);

const loadGuitar = createAction(ActionType.LoadGuitar);

const loadGuitarSuccess = createAction(
  ActionType.LoadGuitarSuccess,
  (guitar: Guitar) => ({
    payload: guitar,
  }),
);

const loadGuitarError = createAction(ActionType.LoadGuitarError);

const setSearchValue = createAction(
  ActionType.SetSearchValue,
  (searchValue: string) => ({
    payload: searchValue,
  }),
);

export {loadGuitars, loadGuitar, loadGuitarSuccess, loadGuitarError, setSearchValue};
