


import React, { createContext, useReducer, useMemo, useContext } from 'react';


export const initialState = {
  theme: localStorage.getItem('theme') || 'light',
  card: JSON.parse(localStorage.getItem('card')) || []
};

export const FeaturedContext = createContext(undefined);


const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_THEME':
      localStorage.setItem('theme', action.payload); 
      return { ...state, theme: action.payload }; 
    case 'ADD_FEATURED':
      const updatedAddState = [...state.card, action.payload]; 
      localStorage.setItem('card', JSON.stringify(updatedAddState)); 
      return { ...state, card: updatedAddState }; 
    case 'REMOVE_FEATURED':
      const updatedRemoveState = state.card.filter(card => card.id !== action.payload.id); 
      localStorage.setItem('card', JSON.stringify(updatedRemoveState)); 
      return { ...state, card: updatedRemoveState }; 
    default:
      return state;
  }
};

export const FeaturedProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState); 

  
  const toggleTheme = () => {
    const newTheme = state.theme === 'light' ? 'dark' : 'light'; 
    dispatch({ type: 'SET_THEME', payload: newTheme }); 
  };


  const addFeatured = (card) => {
    dispatch({ type: 'ADD_FEATURED', payload: card });
  };

  const removeFeatured = (card) => {
    dispatch({ type: 'REMOVE_FEATURED', payload: card });
  };


  const contextValue = useMemo(() => ({
    state,
    dispatch,
    toggleTheme,
    addFeatured,
    removeFeatured
  }), [state]); 
  return (
    <FeaturedContext.Provider value={contextValue}>
      {children}
    </FeaturedContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(FeaturedContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a FeaturedProvider');
  }
  return context.state.theme; 
};


export const useToggleTheme = () => {
  const context = useContext(FeaturedContext);
  if (context === undefined) {
    throw new Error('useToggleTheme must be used within a FeaturedProvider');
  }
  return context.toggleTheme; 
};


export const useFeatured = () => {
  const context = useContext(FeaturedContext);
  if (context === undefined) {
    throw new Error('useFeatured must be used within a FeaturedProvider');
  }
  return context; 
};
