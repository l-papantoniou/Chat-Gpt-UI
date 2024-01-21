import React, {useState} from 'react';
import {Container} from '@mui/material';
import axios from 'axios';
import {useLoginStyles} from "../themes/LoginTheme";
import {LoginForm} from "../components/LoginForm";


const Login = () => {
    const [inputs, setInputs] = useState({email: '', password: ''});
    const [errorMessage, setErrorMessage] = useState('');

    const styles = useLoginStyles();

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setInputs({...inputs, [name]: value});
    };

    const onSubmitLoginForm = async (event) => {
        event.preventDefault()
        try {
            const response = await axios.post('/api/login', inputs);
            if (response.status === 200) {
                localStorage.setItem("Authorization", response.headers["authorization"]);
            } else {
                // Handle any non-200 responses here
                setErrorMessage("Login failed. Please check your credentials.");
            }
        } catch (error) {
            setErrorMessage(error.response?.data?.message || 'An unexpected error occurred');
            console.error('Login error', error);
        }
    };


    return (
        <Container maxWidth={false} style={styles.container}>
            <LoginForm
                inputs={inputs}
                handleInputChange={handleInputChange}
                onSubmitLoginForm={onSubmitLoginForm}
                styles={styles}
                errorMessage={errorMessage}
            />
        </Container>
    );
};

export default Login;
