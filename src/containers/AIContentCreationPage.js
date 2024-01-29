import React, {useEffect, useState} from 'react';
import {Box, Button, CircularProgress, Container, MenuItem, Paper, Select, Tooltip, Typography} from '@mui/material';
import axiosInstance from "../utils/axiosInstance";
import TextField from "@mui/material/TextField";
import CustomSnackbar from "../shared/CustomSnackBar";
import {useAuth} from "../shared/AuthContext";

const AIContentCreationPage = () => {
    const {user} = useAuth();
    const [selectedVenue, setSelectedVenue] = useState('');
    const [venueOptions, setVenueOptions] = useState([]);
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSnackbarClose = () => {
        setSuccessMessage('');
        setErrorMessage('');
    };
    const handleChange = (event) => {
        setContent(event.target.value);
    };
    const handleVenueChange = (event) => {
        setSelectedVenue(event.target.value);
        // Fetch venue data and generate content
    };

    const fetchVenueOptions = async () => {
        try {
            const response = await axiosInstance.get(`/hotel-companies/user/${user.id}`);
            setVenueOptions(response.data);
        } catch (err) {
            setErrorMessage('Failed to fetch venues');
            console.error(err);
        }
    };
    const handleGenerateContent = async () => {
        setLoading(true);
        try {
            // Replace with your actual API call
            const response = await axiosInstance.post('/chat/chat-gpt', {selectedVenue});
            setContent(response.data.response);
        } catch (err) {
            setErrorMessage('Failed to generate content');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchVenueOptions();
    }, [user]);

    return (
        <Container maxWidth="lg">
            {loading ? <CircularProgress/> : (
                <Box sx={{
                    minHeight: 100,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: 4,
                    backgroundColor: 'background.paper',
                    borderRadius: 2,
                    boxShadow: 3,
                    my: 4,
                    gap: 3, // Adds space between children
                }}>
                    <Typography variant="h5" component="h2" sx={{mb: 2, fontWeight: 'bold', color: 'primary.main'}}>
                        AI Content Generator
                    </Typography>
                    {/* Step 1: Select Venue */}
                    <Paper elevation={2} sx={{p: 2, mb: 4, width: '100%'}}>
                        <Tooltip title="Select the venue for which you want to generate content" placement="right">

                            {/* Step 1: Select Venue */}
                            <Paper elevation={6} sx={{p: 3, width: '100%', bgcolor: 'background.level2'}}>
                                <Typography variant="h6" component="h3" sx={{mb: 2, fontWeight: 'medium'}}>
                                    Step 1: Choose Your Venue
                                </Typography>
                                <Select
                                    value={selectedVenue}
                                    onChange={handleVenueChange}
                                    displayEmpty
                                    fullWidth
                                    sx={{mb: 3}}
                                    inputProps={{'aria-label': 'Select your hospitality venue'}}
                                >
                                    {venueOptions.map(venue => (
                                        <MenuItem key={venue.id} value={venue}>{venue.name}</MenuItem>
                                    ))}
                                </Select>
                            </Paper>
                        </Tooltip>
                    </Paper>

                    {/* Step 2: Generate Content */}
                    <Paper elevation={6} sx={{ p: 3, width: '100%', bgcolor: 'background.level2' }}>
                        <Typography variant="h6" component="h3" sx={{mb: 2, fontWeight: 'medium'}}>
                            Step 2: Craft Your Narrative
                        </Typography>
                        <TextField
                            label="Enter your content"
                            multiline
                            rows={10}
                            variant="outlined"
                            fullWidth
                            value={content}
                            onChange={handleChange}
                            sx={{mb: 3}}
                        />
                        <Button variant="contained" color="secondary" onClick={handleGenerateContent}>
                            Generate Content
                        </Button>
                    </Paper>

                    {/* Step 3: Review & Save */}
                    <Paper elevation={2} sx={{p: 2, mb: 4, width: '100%'}}>
                        <Typography variant="h6">
                            Step 3: Review & Save
                        </Typography>
                        {/* Placeholder for additional action buttons */}
                        {/* Your review and save actions go here */}
                    </Paper>

                    {/* Additional Buttons for Save, Download etc. */}
                    <CustomSnackbar
                        open={!!successMessage || !!errorMessage}
                        message={successMessage || errorMessage}
                        onClose={handleSnackbarClose}
                        severity={successMessage ? "success" : "error"}
                    />

                </Box>
            )}
        </Container>
    );
};

export default AIContentCreationPage;