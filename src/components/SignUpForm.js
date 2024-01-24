import {Avatar, Box, Button, Grid, TextField, Typography} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React from "react";
import {ErrorMessage} from "../shared/ErrorMessage";
import {Link} from "react-router-dom";

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
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    value={inputs.username}
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
                <br/>
                <Grid container justifyContent="flex-end" sx={{mt: 2}}>
                    <Link to="/login" style={styles.link}>
                        Already have an account? Login
                    </Link>
                </Grid>
            </Box>
        </>
    )
}