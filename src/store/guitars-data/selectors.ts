import { NameSpace } from '../root-reducer';
import { State } from '../../types/state';
import { Guitar } from '../../types/guitar';

const getGuitars = (state: State): Guitar[] => state[NameSpace.Data].guitars;
const getGuitar = (state: State): Guitar | null => state[NameSpace.Data].guitar;
const getIsDataLoaded = (state: State): boolean => state[NameSpace.Data].isDataLoaded;
const getIsGuitarLoading = (state: State): boolean => state[NameSpace.Data].isGuitarLoading;
const getIsGuitarError = (state: State): boolean => state[NameSpace.Data].isGuitarError;

export {getGuitars, getIsDataLoaded, getGuitar, getIsGuitarLoading, getIsGuitarError};
