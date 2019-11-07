import { TFavoritesState, Actions, TFavoritesActions } from './types';

const initialState: TFavoritesState = [];

function favoritesReducer(state = initialState, action: TFavoritesActions): TFavoritesState {
  switch (action.type) {
    case Actions.ADD_TO_FAVORITES:
      return state.includes(action.id) ? state : state.concat(action.id);

    case Actions.REMOVE_FROM_FAVORITES:
      return state.filter(id => id !== action.id);

    default:
      return state;
  }
}

export { favoritesReducer };
