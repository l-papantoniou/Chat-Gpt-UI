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
                Εγγραφείτε
            </Typography>
            <ErrorMessage message={errorMessage}/>
            <Box component="form" onSubmit={onSubmitSignInForm}>
                <TextField
                    required
                    fullWidth
                    id="email"
                    label="Διεύθυνση Email"
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
                    label="Όνομα Χρήστη"
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
                    label="Κωδικός"
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
                    label="Επιβεβαίωση Κωδικού"
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
                    Εγγραφή
                </Button>
                <br/>
                <Grid container justifyContent="flex-end" sx={{mt: 2}}>
                    <Link to="/login" style={styles.link}>
                        Έχετε ήδη λογαριασμό; Συνδεθείτε
                    </Link>
                </Grid>
            </Box>
        </>
    )
}