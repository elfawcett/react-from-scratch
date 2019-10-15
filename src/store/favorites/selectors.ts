import { TAppState } from '../../store';

export function selectFavorites(state: TAppState) {
  return state.favorites;
}
