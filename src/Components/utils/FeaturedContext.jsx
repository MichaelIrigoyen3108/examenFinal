import React, { createContext, useReducer, useMemo, useContext } from 'react';

export const initialState = {
  theme: "",
  featuredCards: JSON.parse(localStorage.getItem('card')) || []
};

export const FeaturedContext = createContext(undefined);

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    case 'ADD_FEATURED':
      const updatedAddState = [...state.featuredCards, action.payload];
      localStorage.setItem('featuredCards', JSON.stringify(updatedAddState));
      return { ...state, featuredCards: updatedAddState };
    case 'REMOVE_FEATURED':
      const updatedRemoveState = state.featuredCards.filter(card => card.id !== action.payload.id);
      localStorage.setItem('card', JSON.stringify(updatedRemoveState));
      return { ...state, featuredCards: updatedRemoveState };
    default:
      return state;
  }
};

export const FeaturedProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <FeaturedContext.Provider value={contextValue}>
      {children}
    </FeaturedContext.Provider>
  );
};

export const useFeatured = () => useContext(FeaturedContext);
