import React, {useState} from 'react';
import HotelForm from '../components/HotelForm';
import {Box, Snackbar} from '@mui/material';
import {useHotelFormStyle} from "../themes/HotelFormTheme";
import axiosInstance from "../utils/axiosInstance";
import {amenityOptions} from "../statics/amenityOptions";
import {useAuth} from "../shared/AuthContext";
import {useNavigate} from "react-router-dom";
import {Alert} from "@mui/lab";

export const InputHotelPage = () => {

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);

    const navigate = useNavigate();
    const {user} = useAuth();
    const styles = useHotelFormStyle();

    const [hotel, setHotel] = useState({
        name: '',
        location: '',
        description: '',
        type: '',
        hotelier: user.id,
        assets: {},
        // Assuming this is a selection of predefined types
    });
    const handleClearForm = () => {
        // Clear the form by resetting the hotel state
        setHotel({
            name: '',
            location: '',
            type: '',
            description: '',
            hotelier: user.id,
            assets: {},
        });
    };
    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setHotel({...hotel, [name]: value});
    };

    const renderSnackbar = () => {
        return (
            <Snackbar
                open={!!successMessage || !!errorMessage}
                autoHideDuration={6000}
                onClose={() => {
                    setSuccessMessage('');
                    setErrorMessage('');
                }}
                anchorOrigin={{vertical: 'top', horizontal: 'right'}} // Positioning it at the top-right
                sx={{
                    // Custom styling
                    '& .MuiSnackbarContent-root': {
                        minWidth: '400px', // Adjust size
                        fontSize: '1rem', // Adjust font size
                    }
                }}
            >
                <Alert
                    onClose={() => {
                        setSuccessMessage('');
                        setErrorMessage('');
                    }}
                    severity={successMessage ? "success" : "error"}
                    sx={{width: '100%'}}
                >
                    {successMessage || errorMessage}
                </Alert>
            </Snackbar>
        );
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axiosInstance.post('/hotel-companies/create', hotel);
            setSuccessMessage("Hotel company successfully submitted");
            setErrorMessage(""); // Clear any previous error

            setIsSubmissionSuccessful(true);
            setTimeout(() => {
                setSuccessMessage(''); // Hide the success message
                navigate('/hotel-companies'); // Update this with your actual route
            }, 2000); // Navigate after 2 seconds


            // Send data to your API or server
            // const response = await yourSignUpFunction(inputs);
            // Handle response
        } catch (error) {
            setErrorMessage(error.message || 'An unexpected error occurred.');
            setSuccessMessage(''); // Clear any previous success message
            console.error('Sign up error', error);
        }
    }

    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
            {renderSnackbar()}
            <HotelForm
                hotel={hotel}
                setHotel={setHotel}
                styles={styles}
                errorMessage={errorMessage}
                handleInputChange={handleInputChange}
                clearForm={handleClearForm}
                handleSubmit={handleSubmit}
            />
        </Box>
    );
};
