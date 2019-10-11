import { _mockJokes } from '../../constants';
import { IJoke } from '../../types';
import { Actions, TJokesActions } from './types';

export function fetchJokes(): TJokesActions {
  return {
    type: Actions.GET_JOKES,
    jokes: _mockJokes.map(joke => joke.id),
  };
}

export function addToFavorites(id: IJoke['id']): TJokesActions {
  return {
    type: Actions.ADD_TO_FAVORITES,
    id,
  };
}

export function removeFromFavorites(id: IJoke['id']): TJokesActions {
  return {
    type: Actions.REMOVE_FROM_FAVORITES,
    id,
  };
}
