import React from 'react';
import { Button, TextField, Typography, Grid, Link } from '@mui/material';

const LoginForm = ({ email, setEmail, password, setPassword, handleSubmit }) => {
    return (
        <>
            <Typography component="h1" variant="h5" className="title">
                Sign in
            </Typography>
            <form className="form" noValidate onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Email Address"
                    autoComplete="email"
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className="submit-button"
                >
                    Sign In
                </Button>
                <Grid container>
                    <Grid item>
                        <Link href="#" variant="body2">
                            {"Don't have an account?"}<br/>{"Sign Up"}
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </>
    );
};

export default LoginForm;
