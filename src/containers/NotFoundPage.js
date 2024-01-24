import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <Container maxWidth="sm">
            <Box my={4} sx={{ textAlign: 'center' }}>
                <Typography variant="h1" color="primary" gutterBottom>
                    404
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Oops! Page not found.
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </Typography>
                <Button variant="contained" color="primary" onClick={() => navigate('/')}>
                    Go to Homepage
                </Button>
            </Box>
        </Container>
    );
};

export default NotFoundPage;
