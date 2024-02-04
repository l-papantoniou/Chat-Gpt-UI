import React from 'react';
import {Box, Typography, Button, Container} from '@mui/material';
import {useNavigate} from 'react-router-dom';

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <Container maxWidth="sm">
            <Box my={4} sx={{textAlign: 'center'}}>
                <Typography variant="h1" color="primary" gutterBottom>
                    404
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Ουπς! Η σελίδα δεν βρέθηκε.
                </Typography>
                <Typography variant="body1" sx={{mb: 3}}>
                    Η σελίδα που αναζητάτε μπορεί να έχει αφαιρεθεί, να έχει αλλάξει το όνομά της ή να μην είναι
                    προσωρινά διαθέσιμη.
                </Typography>
                <Button variant="contained" color="secondary" onClick={() => navigate('/')}>
                    Αρχική σελίδα
                </Button>
            </Box>
        </Container>
    );
};

export default NotFoundPage;
