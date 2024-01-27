import React, {useState} from 'react';
import HotelForm from '../components/HotelForm';
import {Box, Snackbar} from '@mui/material';
import {useHotelFormStyle} from "../themes/HotelFormTheme";
import axiosInstance from "../utils/axiosInstance";
import {useAuth} from "../shared/AuthContext";
import {useNavigate} from "react-router-dom";
import {Alert} from "@mui/lab";
import CustomSnackbar from "../shared/CustomSnackBar";

export const InputHotelPage = () => {

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);

    const navigate = useNavigate();
    const {user} = useAuth();
    const styles = useHotelFormStyle();

    const handleSnackbarClose = () => {
        setSuccessMessage('');
        setErrorMessage('');
    };

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
            if (response.status === 200) {
                setSuccessMessage("Hotel company successfully submitted");
                setErrorMessage(""); // Clear any previous error

                setIsSubmissionSuccessful(true);
                setTimeout(() => {
                    setSuccessMessage(''); // Hide the success message
                    navigate('/hotel-companies'); // Update this with your actual route
                }, 1500); // Navigate after 1.5 seconds
            } else {
                setErrorMessage("Failed to update hotel company");
            }
        } catch (error) {
            setErrorMessage(error.message || 'An unexpected error occurred.');
            setSuccessMessage(''); // Clear any previous success message
        }
    }

    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
            <CustomSnackbar
                open={!!successMessage || !!errorMessage}
                message={successMessage || errorMessage}
                onClose={handleSnackbarClose}
                severity={successMessage ? "success" : "error"}
            />
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
