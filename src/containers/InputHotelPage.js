import React, {useState} from 'react';
import HotelForm from '../components/HotelForm';
import {Box, Button, Grid, IconButton, Tooltip, Typography} from '@mui/material';
import {useHotelFormStyle} from "../themes/HotelFormTheme";
import axiosInstance from "../utils/axiosInstance";
import {useAuth} from "../shared/AuthContext";
import {useNavigate} from "react-router-dom";
import CustomSnackbar from "../shared/CustomSnackBar";
import TextField from "@mui/material/TextField";
import InfoIcon from "@mui/icons-material/Info";
import {Loading} from "../shared/Loading";
import {amenityOptions} from "../statics/amenityOptions";

export const InputHotelPage = () => {

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [bookingUrl, setBookingUrl] = useState('');
    const [loading, setLoading] = useState(false);

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

    const handleUrlChange = (event) => {
        setBookingUrl(event.target.value);
        // Move cursor to the start of the text field
        event.target.setSelectionRange(0, 0);
    };
    const transformScrapedAssets = (scrapedAssets) => {
        // Initialize an object to hold the categorized amenities
        const categorizedAssets = {};

        // Iterate over the amenity options to set up the initial structure
        Object.keys(amenityOptions).forEach((category) => {
            categorizedAssets[category] = [];
        });

        // Iterate over the scraped assets
        scrapedAssets.forEach((asset) => {
            // Check each category to see if it includes the asset
            Object.entries(amenityOptions).forEach(([category, {amenities}]) => {
                if (amenities.includes(asset)) {
                    // If the category includes the amenity, add it to the corresponding array
                    categorizedAssets[category].push(asset);
                }
            });
        });

        // Clean up any empty categories
        Object.keys(categorizedAssets).forEach((category) => {
            if (categorizedAssets[category].length === 0) {
                delete categorizedAssets[category];
            }
        });

        return categorizedAssets;
    }


    const handleUrlSubmit = async () => {
        setLoading(true); // Start loading
        try {
            const response = await axiosInstance.post('/booking/booking-scraper', {bookingUrl: bookingUrl});
            console.log('Response Data:', response.data.response);

            if (response.status === 200) {
                console.log('Raw Scraped Assets:', response.data.response.assets);

                const transformedAssets = transformScrapedAssets(response.data.response.assets);
                console.log('Transformed Assets:', transformedAssets);

                setHotel({
                    ...hotel,
                    ...response.data.response,
                    hotelier: hotel.hotelier,
                    assets: transformedAssets
                });
                setSuccessMessage("Your Hospitality-venue data have been successfully fetched");
                setTimeout(() => setSuccessMessage(''), 2000);
            } else {
                setErrorMessage("Failed to fetch Hospitality-venue data from Booking.com");
            }
        } catch (error) {
            console.error('Error occurred:', error);
            setErrorMessage(error.response?.data?.message || 'An unexpected error occurred.');
        } finally {
            setLoading(false);
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axiosInstance.post('/hotel-companies/create', hotel);
            if (response.status === 201) {
                setSuccessMessage("Your Hospitality-Venue successfully submitted");
                setErrorMessage(""); // Clear any previous error

                setTimeout(() => {
                    setSuccessMessage(''); // Hide the success message
                    navigate('/hospitality-venues'); // Update this with your actual route
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
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Box display="flex" justifyContent="flex-end" alignItems="center" sx={styles.inputSection}>
                        <Tooltip
                            title="Enter the Booking - URL of your existing hospitality venue to autofill the form">
                            <IconButton size="small" sx={styles.infoButton}>
                                <InfoIcon/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip
                            title="Enter the Booking - URL of your existing hospitality venue to autofill the form">
                            <TextField
                                label="Booking URL"
                                variant="outlined"
                                size="medium"
                                value={bookingUrl}
                                onChange={handleUrlChange}
                                sx={styles.inputField}
                            />
                        </Tooltip>
                        <Button variant="contained"
                                onClick={handleUrlSubmit}
                                disabled={bookingUrl === ''}
                                sx={styles.fetchButton}>
                            <Typography color="white">
                                Fetch Data
                            </Typography>
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    {/* Your form and other content */}
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <CustomSnackbar
                            open={!!successMessage || !!errorMessage}
                            message={successMessage || errorMessage}
                            onClose={handleSnackbarClose}
                            severity={successMessage ? "success" : "error"}
                        />
                        {loading && (
                            <Loading initialMessage={"Hang tight as we collect the data of your Hospitality-Venue.."}/>
                        )}
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
                </Grid>
            </Grid>
        </Box>
    );
};