import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import {darkTheme, lightTheme} from "../themes/theme";

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState('light');

    const theme = mode === 'light' ? lightTheme : darkTheme;

    const toggleTheme = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ mode, toggleTheme }}>
            <MUIThemeProvider theme={theme}>
                {children}
            </MUIThemeProvider>
        </ThemeContext.Provider>
    );
};