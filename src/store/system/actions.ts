import { Pages } from '../../constants';
import { TSystemActions, Actions } from './types';
import { IJoke } from '../../types';

export function setCurrentPage(page: Pages): TSystemActions {
  return {
    type: Actions.SET_CURRENT_PAGE,
    page,
  };
}

export function setLastViewedJoke(id: IJoke['id']): TSystemActions {
  return {
    type: Actions.SET_LAST_VIEWED_JOKE,
    id,
  };
}
