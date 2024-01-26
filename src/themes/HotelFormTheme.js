import {useTheme} from "@mui/material";

export const useHotelFormStyle = () => {
    const theme = useTheme();
    return {
        container: {
        },
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
    }
}