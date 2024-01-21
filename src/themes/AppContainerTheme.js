import {useTheme} from "@mui/material";

export const useAppContainerStyles = () => {
    const theme = useTheme();
    return {
        appBar: {
            backgroundColor: '#354e70',
            color: theme.palette.primary.contrastText,
            boxShadow: theme.shadows[7],
            borderRadius:'12px'
        },
    }
}