import {Avatar, Box, Button, TextField, Typography} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React from "react";
import {ErrorMessage} from "../shared/ErrorMessage";

export const SignUpForm = ({inputs, handleInputChange, onSubmitSignInForm, styles, errorMessage}) => {
    return (
        <>
            <Avatar sx={styles.logo}>
                <AccountCircleIcon/>
            </Avatar>
            <Typography sx={styles.typographyLogin}>
                Sign Up
            </Typography>
            <ErrorMessage message={errorMessage}/>
            <Box component="form" onSubmit={onSubmitSignInForm}>
                <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={inputs.email}
                    onChange={handleInputChange}
                    margin="normal"
                />
                <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    value={inputs.password}
                    onChange={handleInputChange}
                    margin="normal"
                />
                <TextField
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    id="confirmPassword"
                    autoComplete="new-password"
                    value={inputs.confirmPassword}
                    onChange={handleInputChange}
                    margin="normal"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={styles.submitButton}
                >
                    Sign Up
                </Button>
            </Box>
        </>
    )
}