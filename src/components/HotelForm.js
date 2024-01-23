// HotelForm.js
import React, {useState} from 'react';
import {
    Box,
    TextField,
    Button,
    Typography,
    MenuItem,
    FormControl,
    InputLabel,
    Select,
    IconButton,
    Grid, Divider, Paper
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import ListIcon from '@mui/icons-material/List';
import TextDialogEditor from "../shared/DialogTextfield";
import AmenitiesDialog from "./AmenitiesDialog";
import HotelIcon from '@mui/icons-material/Hotel';
import InputAdornment from "@mui/material/InputAdornment";
import {useHotelFormStyle} from "../themes/HotelFormTheme";
import {hotelCompanyTypes} from "../statics/hotelCompanyTypes";

const HotelForm = ({onSave}) => {

    const styles = useHotelFormStyle();
    const [hotel, setHotel] = useState({
        name: '',
        location: '',
        description: '',
        hotelCompanyType: '',
        amenities: [],
        // Assuming this is a selection of predefined types
    });
    const [openDescriptionDialog, setOpenDescriptionDialog] = useState(false);


    const [amenitiesDialogOpen, setAmenitiesDialogOpen] = useState(false);
    const handleChange = (event) => {
        const {name, value} = event.target;
        setHotel({...hotel, [name]: value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSave(hotel);
        // Optionally reset the form or give feedback
    };

    const handleDescriptionClose = () => {
        setOpenDescriptionDialog(false);
    };

    const handleDescriptionSave = () => {
        // Optionally handle save logic here
        setOpenDescriptionDialog(false);
    };

    const handleDescriptionChange = (event) => {
        setHotel({...hotel, description: event.target.value});
    };

    const handleAmenityToggle = (amenity) => {
        const newAmenities = hotel.amenities.includes(amenity)
            ? hotel.amenities.filter(a => a !== amenity)
            : [...hotel.amenities, amenity];
        setHotel({...hotel, amenities: newAmenities});
    };
    const handleClearForm = () => {
        // Clear the form by resetting the hotel state
        setHotel({
            name: '',
            location: '',
            hotelCompanyType: '',
            description: '',
            amenities: [],
        });
    };
    return (
        <Paper elevation={3} sx={{ p: 4, mt: 4, mb: 4 }}>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item>
                    <HotelIcon color="secondary" sx={{fontSize: 40}}/>
                </Grid>
                <Grid item>
                    <Typography variant="h4" component="h1" gutterBottom sx={{fontWeight: 'bold'}}>
                        Add Your Hotel-Company
                    </Typography>
                </Grid>
            </Grid>
            <Divider sx={{mb: 3}}/>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Hotel Name"
                name="name"
                autoFocus
                value={hotel.name}
                sx={styles.input}
                onChange={handleChange}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="location"
                label="Hotel Location"
                name="location"
                sx={styles.input}
                value={hotel.location}
                onChange={handleChange}
            />
            <FormControl fullWidth margin="normal">
                <InputLabel id="hotelCompanyType-label">Hotel Company Type</InputLabel>
                <Select
                    labelId="hotelCompanyType-label"
                    id="hotelCompanyType"
                    name="hotelCompanyType"
                    value={hotel.hotelCompanyType}
                    label="Hotel Company Type"
                    onChange={handleChange}
                    sx={{
                        minWidth: 1100, // Minimum width you want to maintain
                        maxWidth: 1100, // Maximum width or you can omit this if not needed
                    }}
                >
                    {hotelCompanyTypes.map((type) => (
                        <MenuItem key={type} value={type}>
                            {type}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <TextField
                label="Hotel Company Description"
                fullWidth
                margin="normal"
                variant="outlined"
                value={hotel.description}
                onFocus={() => setOpenDescriptionDialog(true)}
                placeholder="Click to edit description"
                InputProps={{
                    readOnly: true,
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={() => setOpenDescriptionDialog(true)} edge="end">
                                <EditIcon  />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
            <TextDialogEditor
                open={openDescriptionDialog}
                title="Hotel Company Description"
                value={hotel.description}
                onChange={handleDescriptionChange}
                onClose={handleDescriptionClose}
                onSave={handleDescriptionSave}
            />
            <TextField
                label="Amenities & Assets"
                fullWidth
                margin="normal"
                variant="outlined"
                value={hotel.amenities.join(', ')} // Display selected amenities as a comma-separated list
                onClick={() => setAmenitiesDialogOpen(true)}
                InputProps={{
                    readOnly: true,
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={() => setAmenitiesDialogOpen(true)} edge="end">
                                <ListIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                placeholder="Click to select amenities"
            />
            <AmenitiesDialog
                open={amenitiesDialogOpen}
                onClose={() => setAmenitiesDialogOpen(false)}
                selectedAmenities={hotel.amenities}
                onAmenityToggle={handleAmenityToggle}
            />
            {/* Layout for buttons */}
            <Grid container spacing={2} justifyContent="space-between" sx={{mt: 2}}>
                <Grid item>
                    <Button variant="contained" color="secondary" onClick={handleClearForm} sx={styles.clearButton}>
                        Clear
                    </Button>
                </Grid>
                <Grid item>
                    <Button type="submit" variant="contained" color="primary" sx={styles.submitButton}>
                        Save
                    </Button>
                </Grid>
            </Grid>
        </Box>
        </Paper>
    );
};

export default HotelForm;
