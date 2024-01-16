import React from "react";
import {FormControl, FormHelperText, InputLabel, MenuItem, Select, Typography,} from "@mui/material";
import {MuiTooltip} from "./MuiTooltip";


export const MuiSelect = (props) => {
    const {
        className,
        label,
        disabled,
        id,
        value,
        options,
        onChange,
        tooltip,
        tooltiptitle,
        error,
        helperText,
    } = props;

    return (
        <>
            <InputLabel htmlFor={id}>
                <Typography gutterBottom variant="h4">
                    {label}
                    {tooltip && <MuiTooltip tooltiptitle={tooltiptitle}/>}
                </Typography>
            </InputLabel>
            <FormControl
                error={error}
                className={className}
                variant="outlined"
                disabled={disabled}
            >
                <Select
                    data-testid="muiSelect"
                    variant="outlined"
                    id={id}
                    onChange={onChange}
                    defaultValue={value}
                    value={value}
                    MenuProps={{PaperProps: {sx: {maxHeight: 250}}}}
                >
                    {options?.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </Select>
                {error && <FormHelperText>{helperText}</FormHelperText>}
            </FormControl>
        </>
    );
};
