import { RootState } from '../store/root-reducer';
import { Guitar } from './guitar';

type GuitarsData = {
  guitars: Guitar[];
  guitar: Guitar | null;
  isDataLoaded: boolean;
  isGuitarLoading: boolean;
  isGuitarError: boolean;
};

type AppProcess = {
  searchValue: string;
}

export type State = RootState;

export type {GuitarsData, AppProcess};
