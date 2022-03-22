import { SHOW_POPUP_MENU, HIDE_POPUP_MENU } from "../actions/actions.types";

const initialState = {
  showMenu: false,
};

export const popMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_POPUP_MENU:
      return {
        ...state,
        showMenu: true,
      };
    case HIDE_POPUP_MENU:
      return {
        ...state,
        showMenu: false,
      };
    default:
      return state;
  }
};
