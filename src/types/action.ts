import { ThunkAction } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { Action } from 'redux';
import { State } from './state';

enum ActionType {
  LoadGuitars = 'data/loadGuitars',
  LoadGuitar = 'data/loadGuitar',
  LoadGuitarSuccess = 'data/loadGuitarSuccess',
  LoadGuitarError = 'data/loadGuitarError',
  SetSearchValue = 'app/setSearchValue',
}

type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;

export {ActionType};
export type {ThunkActionResult};
