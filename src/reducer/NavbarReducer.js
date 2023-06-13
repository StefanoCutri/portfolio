export const navbarReducer = (state, action) => {
  switch (action.type) {
    case "openNavbar":
      return {
        ...state,
        isNavbarOpen: action.payload,
      };

    default:
      return state;
  }
};
