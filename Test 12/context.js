
import React, { createContext, useReducer } from 'react';


const CounterContext = createContext();

const initialState = { count: 0 };


const counter = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};


const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(counter, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export { CounterContext, Provider };
