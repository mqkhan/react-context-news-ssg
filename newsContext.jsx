import React, { createContext, useReducer, useContext } from "react";

// Define your initial state
const initialState = {
  news: [],
};

// Create the context
const NewsContext = createContext();

// Create the reducer function
const newsReducer = (state, action) => {
  switch (action.type) {
    case "SET_NEWS":
      return {
        ...state,
        news: action.payload,
      };
    default:
      return state;
  }
};

// Create a custom hook to use the NewsContext
// const useNewsContext = () => {
//   const context = useContext(NewsContext);
//   if (!context) {
//     throw new Error("useNewsContext must be used within a NewsProvider");
//   }
//   return context;
// };

// Create the NewsProvider component
const NewsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(newsReducer, initialState);

  const setNews = (news) => {
    dispatch({
      type: "SET_NEWS",
      payload: news,
    });
  };

  return (
    <NewsContext.Provider value={{ state, setNews }}>
      {children}
    </NewsContext.Provider>
  );
};

const useNewsContext = () => useContext(NewsContext);

export { NewsProvider, useNewsContext };
