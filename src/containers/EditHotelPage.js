import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import HotelForm from '../components/HotelForm';
import axiosInstance from "../utils/axiosInstance";
import {useHotelFormStyle} from "../themes/HotelFormTheme";
import {useAuth} from "../shared/AuthContext";
import {Box} from "@mui/material";
import CustomSnackbar from "../shared/CustomSnackBar"; // Adjust import as needed

const EditHotel = () => {
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const {user} = useAuth();
    const {hotelId} = useParams();
    const styles = useHotelFormStyle();

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

    const handleSnackbarClose = () => {
        setSuccessMessage('');
        setErrorMessage('');
    };
    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setHotel({...hotel, [name]: value});
    };


    useEffect(() => {
        const fetchHotelData = async () => {
            try {
                const response = await axiosInstance.get(`/hotel-companies/${hotelId}`);
                setHotel(response.data);
            } catch (error) {
                console.error('Error fetching hotel data:', error);
            }
        };

        fetchHotelData();
    }, [hotelId]);

    const handleSave = async (event) => {
        event.preventDefault();
        try {
            const response = await axiosInstance.put(`/hotel-companies/update/${hotelId}`, hotel);
            if (response.status === 200) {
                setSuccessMessage("Hotel company successfully updated");
                setErrorMessage(""); // Clear any previous error

                setTimeout(() => {
                    setSuccessMessage(''); // Hide the success message
                    navigate('/hotel-companies'); // Update this with your actual route
                }, 1500); // Navigate after 1.5 seconds
            } else {
                setErrorMessage("Failed to update hotel company");
            }
        } catch (error) {
            console.error('Error updating hotel data:', error);
            setErrorMessage(error.message || 'An unexpected error occurred.');
        }
    };
    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
            <CustomSnackbar
                open={!!successMessage || !!errorMessage}
                message={successMessage || errorMessage}
                onClose={handleSnackbarClose}
                severity={successMessage ? "success" : "error"}
            />
            {hotel && (
                <HotelForm
                    hotel={hotel}
                    setHotel={setHotel}
                    onSave={handleSave}
                    styles={styles}
                    errorMessage={errorMessage}
                    handleInputChange={handleInputChange}
                    handleSubmit={handleSave}
                    clearForm={handleClearForm}
                />
            )}
        </Box>
    );
};

export default EditHotel;
