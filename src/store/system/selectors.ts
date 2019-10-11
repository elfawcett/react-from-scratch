import { ICombinedState } from '../../types';

export function getCurrentPage(state: ICombinedState) {
  return state.system.currentPage;
}

export function getLastViewedJoke(state: ICombinedState) {
  return state.system.lastViewedJoke;
}
