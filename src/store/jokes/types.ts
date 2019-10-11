import { IJoke } from '../../types';

export enum Actions {
  GET_JOKES = 'GET_JOKES',
  // JOKES_REQUEST = 'JOKES_REQUEST',
  // JOKES_SUCCESS = 'JOKES_SUCCESS',
  // JOKES_FAILURE = 'JOKES_FAILURE',

  ADD_TO_FAVORITES = 'ADD_TO_FAVORITES',
  REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES',
}

interface IGetJokesAction {
  type: typeof Actions.GET_JOKES;
  /* jokes should be an array of joke IDs that results from some side effect that
  async GETs the jokes or retrieves jokes from cache or something */
  jokes: Array<IJoke['id']>;
}

interface IAddToFavoritesAction {
  type: typeof Actions.ADD_TO_FAVORITES;
  id: IJoke['id'];
}

interface IRemoveFromFavoritesAction {
  type: typeof Actions.REMOVE_FROM_FAVORITES;
  id: IJoke['id'];
}

export type TJokesActions = IGetJokesAction | IAddToFavoritesAction | IRemoveFromFavoritesAction;

export interface IJokesState {
  jokes: Array<IJoke['id']>;
  jokesById: {
    [id: string]: IJoke;
  };
  favorites: Array<IJoke['id']>;
}
