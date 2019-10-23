import { ThunkAction } from 'redux-thunk';

import { Requester } from '../../lib/Requester';
import { Actions, TJokesActions } from './types';
import { IJoke, TThunkResult } from '../../types';

const requestClient = new Requester();

/* Request-related action creators, only get dispatched by thunks */
function getJokeRequesting(): TJokesActions {
  return {
    type: Actions.GET_JOKE_REQUESTING,
    requesting: true,
  };
}

function getJokeFailure(err: any): TJokesActions {
  return {
    type: Actions.GET_JOKE_FAILURE,
    requesting: false,
    err,
  };
}

function getJokeSuccess(joke: IJoke): TJokesActions {
  return {
    type: Actions.GET_JOKE,
    requesting: false,
    joke,
  };
}

export function getJoke(id: number): TThunkResult<Promise<IJoke>> {
  return async dispatch => {
    let joke;

    dispatch(getJokeRequesting());

    try {
      joke = await requestClient.getJoke(id);
      dispatch(getJokeSuccess(joke));
    } catch (err) {
      dispatch(getJokeFailure(err));
      return err;
    }

    return joke;
  };
}

/* Request-related action creators, only get dispatched by thunks */
/* Extract these into requestActionFactory */
function getJokesRequesting(): TJokesActions {
  return {
    type: Actions.GET_JOKES_REQUESTING,
    requesting: true,
  };
}

function getJokesFailure(err: any): TJokesActions {
  return {
    type: Actions.GET_JOKES_FAILURE,
    requesting: false,
    err,
  };
}

function getJokesSuccess(jokes: IJoke[]): TJokesActions {
  return {
    type: Actions.GET_JOKES,
    requesting: false,
    jokes,
  };
}

export function getJokes(): TThunkResult<Promise<IJoke[]>> {
  return async dispatch => {
    let jokes;

    dispatch(getJokesRequesting());

    try {
      jokes = await requestClient.getJokes();
      dispatch(getJokesSuccess(jokes));
    } catch (err) {
      dispatch(getJokesFailure(err));
      return err;
    }

    return jokes;
  };
}
