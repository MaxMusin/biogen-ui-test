import React, {createContext, useReducer} from 'react';
import {storeReducer} from '../reducers/storeReducer';

const initialState = {
  isOpen: false,
};

export const StoreContext = createContext(initialState);

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
};

export default StateProvider;