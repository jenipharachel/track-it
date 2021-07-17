import ActionType from './types';

export function changeModalView(modalType) {
  return {
    type: ActionType.CHANGE_MODAL_VIEW,
    modalType: modalType,
  };
}
