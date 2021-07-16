import React, {useReducer, createContext} from 'react';

export const TransactionContext = createContext();

const initialState = {
  transactions: [],
  loading: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_TRANSACTIONS':
      return {
        ...state,
        transactions: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const TransactionProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TransactionContext.Provider value={[state, dispatch]}>
      {props.children}
    </TransactionContext.Provider>
  );
};
