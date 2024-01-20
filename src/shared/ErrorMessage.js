import {Typography} from "@mui/material";

export const ErrorMessage = ({ message }) => {
    return (
        message ? <Typography color="error">{message}</Typography> : null
    );
};
