import React, { useReducer } from 'react';
import { createContext } from "react";

const initialTheme = {
    backgroundColor: "#464660",
    color: "#F1E9E5"
}

export const ThemeContext = createContext(initialTheme);


export const ThemeProvider = props => {
    const [state, dispatch] = useReducer(themeReducer, initialTheme);

    return <ThemeContext.Provider value={{ ...state, dispatch }}>
        {props.children}
    </ThemeContext.Provider>;
}

const themeReducer = (state = initialTheme, action) => {
    switch (action.type) {
        case 'CHANGE_THEME': {
            if (state.backgroundColor === 'black')
            return {
                backgroundColor: "white",
                color: "black"
            }
            return initialTheme;
        }
        default: return { ...state }
    }
}