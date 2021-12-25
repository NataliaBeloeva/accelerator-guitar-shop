import { ThunkAction } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { Action } from 'redux';
import { State } from './state';

enum ActionType {
  LoadGuitars = 'data/loadGuitars',
}

type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;

export {ActionType};
export type {ThunkActionResult};
