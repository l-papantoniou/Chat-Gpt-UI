import { createTheme } from "@mui/material/styles";

import grey from "@mui/material/colors/grey";

const theme = () =>
    createTheme({
        palette: {
            primary: {
                main: '#8C6F7B'
            },
            secondary: {
                main: '#ffffff',
                contrastText: grey[50]
            },
            loginForm: {
                main: '#000000'
            }
        },
        shape: {
            borderRadius: 20
        }
    });

export default theme;