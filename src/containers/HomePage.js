import React from 'react';
import {Box, Container, Typography, Button, Card, CardContent, CardMedia, Paper} from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import {useAuth} from "../shared/AuthContext";

const HomePage = () => {
    const {user} = useAuth()
    return (
        <Container maxWidth="lg">
            <Paper elevation={3} sx={{my: 4, py: 4, textAlign: 'center', borderRadius: 3}}>
                {user && user.username && (
                    <Paper elevation={6} sx={{
                        mt: 2,
                        mb: 4,
                        p: 2,
                        textAlign: 'center',
                        borderRadius: 2,
                        backgroundColor: 'secondary.light',
                        maxWidth: 'fit-content',
                        mx: 'auto'
                    }}>
                        <Typography variant="h6" gutterBottom sx={{fontWeight: 'medium', color: 'white'}}>
                            Welcome, {user.username}!
                        </Typography>
                    </Paper>
                )}
                <Typography variant="h2" gutterBottom sx={{fontWeight: 'bold', mt: 4, mb: 2}}>
                    Elevate Your Hotel's Story with AI
                </Typography>
                <Typography variant="h5" sx={{mb: 3}}>
                    Create Captivating Content Seamlessly
                </Typography>
                <Button variant="contained" color="primary" sx={{mb: 2}}>
                    Start Creating
                </Button>

                <Box sx={{display: 'flex', justifyContent: 'center', mt: 4}}>
                    <Card sx={{maxWidth: 345}}>
                        <CardMedia>
                            <AutoStoriesIcon sx={{fontSize: 80, color: 'primary.main'}}/>
                        </CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                AI-Powered Content Creation
                            </Typography>
                            <Typography variant="body1">
                                Leverage the power of generative AI to craft unique, engaging narratives for your hotel.
                                Elevate your marketing and guest experiences with content that stands out.
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Paper>
        </Container>
    );
};

export default HomePage;
