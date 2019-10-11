import { IJoke } from '../../types';
import { Pages } from '../../constants';

export enum Actions {
  SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
  SET_LAST_VIEWED_JOKE = 'SET_LAST_VIEWED_JOKE',
}

interface ISetCurrentPageAction {
  type: typeof Actions.SET_CURRENT_PAGE;
  page: Pages;
}

interface ISetLastViewedJokeAction {
  type: typeof Actions.SET_LAST_VIEWED_JOKE;
  id: IJoke['id'];
}

/* actionCreator(): Ix | Iy | Iz | ...
TS will infer whether actionCreator() is returning Ix, Iy, or Iz
based on the type of common property ({ type: ActionA | ActionB }) */
export type TSystemActions = ISetCurrentPageAction | ISetLastViewedJokeAction;

/* State shape */
export interface ISystemState {
  currentPage: Pages;
  lastViewedJoke?: IJoke['id'];
}
