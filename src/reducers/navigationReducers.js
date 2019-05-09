import { TOGGLE_SIDEBAR } from '../actions/constants';

const defaultState = {
  isSidebarOpen: false,
};

export default function naviationReducer(state = defaultState, action) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, isSidebarOpen: !state.isSidebarOpen };
    default:
      return state;
  }
}
