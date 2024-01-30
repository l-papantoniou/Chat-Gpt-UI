import {useTheme} from "@mui/material";

export const useHotelCompaniesStyle = () => {
    const theme = useTheme();
    return {
        tableContainer: {
            marginTop: theme.spacing(4),
            boxShadow: theme.shadows[3], // Adding some shadow for depth
        },
        tableHeadCell: {
            cursor: 'pointer',
            fontWeight: 'bold',
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.common.white,
            fontSize: '1rem',
            borderBottom: `2px solid ${theme.palette.divider}`, // Adding a custom border
        },
        tableRow: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.background.default, // Slightly different color for alternate rows
            },
            '&:hover': {
                backgroundColor: theme.palette.action.selected,
                cursor: 'pointer', // Change cursor on hover
            },
        },
        tableCell: {
            fontSize: '0.875rem', // Smaller font size for table cells
        },

        tableTitle:{
            p: 2,
            mb: 4,
            borderRadius: '5px',
            boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }
        // Additional styles for buttons, icons, etc.
    };
};