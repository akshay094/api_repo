import { combineReducers } from "redux";
import { popMenuReducer } from "./reducers/toggleMenuReducer";
const rootReducer = combineReducers({ showPopup: popMenuReducer });

export default rootReducer;
