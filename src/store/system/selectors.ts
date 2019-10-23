import { TAppState } from '../../store';

export function selectCurrentPage(state: TAppState) {
  return state.system.currentPage;
}

export function selectLastViewedJoke(state: TAppState) {
  return state.system.lastViewedJoke;
}

export function selectShouldRefetchJokes(state: TAppState) {
  return state.system.shouldRefetchJokes;
}
