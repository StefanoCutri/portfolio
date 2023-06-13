import { useReducer } from "react";
import { navbarReducer } from "../reducer/NavbarReducer";
import NavbarContext from "./NavbarContext";

const NavbarProvider = ({ children }) => {
  const navbar_state = {
    isNavbarOpen: false,
  };

  const [navbarState, dispatch] = useReducer(navbarReducer, navbar_state);

  const handleOpen = (isNavbarOpen) => {
    dispatch({ type: "openNavbar", payload: isNavbarOpen });
  };

  return (
    <NavbarContext.Provider
      value={{
        navbarState,
        handleOpen,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

export default NavbarProvider;
