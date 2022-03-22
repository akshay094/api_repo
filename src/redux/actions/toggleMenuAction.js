import { SHOW_POPUP_MENU, HIDE_POPUP_MENU } from "../actions/actions.types";

export const showPopupMenu = () => {
  return (dispatch) => {
    dispatch({ type: SHOW_POPUP_MENU });
  };
};

export const hidePopupMenu = () => {
  return (dispatch) => {
    dispatch({ type: HIDE_POPUP_MENU });
  };
};
