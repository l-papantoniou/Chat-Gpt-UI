import React, {useState} from 'react';
import HotelForm from '../components/HotelForm';
import {Box} from '@mui/material';
import {useHotelFormStyle} from "../themes/HotelFormTheme";
import axiosInstance from "../utils/axiosInstance";
import {useAuth} from "../shared/AuthContext";
import {useNavigate} from "react-router-dom";
import CustomSnackbar from "../shared/CustomSnackBar";

export const InputHotelPage = () => {

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

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
    });
    const handleClearForm = () => {
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

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axiosInstance.post('/hotel-companies/create', hotel);
            if (response.status === 201) {
                setSuccessMessage("Hotel company successfully submitted");
                setErrorMessage(""); // Clear any previous error

                setTimeout(() => {
                    setSuccessMessage(''); // Hide the success message
                    navigate('/hotel-companies'); // Update this with your actual route
                }, 1500); // Navigate after 1.5 seconds
            } else {
                setErrorMessage("Failed to create hotel company");
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
