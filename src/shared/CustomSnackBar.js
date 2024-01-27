import React from 'react';
import { Snackbar, Alert } from '@mui/material';

const CustomSnackbar = ({ open, message, onClose, severity }) => {
    return (
        <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={onClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            sx={{
                '& .MuiSnackbarContent-root': {
                    minWidth: '400px',
                    fontSize: '1rem',
                },
            }}
        >
            <Alert
                onClose={onClose}
                severity={severity}
                sx={{ width: '100%' }}
            >
                {message}
            </Alert>
        </Snackbar>
    );
};

export default CustomSnackbar;
