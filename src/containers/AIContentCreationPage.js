import React, {useEffect, useState} from 'react';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Container, IconButton, InputLabel,
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
import {useAIContentPageTheme} from "../themes/AIContentPageTheme";
import InfoIcon from "@mui/icons-material/Info";
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import NotesIcon from '@mui/icons-material/Notes';
import {languageOptions} from "../statics/languageOptions";
import {sellingPointOptions} from "../statics/sellingPointOptions";
import {contentLengthOptions} from "../statics/contentLengthOptions";

const AIContentCreationPage = () => {
    const {user} = useAuth();
    const navigate = useNavigate();
    const styles = useAIContentPageTheme();

    const [selectedVenue, setSelectedVenue] = useState(null);
    const [selectedSeason, setSelectedSeason] = useState(null);
    const [selectedTargetAudience, setSelectedTargetAudience] = useState(null);
    const [selectedContentLength, setSelectedContentLength] = useState(null);
    const [selectedSellingPoint, setSelectedSellingPoint] = useState(null);
    const [venueOptions, setVenueOptions] = useState([]);

    const [content, setContent] = useState(null);
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [accordionExpanded, setAccordionExpanded] = useState(true);
    const [isEditable, setIsEditable] = useState(false);
    const [translationLanguage, setTranslationLanguage] = useState(null);

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
            setErrorMessage('Αποτυχία ανάκτησης καταλυμάτων');
            console.error(err);
        }
    };
    const handleGenerateContent = async () => {
        setLoading(true);
        try {
            const payload = {
                venue: selectedVenue,
                season: selectedSeason,
                targetAudience: selectedTargetAudience,
                sellingPoint: selectedSellingPoint,
                contentLength: selectedContentLength
            };
            const response = await axiosInstance.post('/chat/chat-gpt', payload);
            setContent(response.data.response);
            setSuccessMessage('Ιδού, το περιεχόμενο του καταλύματος σας ');

            setTimeout(() => {
                setSuccessMessage('');
            }, 2000);
        } catch (err) {
            setErrorMessage('Αποτυχία δημιουργίας περιεχομένου');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleTranslateContent = async () => {
        setLoading(true);
        try {
            // Replace with your actual translation API call
            const payload = {
                text: content,
                targetLang: translationLanguage
            };
            const response = await axiosInstance.post('deepl/translate', payload);
            setContent(response.data.response);
            setSuccessMessage('Το περιεχόμενο μεταφράστηκε με επιτυχία');
            setTimeout(() => setSuccessMessage(''), 2000);
        } catch (err) {
            setErrorMessage('Αποτυχία μετάφρασης περιεχομένου');
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

    const handleSaveClick = async () => {
        try {
            const updatedVenue = {
                ...selectedVenue,
                description: content
            };
            const response = await axiosInstance.put(`/hotel-companies/update/${selectedVenue.id}`, updatedVenue);

            if (response.status === 200) {
                setSuccessMessage('Το περιεχόμενο ενημερώθηκε με επιτυχία');
                setErrorMessage("")
                setIsEditable(false);
                setTimeout(() => {
                    setSuccessMessage('');
                    navigate('/hospitality-venues');
                }, 1500);
            } else {
                setErrorMessage('Αποτυχία ενημέρωσης περιεχομένου');
            }
        } catch (err) {
            setErrorMessage('Αποτυχία ενημέρωσης περιεχομένου');
            console.error(err);
        }
    };

    const handleDownload = () => {
        // Create a Blob from the content string
        const blob = new Blob([content], {type: 'text/plain'});

        // Create a link element
        const link = document.createElement("a");

        // Set the download attribute with a filename
        link.download = `content-${selectedVenue?.name || 'venue'}.txt`;

        // Create a URL for the Blob and set it as href
        link.href = window.URL.createObjectURL(blob);

        // Append the link to the body
        document.body.appendChild(link);

        // Trigger click to download
        link.click();

        // Remove the link from the body
        document.body.removeChild(link);
    };


    useEffect(() => {
        fetchVenueOptions();
    }, [user]);

    return (
        <Container maxWidth="lg">
            {loading &&
                (<Loading
                    initialMessage={"Περιμένετε, καθώς χρησιμοποιούμε τα πιο προηγμένα μοντέλα τεχνητής νοημοσύνης μας, για να δημιουργήσουμε το περιεχόμενό σας..."}/>)}

            <Box sx={styles.Box}>
                <Typography variant="h5" component="h2"
                            sx={styles.Typography}>
                    <LightbulbIcon sx={styles.lightBulbIcon}/> Δημιουργός περιεχομένου AI
                </Typography>

                {/* Step 1: Select Venue */}
                <Paper elevation={6} sx={styles.Paper}>
                    <Typography variant="h6" component="h3" sx={styles.Typography}>
                        Βήμα 1: Επιλέξτε το τουριστικό σας κατάλυμα
                    </Typography>
                    <Box sx={{display: 'flex', alignItems: 'center', mb: 2}}>
                        <Tooltip title="Επιλέξτε το κατάλυμα για το οποίο θέλετε να δημιουργήσετε περιεχόμενο"
                                 placement="left">
                            <IconButton size="small" sx={styles.infoButton}>
                                <InfoIcon/>
                            </IconButton>
                        </Tooltip>
                        <InputLabel id="select-venue">Επιλέξτε το τουριστικό σας κατάλυμα</InputLabel>
                    </Box>
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
                </Paper>

                {/* Step 2: Select Options */}
                <Paper elevation={6} sx={styles.Paper}>
                    <Typography variant="h6" component="h3" sx={{mb: 2, fontWeight: 'medium'}}>
                        Βήμα 2: Επιλέξτε ρυθμίσεις
                    </Typography>
                    <Box sx={{mb: 3}}>
                        <Box sx={{display: 'flex', alignItems: 'center', mb: 2}}>
                            <Tooltip
                                title="Επιλέξτε την επιθυμητή εποχή, για την οποία θέλετε να δημιουργήσετε περιεχόμενο."
                                placement="left">
                                <IconButton size="small" sx={styles.infoButton}>
                                    <InfoIcon/>
                                </IconButton>
                            </Tooltip>
                            <InputLabel id="season-select-label">Επιλέξτε εποχή</InputLabel>
                        </Box>
                        <Select
                            labelId="season-select-label"
                            value={selectedSeason}
                            onChange={(e) => setSelectedSeason(e.target.value)}
                            displayEmpty
                            fullWidth
                            sx={{mb: 2}}
                        >
                            {seasonOptions.map((option) => (
                                <MenuItem key={option.id} value={option.value}>
                                    <ListItemIcon>
                                        {option.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={option.text}/>
                                </MenuItem>
                            ))}
                        </Select>

                        <Box sx={{display: 'flex', alignItems: 'center', mb: 2}}>
                            <Tooltip
                                title="Επιλέξτε το επιθυμητό ακροατήριο , για το οποίο θέλετε να δημιουργήσετε περιεχόμενο."
                                placement="left">
                                <IconButton size="small" sx={styles.infoButton}>
                                    <InfoIcon/>
                                </IconButton>
                            </Tooltip>
                            <InputLabel id="target-audience-select-label">Επιλέξτε το ακρωατήριο</InputLabel>
                        </Box>
                        <Select
                            label="season-select-label"
                            value={selectedTargetAudience}
                            onChange={(e) => setSelectedTargetAudience(e.target.value)}
                            displayEmpty
                            fullWidth
                            sx={{mb: 2}}
                            inputProps={{'aria-label': 'Επιλέξτε το ακρωατήριο'}}
                        >
                            {targetAudienceOptions.map((option) => (
                                <MenuItem key={option.id} value={option.value}>
                                    <ListItemIcon>
                                        {option.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={option.text}/>
                                </MenuItem>
                            ))}
                        </Select>

                        <Box sx={{display: 'flex', alignItems: 'center', mb: 2}}>
                            <Tooltip title="Επιλέξτε την επιθυμητή ανάδειξη στο παραγόμενο περιεχόμενό σας"
                                     placement="left">
                                <IconButton size="small" sx={styles.infoButton}>
                                    <InfoIcon/>
                                </IconButton>
                            </Tooltip>
                            <InputLabel id="selling-point-select-label">Επιλέξτε highlight</InputLabel>
                        </Box>
                        <Select
                            id="selling-point-select"
                            value={selectedSellingPoint}
                            onChange={(e) => setSelectedSellingPoint(e.target.value)}
                            displayEmpty
                            fullWidth
                        >
                            {sellingPointOptions.map((option) => (
                                <MenuItem key={option.id} value={option.value}>
                                    <ListItemIcon>
                                        {option.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={option.text}/>
                                </MenuItem>
                            ))}
                        </Select>

                        <Box sx={{display: 'flex', alignItems: 'center', mb: 2, mt: 2}}>
                            <Tooltip title="Επιλέξτε την επιθυμητή έκταση του παραγόμενου περιεχομένου"
                                     placement="left">
                                <IconButton size="small" sx={styles.infoButton}>
                                    <InfoIcon/>
                                </IconButton>
                            </Tooltip>
                            <InputLabel id="target-audience-select-label">Επιλέξτε έκταση περιεχομένου</InputLabel>
                        </Box>
                        <Select
                            id="content-length-select"
                            value={selectedContentLength}
                            onChange={(e) => setSelectedContentLength(e.target.value)}
                            displayEmpty
                            fullWidth
                            sx={{mb: 2}}
                        >
                            {contentLengthOptions.map((option) => (
                                <MenuItem key={option.id} value={option.value}>
                                    <ListItemIcon>
                                        {option.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={option.text}/>
                                </MenuItem>
                            ))}
                        </Select>
                    </Box>

                </Paper>
                {
                    selectedVenue && selectedTargetAudience && selectedSeason && selectedSellingPoint && selectedContentLength && (
                        <Paper elevation={6} sx={styles.Paper}>
                            <Typography variant="h6" component="h3" sx={{mb: 2, fontWeight: 'medium'}}>
                                Βήμα 3: Επανεξετάστε τις επιλογές σας
                            </Typography>
                            <Accordion expanded={accordionExpanded}
                                       onChange={() => setAccordionExpanded(!accordionExpanded)}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon/>}
                                    aria-controls="venue-details-content"
                                    id="venue-details-header"
                                >
                                    <Typography variant="h6" component="h3" sx={{fontWeight: 'medium'}}>
                                        Λεπτομέρειες καταλύματος
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
                                            Όνομα: {selectedVenue.name}
                                        </Typography>
                                    </Box>
                                    <Box sx={{display: 'flex', alignItems: 'center', mb: 1}}>
                                        <Typography variant="body1" sx={{ml: 1}}>
                                            <BusinessIcon sx={{mr: 1}}/>
                                            Τύπος: {selectedVenue.type}
                                        </Typography>
                                    </Box>
                                    <Box sx={{display: 'flex', alignItems: 'center', mb: 1}}>

                                        <Typography variant="body1" sx={{ml: 1}}>
                                            <DescriptionIcon sx={{mr: 1}}/>
                                            Περιγραφή: {selectedVenue.description}
                                        </Typography>
                                    </Box>
                                    <Box sx={{display: 'flex', alignItems: 'center', mb: 1}}>
                                        <Typography variant="body1" sx={{ml: 1}}>
                                            <ListAltIcon sx={{mr: 1}}/>
                                            Παροχές: {formatAssets(selectedVenue.assets)}
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
                                        Επιλεγμένες ρυθμίσεις
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Box sx={{display: 'flex', alignItems: 'center', mb: 1}}>
                                        <Typography variant="body1" sx={{ml: 1}}>
                                            <CalendarMonthIcon sx={{mr: 1}}/>
                                            Εποχή: {selectedSeason}
                                        </Typography>
                                    </Box>
                                    <Box sx={{display: 'flex', alignItems: 'center', mb: 1}}>
                                        <Typography variant="body1" sx={{ml: 1}}>
                                            <GroupIcon sx={{mr: 1}}/>
                                            Ακρωατήριο: {selectedTargetAudience}
                                        </Typography>
                                    </Box>
                                    <Box sx={{display: 'flex', alignItems: 'center', mb: 1}}>
                                        <Typography variant="body1" sx={{ml: 1}}>
                                            <LoyaltyIcon sx={{mr: 1}}/>
                                            Highlight: {selectedSellingPoint}
                                        </Typography>
                                    </Box>
                                    <Box sx={{display: 'flex', alignItems: 'center', mb: 1}}>
                                        <Typography variant="body1" sx={{ml: 1}}>
                                            <NotesIcon sx={{mr: 1}}/>
                                            Έκταση περιεχομένου: {selectedContentLength}
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
                        Βήμα 4: Πατήστε το κουμπί και αφήστε το ΑΙ να αναλάβει..
                    </Typography>
                    <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', mb: 3}}>
                        <Tooltip title="Πρέπει πρώτα να επιλέξετε το επιθυμητό κατάλυμα, την εποχή και το κοινό.!"
                                 placement="left">
                            <Button
                                variant="contained"
                                color="secondary"
                                disabled={!selectedVenue || !selectedSeason || !selectedTargetAudience || !selectedSellingPoint || !selectedContentLength}
                                onClick={handleGenerateContent}
                                sx={styles.Button}
                            >
                                Δημιουργια Περιεχομενου
                            </Button>
                        </Tooltip>
                    </Box>
                </Paper>

                {/* Step 4: Generate Content */}
                {
                    content &&
                    <Paper elevation={6} sx={styles.Paper}>
                        <Typography variant="h6" component="h3" sx={{mb: 2, fontWeight: 'medium'}}>
                            Βήμα 5: Επανεξέταση και επεξεργασία του περιεχομένου
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
                                Επεξεργασια
                            </Button>
                            <Button variant="contained" color="primary" onClick={handleSaveClick}>
                                Αποθηκευση
                            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                startIcon={<DownloadIcon/>}
                                onClick={handleDownload}
                            >
                                Ληψη
                            </Button>
                        </Box>
                    </Paper>
                }
                {
                    content && (
                        <Paper elevation={6} sx={styles.TranslationSection}>
                            <Typography variant="h6" sx={{mb: 2, fontWeight: 'medium'}}>
                                Βήμα 6: Μεταφράστε το περιεχόμενό σας (προαιρετικό)
                            </Typography>
                            <Box sx={{display: 'flex', alignItems: 'center', mb: 2}}>
                                <Tooltip title="Επιλέξτε την επιθυμητή γλώσσα στην οποία θέλετε να μεταφραστεί το περιεχόμενο"
                                         placement="left">
                                    <IconButton size="small" sx={styles.infoButton}>
                                        <InfoIcon/>
                                    </IconButton>
                                </Tooltip>
                                <InputLabel id="trnaslate-language-select-label" sx={styles.SelectLabel}>
                                    Επιλέξτε γλώσσα μετάφρασης
                                </InputLabel>
                            </Box>
                            <Select
                                value={translationLanguage}
                                onChange={(e) => setTranslationLanguage(e.target.value)}
                                displayEmpty
                                fullWidth
                                sx={styles.SelectMenu}

                            >
                                {languageOptions.map((option) => (
                                    <MenuItem key={option.id} value={option.value}>
                                        <ListItemIcon sx={styles.SelectIcon}>
                                            {option.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={option.text}/>
                                    </MenuItem>
                                ))}
                            </Select>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleTranslateContent}
                                disabled={!translationLanguage}
                                sx={styles.TranslateButton}
                            >
                                Μεταφραση
                            </Button>
                        </Paper>
                    )
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