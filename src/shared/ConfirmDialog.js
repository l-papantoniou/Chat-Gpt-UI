import React from 'react';
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button} from '@mui/material';

const ConfirmDialog = ({open, handleClose, handleConfirm, title, description}) => {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {description}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} variant="contained" color="secondary">
                    Ακύρωση
                </Button>
                <Button onClick={handleConfirm} variant="contained" color="error" autoFocus>
                    Επιβεβαίωση
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmDialog;
