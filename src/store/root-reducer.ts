import {combineReducers} from 'redux';
import { guitarsData } from './guitars-data/guitars-data';

enum NameSpace {
  Data = 'DATA',
}

const rootReducer = combineReducers({
  [NameSpace.Data]: guitarsData,
});

export type RootState = ReturnType<typeof rootReducer>;
export {NameSpace, rootReducer};
