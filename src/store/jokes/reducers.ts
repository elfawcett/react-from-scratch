import { IJokesState, Actions, TJokesActions } from './types';

const initialState: IJokesState = {
  jokes: [],
  jokesById: {},
  favorites: [],
};

function jokesReducer(state = initialState, action: TJokesActions): IJokesState {
  switch (action.type) {
    case Actions.GET_JOKES:
      return {
        ...state,
        jokes: action.jokes,
      };

    case Actions.ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.concat(action.id),
      };

    case Actions.REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(id => id !== action.id),
      };

    default:
      return state;
  }
}

export { jokesReducer };
