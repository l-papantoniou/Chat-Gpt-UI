import { createTheme } from "@mui/material/styles";
import grey from "@mui/material/colors/grey";

const getDesignTokens = (mode) => ({
    components: {
        // ...other overrides
    },
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                // Palette values for light mode
                primary: {
                    main: '#dadada',
                    dark: '#4C617EFF',
                },
                secondary: {
                    main: '#4c617e',
                    contrastText: grey[50],
                },
                background: {
                    default: '#ffffff',
                    paper: grey[100],
                },
                text: {
                    primary: grey[900],
                    secondary: grey[800],
                },
                // ...other light mode colors
            }
            : {
                // Palette values for dark mode
                primary: {
                    main: '#5a5c5a',
                    dark: '#33363a',
                },
                secondary: {
                    main: '#4c617e',
                    contrastText: grey[300],
                },
                background: {
                    default: grey[900],
                    paper: grey[800],
                },
                text: {
                    primary: '#ffffff',
                    secondary: grey[500],
                },
                // ...other dark mode colors
            }),
    },
    shape: {
        borderRadius: 20,
    },
});

// Create a theme instance with light mode as default
export const lightTheme = createTheme(getDesignTokens('light'));

// Create a theme instance with dark mode
export const darkTheme = createTheme(getDesignTokens('dark'));
