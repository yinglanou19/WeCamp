export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openModal = formType => {
  return {
    type: OPEN_MODAL,
    formType
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};
