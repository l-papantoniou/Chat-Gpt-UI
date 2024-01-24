import React, {createContext, useContext, useEffect, useState} from 'react';
import {ThemeProvider as MUIThemeProvider} from '@mui/material/styles';
import {darkTheme, lightTheme} from "../themes/theme";

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({children}) => {
    // Retrieve theme mode from local storage or default to 'light'
    const [mode, setMode] = useState(() => {
        const storedMode = localStorage.getItem('themeMode');
        return storedMode || 'light';
    });

    const theme = mode === 'light' ? lightTheme : darkTheme;

    const toggleTheme = () => {
        setMode((prevMode) => {
            const newMode = prevMode === 'light' ? 'dark' : 'light';
            localStorage.setItem('themeMode', newMode); // Store new mode in local storage
            return newMode;
        });
    };

    useEffect(() => {
        localStorage.setItem('themeMode', mode); // Store current mode when it changes
    }, [mode]);

    return (
        <ThemeContext.Provider value={{mode, toggleTheme}}>
            <MUIThemeProvider theme={theme}>
                {children}
            </MUIThemeProvider>
        </ThemeContext.Provider>
    );
};