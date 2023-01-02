import React, { createContext, useReducer } from "react";
import AppReducer from "./reducer";
import * as AC from "./action";

// Initial state
const initialState = {
  projects: [],
  services: [],
  experience: [],
  contacts: [],
  error: null,
  loading: false,
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        projects: state.projects,
        services: state.services,
        experience: state.experience,
        contacts: state.contacts,
        error: state.error,
        loading: state.loading,
        dispatch,
        ...AC,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
