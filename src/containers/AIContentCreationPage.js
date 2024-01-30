import React, {useEffect, useState} from 'react';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Container,
    InputLabel,
    ListItemIcon,
    ListItemText,
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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import BusinessIcon from '@mui/icons-material/Business';
import DescriptionIcon from '@mui/icons-material/Description';
import ListAltIcon from '@mui/icons-material/ListAlt';
import DownloadIcon from '@mui/icons-material/Download';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupIcon from '@mui/icons-material/Group';
import {targetAudienceOptions} from "../statics/targetAudienceOptions";
import {seasonOptions} from "../statics/seasonOptions";
import {useNavigate} from "react-router-dom";
import {formatAssets, handleDownload} from "../utils/Utils";
import {useAIContentPageTheme} from "../themes/AIContentPageTheme";
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const AIContentCreationPage = () => {
    const {user} = useAuth();
    const navigate = useNavigate();
    const styles = useAIContentPageTheme();

    const [selectedVenue, setSelectedVenue] = useState(null);
    const [selectedSeason, setSelectedSeason] = useState(null);
    const [selectedTargetAudience, setSelectedTargetAudience] = useState(null);
    const [venueOptions, setVenueOptions] = useState([]);
    const [content, setContent] = useState(null);
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [accordionExpanded, setAccordionExpanded] = useState(true);
    const [isEditable, setIsEditable] = useState(false);

    const handleSnackbarClose = () => {
        setSuccessMessage('');
        setErrorMessage('');
    };
    const handleChange = (event) => {
        setContent(event.target.value);
    };
    const handleVenueChange = (event) => {
        setSelectedVenue(event.target.value);
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


    const handleSaveClick = async () => {
        try {
            const updatedVenue = {
                ...selectedVenue,
                description: content
            };
            const response = await axiosInstance.put(`/hotel-companies/update/${selectedVenue.id}`, updatedVenue);

            if (response.status === 200) {
                setSuccessMessage('Content updated successfully');
                setErrorMessage("")
                setIsEditable(false);
                setTimeout(() => {
                    setSuccessMessage('');
                    navigate('/hospitality-venues');
                }, 1500);
            } else {
                setErrorMessage('Failed to update content');
            }
        } catch (err) {
            setErrorMessage('Failed to update content');
            console.error(err);
        }
    };


    useEffect(() => {
        fetchVenueOptions();
    }, [user]);

    return (
        <Container maxWidth="lg">
            {loading &&
                (<Loading
                    initialMessage={"Hang tight as we're using our most Advanced AI models, to generate your content..."}/>)}

            <Box sx={styles.Box}>
                <Typography variant="h5" component="h2"
                            sx={styles.Typography}>
                    <LightbulbIcon  sx={{mr: 1, fontSize: 30}}/> AI Content Generator
                </Typography>
                {/* Step 1: Select Venue */}
                <Paper elevation={6} sx={styles.Paper}>
                    <Typography variant="h6" component="h3" sx={{mb: 2, fontWeight: 'medium'}}>
                        Step 1: Choose Your Venue
                    </Typography>
                    <InputLabel id="select-venue">Select your desired venue</InputLabel>
                    <Tooltip title="Select the venue for which you want to generate content" placement="left">
                        <Select
                            value={selectedVenue}
                            onChange={handleVenueChange}
                            displayEmpty
                            fullWidth
                            sx={{mb: 2}}
                        >
                            {venueOptions.map(venue => (
                                <MenuItem key={venue.id} value={venue}>
                                    <ListItemIcon>
                                        {venue.id}
                                    </ListItemIcon>
                                    <ListItemText primary={venue.name}/>
                                </MenuItem>
                            ))}
                        </Select>
                    </Tooltip>
                </Paper>


                <Paper elevation={6} sx={styles.Paper}>
                    <Typography variant="h6" component="h3" sx={{mb: 2, fontWeight: 'medium'}}>
                        Step 2: Choose Season & Target Audience
                    </Typography>
                    <Box sx={{mb: 3}}>
                        <InputLabel id="season-select-label">Select Season</InputLabel>
                        <Tooltip title="Select the desired season, for which you want to generate content"
                                 placement="left">
                            <Select
                                labelId="season-select-label"
                                value={selectedSeason}
                                onChange={(e) => setSelectedSeason(e.target.value)}
                                displayEmpty
                                fullWidth
                                sx={{mb: 2}}
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
                        </Tooltip>

                        <InputLabel id="target-audience-select-label">Select Target Audience</InputLabel>

                        <Tooltip title="Select the desired target audience, for which you want to generate content"
                                 placement="left">
                            <Select
                                label="season-select-label"
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
                        </Tooltip>
                    </Box>
                </Paper>
                {
                    selectedVenue && selectedTargetAudience && selectedSeason && (
                        <Paper elevation={6} sx={styles.Paper}>
                            <Typography variant="h6" component="h3" sx={{mb: 2, fontWeight: 'medium'}}>
                                Step 3: Review your selections
                            </Typography>
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

                            <Accordion expanded={accordionExpanded}
                                       onChange={() => setAccordionExpanded(!accordionExpanded)}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon/>}
                                    aria-controls="venue-details-content"
                                    id="venue-details-header"
                                >
                                    <Typography variant="h6" component="h3" sx={{fontWeight: 'medium'}}>
                                        Selected Season & Target Audience
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Box sx={{display: 'flex', alignItems: 'center', mb: 1}}>
                                        <Typography variant="body1" sx={{ml: 1}}>
                                            <CalendarMonthIcon sx={{mr: 1}}/>
                                            Target Season: {selectedSeason}
                                        </Typography>
                                    </Box>
                                    <Box sx={{display: 'flex', alignItems: 'center', mb: 1}}>

                                        <Typography variant="body1" sx={{ml: 1}}>
                                            <GroupIcon sx={{mr: 1}}/>
                                            TargetAudience: {selectedTargetAudience}
                                        </Typography>
                                    </Box>
                                </AccordionDetails>
                            </Accordion>
                        </Paper>
                    )
                }
                {/* Step 3: Generate Content Button */}
                <Paper elevation={6} sx={{p: 3, width: '100%', bgcolor: 'background.level2'}}>
                    <Typography variant="h6" component="h3" sx={{mb: 2, fontWeight: 'medium'}}>
                        Step 4: Press the button and let the magic begin..
                    </Typography>
                    <Tooltip title="You must select the desired venue, season and audience first!"
                             placement="left">
                        <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', mb: 3}}>

                            <Button
                                variant="contained"
                                color="secondary"
                                disabled={!selectedVenue || !selectedSeason || !selectedTargetAudience}
                                onClick={handleGenerateContent}
                                sx={{
                                    padding: '15px 20px',
                                    backgroundColor: '#e1540b',
                                    '&:hover': {
                                        backgroundColor: '#af2e0a',
                                    },
                                    my: 2,
                                    fontSize: '1.2rem',
                                    boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.3)',
                                }}
                            >
                                Generate Content
                            </Button>
                        </Box>
                    </Tooltip>
                </Paper>

                {/* Step 4: Generate Content */}
                {content &&
                    <Paper elevation={6} sx={{p: 3, width: '100%', bgcolor: 'background.level2'}}>
                        <Typography variant="h6" component="h3" sx={{mb: 2, fontWeight: 'medium'}}>
                            Step 5: Review & Edit Your Narrative
                        </Typography>
                        <TextField
                            multiline
                            rows={20}
                            variant="outlined"
                            fullWidth
                            value={content}
                            onChange={handleChange}
                            disabled={!isEditable}
                            sx={{mb: 3}}
                        />
                        {/* Additional Buttons for Save, Download etc. */}
                        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                            <Button variant="contained" color="secondary" onClick={() => setIsEditable(!isEditable)}>
                                Edit
                            </Button>
                            <Button variant="contained" color="primary" onClick={handleSaveClick}>
                                Save
                            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                startIcon={<DownloadIcon/>}
                                onClick={handleDownload(content)}
                            >
                                Download
                            </Button>
                        </Box>
                    </Paper>
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