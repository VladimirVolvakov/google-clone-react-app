import { createContext, useContext, useReducer } from "react";

// Create data layer:
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Hook for pulling info from data layer:
export const useStateValue = () => useContext(StateContext);