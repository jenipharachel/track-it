import ActionType from '../actions/types';

const defaultState = {
  modalType: 'Add',
};

const modal = function (state = defaultState, action) {
  switch (action.type) {
    case ActionType.CHANGE_MODAL_VIEW:
      return {
        ...state,
        modalType: action.modalType,
      };

    default:
      return state;
  }
};

export default modal;
