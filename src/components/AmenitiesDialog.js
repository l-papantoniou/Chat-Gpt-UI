// AmenitiesDialog.js
import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    List,
    ListItem,
    ListItemText,
    Checkbox,
    Accordion,
    AccordionSummary,
    AccordionDetails, IconButton, ListItemIcon
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import {amenityOptions} from "../statics/amenityOptions";

const AmenitiesDialog = ({open, onClose, selectedAmenities, onAmenityToggle}) => {

    const isAmenitySelected = (amenity) => selectedAmenities.includes(amenity);

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
            <DialogTitle sx={{m: 0, p: 2}}>
                Select Amenities & Assets
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon/>
                </IconButton>
            </DialogTitle> <DialogContent>
            {Object.entries(amenityOptions).map(([category, { icon, amenities }]) => (
                <Accordion key={category}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <ListItemIcon>{icon}</ListItemIcon>
                        <ListItemText primary={category} />
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            {amenities.map((amenity) => (
                                <ListItem key={amenity} button onClick={() => onAmenityToggle(amenity)}>
                                    <Checkbox checked={isAmenitySelected(amenity)} />
                                    <ListItemText primary={amenity} />
                                </ListItem>
                            ))}
                        </List>
                    </AccordionDetails>
                </Accordion>
            ))}
        </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="inherit">
                    Done
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AmenitiesDialog;
