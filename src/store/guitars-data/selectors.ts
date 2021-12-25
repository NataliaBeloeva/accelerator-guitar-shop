import { NameSpace } from '../root-reducer';
import { State } from '../../types/state';
import { Guitar } from '../../types/guitar';

const getGuitars = (state: State): Guitar[] => state[NameSpace.Data].guitars;
const getIsDataLoaded = (state: State): boolean => state[NameSpace.Data].isDataLoaded;

export {getGuitars, getIsDataLoaded};
