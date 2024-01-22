// SomePage.js
import React from 'react';
import HotelForm from '../components/HotelForm';
import { Box } from '@mui/material';

export const InputHotelPage = () => {
    const handleSaveHotel = (hotelData) => {
        console.log('Hotel data to save:', hotelData);
        // Here you would typically make an API call to save the hotel data
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
            <HotelForm onSave={handleSaveHotel} />
        </Box>
    );
};
