import React from "react";
import {
    InputLabel,
    Typography,
    TextField,
    TextFieldProps,
} from "@mui/material";
import {MuiTooltip} from "./MuiTooltip";


export const MuiTextfield = (props) => {
    const {
        className,
        label,
        value,
        id,
        onChange,
        error,
        helperText,
        disabled,
        inputProps,
        tooltip,
        tooltiptitle,
    } = props;

    return (
        <>
            <InputLabel htmlFor={id}>
                <Typography gutterBottom variant="h4">
                    {label}
                    {tooltip && <MuiTooltip tooltiptitle={tooltiptitle}/>}
                </Typography>
            </InputLabel>
            <TextField
                error={error}
                helperText={helperText}
                variant="outlined"
                disabled={disabled}
                className={className}
                id={id}
                value={value}
                onChange={onChange}
                inputProps={inputProps}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </>
    );
};
