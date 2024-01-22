import React, {useState} from 'react';
import {Container} from '@mui/material';
import {useLoginStyles} from "../themes/LoginTheme";
import {SignUpForm} from "../components/SignUpForm";
import axios from "axios";

export const SignUp = () => {
    const styles = useLoginStyles();
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        // Add more fields as needed
    });
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setInputs({...inputs, [name]: value});
    };

    const onSubmitSignUpForm = async (event) => {
        event.preventDefault();
        // Perform validation, make sure passwords match, etc.
        if (inputs.password !== inputs.confirmPassword) {
            setErrorMessage("Passwords don't match.");
            return;
        }
        try {
            const response = await axios.post('/api/sign-up', inputs);
            // Send data to your API or server
            // const response = await yourSignUpFunction(inputs);
            // Handle response
        } catch (error) {
            setErrorMessage(error.message || 'An unexpected error occurred.');
            console.error('Sign up error', error);
        }
    };

    return (
        <Container maxWidth={false} style={styles.container}>
            <SignUpForm
                inputs={inputs}
                handleInputChange={handleInputChange}
                onSubmitSignInForm={onSubmitSignUpForm}
                styles={styles}
                errorMessage={errorMessage}
            />
        </Container>
    );
};

export default SignUp;
