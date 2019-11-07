import { IJokesState, Actions, TJokesActions } from './types';

const initialState: IJokesState = {
  isRequesting: false,
  jokes: [],
};

function jokesReducer(state = initialState, action: TJokesActions): IJokesState {
  switch (action.type) {
    case Actions.GET_JOKE_REQUESTING:
    case Actions.GET_JOKE_FAILURE:
    case Actions.GET_JOKES_REQUESTING:
    case Actions.GET_JOKES_FAILURE:
      return {
        ...state,
        isRequesting: action.requesting,
        err: action.err,
      };

    case Actions.GET_JOKE:
      return {
        ...state,
        isRequesting: action.requesting,
        jokes: [action.joke],
      };

    case Actions.GET_JOKES:
      return {
        ...state,
        isRequesting: action.requesting,
        jokes: action.jokes,
      };

    default:
      return state;
  }
}

export { jokesReducer };
