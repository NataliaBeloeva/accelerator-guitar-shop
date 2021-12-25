import {toast} from 'react-toastify';
import {ThunkActionResult} from '../types/action';
import {loadGuitars} from './action';
import {ApiRoute, ServiceMessage} from '../const';
import { Guitar } from '../types/guitar';

const fetchGuitars = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.get<Guitar[]>(ApiRoute.Guitars);
      dispatch(loadGuitars(data));
    } catch {
      toast.error(ServiceMessage.ServerFail);
    }
  };

export {fetchGuitars};
