import { CHANGE_ACCOUNT_ANCHOR_EL } from "../actions/changeAccountAnchorEl";
import { CHANGE_HEADER_BUTTON_TO_CLOSE } from "../actions/changeHeaderButtonToClose";

const initialState = {
  accountAnchorEl: null
};

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
  case CHANGE_ACCOUNT_ANCHOR_EL:
    return Object.assign({}, state, {
      accountAnchorEl: action.value
    });
  case CHANGE_HEADER_BUTTON_TO_CLOSE:
    return Object.assign({}, state, {
      accountAnchorEl: null
    });
  default:
    return state;
  }
};

export default headerReducer;
