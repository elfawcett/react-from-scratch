import { IRequestAction, IJoke } from '../../types';

/* All action constants */
export enum Actions {
  GET_JOKE = 'GET_JOKE',
  GET_JOKE_REQUESTING = 'GET_JOKE_REQUESTING',
  GET_JOKE_FAILURE = 'GET_JOKE_FAILURE',

  GET_JOKES = 'GET_JOKES',
  GET_JOKES_REQUESTING = 'GET_JOKES_REQUESTING',
  GET_JOKES_FAILURE = 'GET_JOKES_FAILURE',
}

/* Joke actions */
interface IGetJokeAction extends IRequestAction<Actions.GET_JOKE> {
  joke: IJoke;
}

interface IGetJokeRequestingAction extends IRequestAction<Actions.GET_JOKE_REQUESTING> {}
interface IGetJokeFailureAction extends IRequestAction<Actions.GET_JOKE_FAILURE> {}

type TGetJokeActions = IGetJokeAction | IGetJokeRequestingAction | IGetJokeFailureAction;

/* Jokes actions */
interface IGetJokesAction extends IRequestAction<Actions.GET_JOKES> {
  jokes: IJoke[];
}

interface IGetJokesRequestingAction extends IRequestAction<Actions.GET_JOKES_REQUESTING> {}
interface IGetJokesFailureAction extends IRequestAction<Actions.GET_JOKES_FAILURE> {}

type TGetJokesActions = IGetJokesAction | IGetJokesRequestingAction | IGetJokesFailureAction;

/* Actions and State */
export type TJokesActions = TGetJokeActions | TGetJokesActions;
export interface IJokesState {
  jokes: IJoke[];
  isRequesting: boolean;
  err?: Error;
}
