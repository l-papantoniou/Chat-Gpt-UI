import {useTheme} from "@mui/material";

export const useLoginStyles = () => {
    const theme = useTheme();
    return {
        formPaper: {
            padding: theme.spacing(20, 10),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: theme.shape.borderRadius,
            minWidth: 600,
            minHeight: 650,
            margin: 0,
            overflow: "auto"
        },
        logo: {
            bgcolor: '#354e70',
            marginBottom: theme.spacing(1),
        },
        appLogo: {
            maxWidth: '180px',
            marginTop: "-50px",
            marginBottom: "50px"
        },
        appMoto: {
            maxWidth: '230px',
            marginTop: "5px"
        },
        typographyLogin: {
            marginBottom: theme.spacing(2),
            fontFamily: 'Roboto, Lato, Sans Serif',
            fontSize: 30,
            lineHeight: 2,
        },
        input: {
            marginBottom: theme.spacing(2),
        },
        submitButton: {
            marginTop: theme.spacing(2),
            textTransform: 'none', // Prevents uppercase transformation
            backgroundColor: '#405d8a', // Example button color
            color: 'white',
            '&:hover': {
                backgroundColor: '#182c46', // Darken the color slightly on hover
            }
        },
        loginForm: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: theme.spacing(2),
            borderRadius: theme.shape.borderRadius,
            boxShadow: theme.shadows[2],
            backgroundColor: 'white', // Set the background color of the form
        },
        link: {
            textDecoration: 'none',
            color: theme.palette.secondary.main, // Use secondary color from the theme
            '&:hover': {
                textDecoration: 'underline', // Optional: add underline on hover
                color: theme.palette.secondary.dark, // Darken color on hover
            }
        },
        container: {
            height: '85vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }

    };
};
