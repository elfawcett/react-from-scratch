import { IJoke } from '../../types';
import { Pages } from '../../constants';

export enum Actions {
  SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
  SET_LAST_VIEWED_JOKE = 'SET_LAST_VIEWED_JOKE',
  SET_SHOULD_REFETCH_JOKES = 'SET_SHOULD_REFETCH_JOKES',
}

interface ISetCurrentPageAction {
  type: typeof Actions.SET_CURRENT_PAGE;
  page: Pages;
}

interface ISetLastViewedJokeAction {
  type: typeof Actions.SET_LAST_VIEWED_JOKE;
  id: IJoke['id'];
}

interface ISetShouldRefetchJokesAction {
  type: typeof Actions.SET_SHOULD_REFETCH_JOKES;
  shouldRefetchJokes: boolean;
}

/* actionCreator(): Ix | Iy | Iz | ...
TS will infer whether actionCreator() is returning Ix, Iy, or Iz
based on the type of common property ({ type: ActionA | ActionB }) */
export type TSystemActions =
  | ISetCurrentPageAction
  | ISetLastViewedJokeAction
  | ISetShouldRefetchJokesAction;

/* State shape */
export interface ISystemState {
  shouldRefetchJokes: boolean;
  currentPage: Pages;
  lastViewedJoke?: IJoke['id'];
}
