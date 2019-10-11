import { Pages } from '../../constants';
import { ISystemState, Actions, TSystemActions } from './types';

const initialState: ISystemState = {
  currentPage: Pages.LANDING,
};

function systemReducer(state = initialState, action: TSystemActions): ISystemState {
  switch (action.type) {
    case Actions.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page,
      };

    case Actions.SET_LAST_VIEWED_JOKE:
      return {
        ...state,
        lastViewedJoke: action.id,
      };

    default:
      return state;
  }
}

export { systemReducer };
