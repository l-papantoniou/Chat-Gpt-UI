import {useTheme} from "@mui/material";
import {deepOrange, orange, purple} from "@mui/material/colors";

export const useHotelFormStyle = () => {
    const theme = useTheme();
    return {
        container: {},
        input: {
            marginBottom: theme.spacing(2),
        },
        submitButton: {
            marginTop: theme.spacing(1),
            textTransform: 'none', // Prevents uppercase transformation
            backgroundColor: '#405d8a',
            color: 'white',
            '&:hover': {
                backgroundColor: '#182c46', // Darken the color slightly on hover
            }
        },
        clearButton: {
            marginTop: theme.spacing(1),
            textTransform: 'none', // Prevents uppercase transformation
            backgroundColor: '#4e73ab',
            color: 'white',
            '&:hover': {
                backgroundColor: '#2c5183', // Darken the color slightly on hover
            }
        },
        inputForm: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: theme.spacing(2),
            borderRadius: theme.shape.borderRadius,
            boxShadow: theme.shadows[2],
            backgroundColor: 'white', // Set the background color of the form
        },
        inputSection: {
            p: 2,
            borderRadius: '8px',
            boxShadow: '0px 2px 4px rgba(0,0,0,0.2)', // Adds a subtle shadow
        },
        inputField: {
            mr: 1,
        },
        fetchButton: {
            bgcolor: deepOrange[800],
            '&:hover': {
                bgcolor: deepOrange[900],
            },
        },
        infoButton: {
            mr: 1,
            color: deepOrange[800],
            '&:hover': {
                color: deepOrange[900],
            },
        },
    }
}