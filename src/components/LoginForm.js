import {Avatar, Box, Button, Grid, TextField, Typography} from "@mui/material";
import React from "react";
import {ErrorMessage} from "../shared/ErrorMessage";
import LockIcon from "@mui/icons-material/Lock";
import {Link} from "react-router-dom";

export const LoginForm = ({inputs, handleInputChange, onSubmitLoginForm, styles, errorMessage}) => {
    return (
        <>
            <Avatar sx={styles.logo}>
                <LockIcon/>
            </Avatar>
            <Typography sx={styles.typographyLogin}>
                Login
            </Typography>
            <ErrorMessage message={errorMessage}/>
            <Box component="form" onSubmit={onSubmitLoginForm}>
                <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="off"
                    value={inputs.email}
                    onChange={handleInputChange}
                    sx={styles.input}
                />
                <TextField
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    type="password"
                    name="password"
                    autoComplete="off"
                    value={inputs.password}
                    onChange={handleInputChange}
                    sx={styles.input}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={styles.submitButton}
                >
                    Sign In
                </Button>
                <br/>
                <Grid container justifyContent="flex-end" sx={{mt: 2}}>
                    <Link to="/sign-up" style={styles.link}>
                        Don't have an account? Sign Up
                    </Link>
                </Grid>
            </Box>
        </>
    )
}