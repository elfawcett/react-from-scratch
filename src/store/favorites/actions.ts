import { Actions, TFavoritesActions } from './types';
import { IJoke } from '../../types';

export function addToFavorites(id: IJoke['id']): TFavoritesActions {
  return {
    type: Actions.ADD_TO_FAVORITES,
    id,
  };
}

export function removeFromFavorites(id: IJoke['id']): TFavoritesActions {
  return {
    type: Actions.REMOVE_FROM_FAVORITES,
    id,
  };
}
