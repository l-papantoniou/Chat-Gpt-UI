import React, { useState } from 'react';
import { Container, Paper } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LoginForm from '../components/LoginForm';
import '../css/LoginPage.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Authentication logic here
    };

    return (
        <Container component="main" maxWidth="xs" className="login-container">
            <Paper className="login-paper" elevation={6}>
                <div className="icon-container">
                    <LockOutlinedIcon color="primary" style={{ fontSize: 40 }} />
                </div>
                <LoginForm
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    handleSubmit={handleSubmit}
                />
            </Paper>
        </Container>
    );
}

export default LoginPage;
