import { RootState } from '../store/root-reducer';
import { Guitar } from './guitar';

type GuitarsData = {
  guitars: Guitar[];
  isDataLoaded: boolean;
};

export type State = RootState;

export type {GuitarsData};
