import { OPEN_MODAL, CLOSE_MODAL } from "../actions/modal_actions";
const defaultState = {
  formType: "",
  isOpen: false
};
export default (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_MODAL:
      let newState = { formType: action.formType, isOpen: true };
      return newState;

    case CLOSE_MODAL:
      return defaultState;

    default:
      return state;
  }
};
