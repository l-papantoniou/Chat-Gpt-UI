import React, {
    cloneElement,
    Dispatch,
    isValidElement,
    SetStateAction,
    useState,
} from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    TextFieldProps,
    IconButton,
    Typography,
    InputLabel,
    Box,
} from "@mui/material";
import {MuiTooltip} from "./MuiTooltip";


export const CustomMuiTextField = (props) => {
    const {
        className,
        id,
        disabled,
        objectId,
        objectDescr,
        label,
        InputLabelProps,
        value,
        setState,
        state,
        onChange,
        tooltip,
        tooltiptitle,
        error,
        helperText,
    } = props;
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    };

    const reset = (id, objectId, objectDescr, setState) => {
            setState({
                ...state,
                [id]: {
                    [objectId]: null,
                    [objectDescr]: " ",
                },
            });
        }
    ;
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
                disabled={disabled}
                className={className}
                id={id}
                onChange={onChange}
                InputLabelProps={InputLabelProps}
                value={value}
                InputProps={{
                    readOnly: true,
                    endAdornment: (
                        <InputAdornment position="end">
                            <>
                                {!disabled && (
                                    <IconButton onClick={handleOpen}>
                                        <Box
                                            component="img"
                                            sx={{
                                                height: 22,
                                                width: 22,
                                            }}
                                            alt="SearchOutlineIcon"
                                            src="/o/mts-external-app/images/SearchOutlineIcon.svg"
                                        />
                                    </IconButton>
                                )}
                                {value !== null && value !== " " && !disabled && (
                                    <IconButton
                                        onClick={() =>
                                            reset(id, objectId, objectDescr, setState, state)
                                        }
                                    >
                                        <Box
                                            component="img"
                                            sx={{
                                                height: 22,
                                                width: 22,
                                            }}
                                            alt="CloseIcon"
                                            src="/o/mts-external-app/images/CloseIcon.svg"
                                        />
                                    </IconButton>
                                )}
                            </>
                        </InputAdornment>
                    ),
                }}
            ></TextField>
            {open && (
                <Dialog
                    open={open}
                    fullWidth
                    maxWidth="md"
                    data-testid="CustoMuiTextFieldDialog"
                >
                    <DialogTitle>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <Typography color="primary">Επιλέξτε μία τιμή:</Typography>
                            <IconButton onClick={handleOpen}>
                                <Box
                                    component="img"
                                    sx={{
                                        height: 22,
                                        width: 22,
                                    }}
                                    alt="CloseIcon"
                                    src="/o/mts-external-app/images/CloseIcon.svg"
                                />
                            </IconButton>
                        </div>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {isValidElement(props.children) &&
                                cloneElement(props.children, {handleIsOpen: handleOpen})}
                        </DialogContentText>
                    </DialogContent>
                </Dialog>
            )}
        </>
    );
};
