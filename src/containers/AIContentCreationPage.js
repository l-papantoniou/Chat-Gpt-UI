import React, {useEffect, useState} from 'react';
import {
    Box,
    Button,
    CircularProgress,
    Container,
    ListItemIcon, ListItemText,
    MenuItem,
    Paper,
    Select,
    Tooltip,
    Typography
} from '@mui/material';
import axiosInstance from "../utils/axiosInstance";
import TextField from "@mui/material/TextField";
import CustomSnackbar from "../shared/CustomSnackBar";
import {useAuth} from "../shared/AuthContext";
import {Loading} from "../shared/Loading";
import {Accordion, AccordionSummary, AccordionDetails} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import BusinessIcon from '@mui/icons-material/Business'; // Or specific icon like HotelIcon
import DescriptionIcon from '@mui/icons-material/Description';
import ListAltIcon from '@mui/icons-material/ListAlt';
import DownloadIcon from '@mui/icons-material/Download';
import {targetAudienceOptions} from "../statics/targetAudienceOptions";
import {seasonOptions} from "../statics/seasonOptions";

const AIContentCreationPage = () => {
    const {user} = useAuth();
    const [selectedVenue, setSelectedVenue] = useState(null);
    const [selectedSeason, setSelectedSeason] = useState(null);
    const [selectedTargetAudience, setSelectedTargetAudience] = useState(null);
    const [venueOptions, setVenueOptions] = useState([]);
    const [content, setContent] = useState(null);
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [accordionExpanded, setAccordionExpanded] = useState(true);
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
            const payload = {
                venue: selectedVenue,
                season: selectedSeason,
                targetAudience: selectedTargetAudience
            };
            console.log(payload);
            // Replace with your actual API call
            const response = await axiosInstance.post('/chat/chat-gpt', payload);
            setContent(response.data.response);
            setSuccessMessage('Behold the content for you Hospitality Venue');

            setTimeout(() => {
                setSuccessMessage('');
            }, 2000); // Navigate after 1.5 seconds
        } catch (err) {
            setErrorMessage('Failed to generate content');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const formatAssets = (assets) => {
        if (assets === null) {
            return null;
        }
        let selectedAssets = [];
        for (const category in assets) {
            if (assets[category].length > 0)
                selectedAssets = selectedAssets.concat(assets[category]);
        }
        return selectedAssets.join(', ');
    };


    useEffect(() => {
        fetchVenueOptions();
    }, [user]);

    return (
        <Container maxWidth="lg">
            {loading &&
                (<Loading message={"Hang tight as we're using our most Advanced AI to generate your content..."}/>)}
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
                gap: 3,
            }}>
                <Typography variant="h5" component="h2"
                            sx={{mb: 2, fontWeight: 'bold', color: 'primary.secondary'}}>
                    AI Content Generator
                </Typography>
                {/* Step 1: Select Venue */}
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
                                <MenuItem key={venue.id} value={venue}>{venue.id}: {venue.name}</MenuItem>
                            ))}
                        </Select>
                    </Paper>
                </Tooltip>

                {
                    selectedVenue && (
                        <Paper elevation={6} sx={{p: 3, width: '100%', bgcolor: 'background.level2'}}>

                            <Accordion expanded={accordionExpanded}
                                       onChange={() => setAccordionExpanded(!accordionExpanded)}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon/>}
                                    aria-controls="venue-details-content"
                                    id="venue-details-header"
                                >
                                    <Typography variant="h6" component="h3" sx={{fontWeight: 'medium'}}>
                                        Venue Details
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Box sx={{display: 'flex', alignItems: 'center', mb: 1}}>
                                        <Typography variant="body1" sx={{ml: 1}}>
                                            <FingerprintIcon sx={{mr: 1}}/>

                                            ID: {selectedVenue.id}
                                        </Typography>
                                    </Box>
                                    <Box sx={{display: 'flex', alignItems: 'center', mb: 1}}>
                                        <Typography variant="body1" sx={{ml: 1}}>
                                            <TextFieldsIcon sx={{mr: 1}}/>

                                            Name: {selectedVenue.name}
                                        </Typography>
                                    </Box>
                                    <Box sx={{display: 'flex', alignItems: 'center', mb: 1}}>
                                        <Typography variant="body1" sx={{ml: 1}}>
                                            <BusinessIcon sx={{mr: 1}}/>
                                            Type: {selectedVenue.type}
                                        </Typography>
                                    </Box>
                                    <Box sx={{display: 'flex', alignItems: 'center', mb: 1}}>

                                        <Typography variant="body1" sx={{ml: 1}}>
                                            <DescriptionIcon sx={{mr: 1}}/>
                                            Description: {selectedVenue.description}
                                        </Typography>
                                    </Box>
                                    <Box sx={{display: 'flex', alignItems: 'center', mb: 1}}>
                                        <Typography variant="body1" sx={{ml: 1}}>
                                            <ListAltIcon sx={{mr: 1}}/>
                                            Assets: {formatAssets(selectedVenue.assets)}
                                        </Typography>
                                    </Box>
                                </AccordionDetails>
                            </Accordion>
                        </Paper>
                    )
                }
                <Paper elevation={6} sx={{p: 3, width: '100%', bgcolor: 'background.level2', mb: 3}}>
                    <Typography variant="h6" component="h3" sx={{mb: 2, fontWeight: 'medium'}}>
                        Choose Season and Target Audience
                    </Typography>
                    <Box sx={{mb: 3}}>
                        <Select
                            value={selectedSeason}
                            onChange={(e) => setSelectedSeason(e.target.value)}
                            displayEmpty
                            fullWidth
                            sx={{mb: 2}}
                            inputProps={{'aria-label': 'Select season'}}
                        >
                            {seasonOptions.map((item, id) => (
                                <MenuItem key={item.id} value={item.text}>
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.text}/>
                                </MenuItem>
                            ))}
                        </Select>
                        <Select
                            value={selectedTargetAudience}
                            onChange={(e) => setSelectedTargetAudience(e.target.value)}
                            displayEmpty
                            fullWidth
                            inputProps={{'aria-label': 'Select target audience'}}
                        >
                            {targetAudienceOptions.map((item, id) => (
                                <MenuItem key={item.id} value={item.text}>
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.text}/>
                                </MenuItem>
                            ))}
                        </Select>
                    </Box>
                </Paper>

                {/* Step 2: Generate Content */}
                <Paper elevation={6} sx={{p: 3, width: '100%', bgcolor: 'background.level2'}}>
                    <Typography variant="h6" component="h3" sx={{mb: 2, fontWeight: 'medium'}}>
                        Step 2: Craft Your Narrative
                    </Typography>
                    <TextField
                        multiline
                        rows={10}
                        variant="outlined"
                        fullWidth
                        value={content}
                        onChange={handleChange}
                        InputProps={{readOnly: true}}
                        disabled
                        sx={{mb: 3}}
                    />
                    <Button
                        variant="contained"
                        color="secondary"
                        disabled={selectedVenue == null}
                        onClick={handleGenerateContent}>
                        Generate Content
                    </Button>
                </Paper>

                {/* Step 3: Review & Save */}
                <Paper elevation={2} sx={{p: 2, mb: 4, width: '100%'}}>
                    <Typography variant="h6" sx={{mb: 2}}>
                        Step 3: Review & Save
                    </Typography>

                    <Box sx={{mb: 2}}>
                        <Typography variant="subtitle1" sx={{mb: 1}}>
                            Preview Content:
                        </Typography>
                        <TextField
                            fullWidth
                            multiline
                            variant="outlined"
                            value={content}
                            InputProps={{readOnly: true}}
                            rows={4}
                        />
                    </Box>

                    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                        <Button variant="contained" color="secondary" onClick={() => console.log("Edit")}>
                            Edit
                        </Button>
                        <Button variant="contained" color="primary" onClick={() => console.log("Save")}>
                            Save
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            startIcon={<DownloadIcon/>}
                            onClick={() => console.log("Download")}
                        >
                            Download
                        </Button>
                    </Box>
                </Paper>

                {/* Additional Buttons for Save, Download etc. */
                }
                <CustomSnackbar
                    open={!!successMessage || !!errorMessage}
                    message={successMessage || errorMessage}
                    onClose={handleSnackbarClose}
                    severity={successMessage ? "success" : "error"}
                />

            </Box>
        </Container>
    )
};

export default AIContentCreationPage;