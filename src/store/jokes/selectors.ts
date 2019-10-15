import { TAppState } from '../../store';

export function selectJokes(state: TAppState) {
  return state.jokes.jokes;
}

export function selectJokesIsRequesting(state: TAppState) {
  return state.jokes.isRequesting;
}
