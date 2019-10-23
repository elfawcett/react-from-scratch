import { IJoke } from '../../types';

export enum Actions {
  GET_FAVORITES = 'GET_FAVORITES',
  ADD_TO_FAVORITES = 'ADD_TO_FAVORITES',
  REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES',
}

interface IGetFavoritesAction {
  type: typeof Actions.GET_FAVORITES;
}

interface IAddToFavoritesAction {
  type: typeof Actions.ADD_TO_FAVORITES;
  id: IJoke['id'];
}

interface IRemoveFromFavoritesAction {
  type: typeof Actions.REMOVE_FROM_FAVORITES;
  id: IJoke['id'];
}

export type TFavoritesActions =
  | IGetFavoritesAction
  | IAddToFavoritesAction
  | IRemoveFromFavoritesAction;

export type TFavoritesState = Array<IJoke['id']>;
