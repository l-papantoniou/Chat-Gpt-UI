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

export const InputHotelPage = () => {

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [url, setUrl] = useState('');
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
        setUrl(event.target.value);
    };
    const handleUrlSubmit = () => {
        // Logic to handle the URL submission goes here
        console.log("URL submitted: ", url);
        // You would call a function here that sends the URL to the backend and fetches data
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
                        <Tooltip title="Learn more about URL autofill feature">
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
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                sx={styles.inputField}
                            />
                        </Tooltip>
                        <Button variant="contained"
                                onClick={handleUrlSubmit}
                                disabled={url === ''}
                                sx={styles.fetchButton}>
                            Fetch Data
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
