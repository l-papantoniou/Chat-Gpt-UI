import React, {useState} from 'react';
import {
    Box,
    Button,
    Divider,
    FormControl,
    Grid,
    IconButton,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    TextField,
    Typography
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import ListIcon from '@mui/icons-material/List';
import TextDialogEditor from "../shared/DialogTextfield";
import AmenitiesDialog from "./AmenitiesDialog";
import HotelIcon from '@mui/icons-material/Hotel';
import InputAdornment from "@mui/material/InputAdornment";
import {hotelCompanyTypes} from "../statics/hotelCompanyTypes";
import {ErrorMessage} from "../shared/ErrorMessage";

const HotelForm = ({hotel, setHotel, styles, errorMessage, handleInputChange, handleSubmit, clearForm}) => {

    const [openDescriptionDialog, setOpenDescriptionDialog] = useState(false);

    const [amenitiesDialogOpen, setAmenitiesDialogOpen] = useState(false);

    const handleDescriptionDialog = () => {
        setOpenDescriptionDialog(!openDescriptionDialog);
    }
    const handleDescriptionChange = (event) => {
        setHotel({...hotel, description: event.target.value});
    };


    const handleAmenityToggle = (category, asset) => {
        setHotel(prevHotel => {
            const updatedAssets = {...prevHotel.assets};

            // Toggle the amenity
            if (updatedAssets[category]?.includes(asset)) {
                updatedAssets[category] = updatedAssets[category].filter(a => a !== asset);
            } else {
                updatedAssets[category] = updatedAssets[category] ? [...updatedAssets[category], asset] : [asset];
            }

            // Remove the category if no amenities are selected after updating
            if (updatedAssets[category] && updatedAssets[category].length === 0) {
                delete updatedAssets[category];
            }

            return {...prevHotel, assets: updatedAssets};
        });
    };


    // Display selected amenities as a comma-separated list
    const formatAssets = (assets) => {
        let selectedAssets = [];
        for (const category in assets) {
            if (assets[category].length > 0)
                selectedAssets = selectedAssets.concat(assets[category]);
        }
        return selectedAssets.join(', ');
    };

    return (
        <Paper elevation={3} sx={{p: 4, mt: 4, mb: 4}}>
            <ErrorMessage message={errorMessage}/>
            <Box component="form" onSubmit={handleSubmit} sx={{mt: 1}}>
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
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
                />
                <FormControl fullWidth margin="normal">
                    <InputLabel id="hotelCompanyType-label">Hotel Company Type</InputLabel>
                    <Select
                        labelId="hotelCompanyType-label"
                        id="type"
                        name="type"
                        value={hotel.type}
                        label="Hotel Company Type"
                        onChange={handleInputChange}
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
                    onFocus={handleDescriptionDialog}
                    placeholder="Click to edit description"
                    InputProps={{
                        readOnly: true,
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={handleDescriptionDialog} edge="end">
                                    <EditIcon/>
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
                    onClose={handleDescriptionDialog}
                    onSave={handleDescriptionDialog}
                />
                <TextField
                    label="Amenities & Assets"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    value={formatAssets(hotel.assets)}
                    onClick={() => setAmenitiesDialogOpen(true)}
                    InputProps={{
                        readOnly: true,
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => setAmenitiesDialogOpen(true)} edge="end">
                                    <ListIcon/>
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    placeholder="Click to select amenities"
                />
                <AmenitiesDialog
                    open={amenitiesDialogOpen}
                    onClose={() => setAmenitiesDialogOpen(false)}
                    selectedAssets={hotel.assets}
                    onAmenityToggle={handleAmenityToggle}
                />
                {/* Layout for buttons */}
                <Grid container spacing={2} justifyContent="space-between" sx={{mt: 2}}>
                    <Grid item>
                        <Button variant="contained" color="secondary" onClick={clearForm} sx={styles.clearButton}>
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
