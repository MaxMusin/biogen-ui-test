export const storeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return { ...state, isOpen: action.isOpen };
    default:
      throw new Error();
  }
};