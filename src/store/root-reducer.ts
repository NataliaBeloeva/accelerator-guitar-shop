import {combineReducers} from 'redux';
import { appProcess } from './app-process/app-process';
import { guitarsData } from './guitars-data/guitars-data';

enum NameSpace {
  Data = 'DATA',
  App = 'APP',
}

const rootReducer = combineReducers({
  [NameSpace.Data]: guitarsData,
  [NameSpace.App]: appProcess,
});

export type RootState = ReturnType<typeof rootReducer>;
export {NameSpace, rootReducer};
