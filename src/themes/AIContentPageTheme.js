import {deepOrange} from "@mui/material/colors";

export const useAIContentPageTheme = () => {

    return {
        Box: {
            minHeight: 100,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            p: 4,
            backgroundColor: 'background.paper',
            borderRadius: 2,
            boxShadow: 3,
            my: 4,
            gap: 3,
        },

        Typography: {
            mb: 2,
            fontWeight: 'bold',
            color: 'primary.secondary'
        },

        Paper: {
            p: 3,
            width: '100%',
            bgcolor: 'background.level2'
        },

        Button: {
            padding: '15px 20px',
            backgroundColor: '#e1540b',
            '&:hover': {
                backgroundColor: '#af2e0a',
            },
            my: 2,
            fontSize: '1.2rem',
            boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.3)'
        },

        TranslateButton: {
            padding: '10px 10px',
            backgroundColor: '#e1540b',
            '&:hover': {
                backgroundColor: '#af2e0a',
            },
            my: 2,
            fontSize: '1rem',
            boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.3)'
        },

        Tooltip: {
            padding: '15px 20px',
            backgroundColor: '#ee4e4e',
            color: 'white',
            boxShadow: '0 1px 4px rgba(0, 0, 0, 0.2)',
            fontSize: '0.875rem',
            border: '1px solid #ddd',
            borderRadius: 4,
        },

        lightBulbIcon: {
            mr: 1,
            color: deepOrange[700],
            fontSize: 30,
            '&:hover': {
                color: deepOrange[900],
            },
        },

        infoButton: {
            mr: 1,
            color: deepOrange[700],
            '&:hover': {
                color: deepOrange[900],
            },
        },
        TranslationSection: {
            p: 3,
            width: '100%',
            bgcolor: 'background.level2',
            borderRadius: 2,
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            mt: 2
        },
        SelectMenu: {
            borderRadius: '15px',
            border: '1px #ced4da',
            mb: 2,
            '& .MuiSelect-select': {
                padding: '10px 15px'
            }
        },
        SelectIcon: {
            color: 'secondary.main',
            mr: 1,
            fontSize: '1.2rem'
        },
        SelectLabel: {
            fontWeight: 'medium'
        }
    }

}