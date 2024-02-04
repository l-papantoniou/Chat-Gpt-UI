import React from 'react';
import {Box, Container, Typography, Button, Card, CardContent, CardMedia, Paper} from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import {useAuth} from "../shared/AuthContext";
import {useNavigate} from "react-router-dom";

const HomePage = () => {
    const {user} = useAuth();
    const navigate = useNavigate();
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
                            Καλώς ήρθες, {user.username}!
                        </Typography>
                    </Paper>
                )}
                <Typography variant="h3" gutterBottom sx={{fontWeight: 'bold', mt: 4, mb: 2}}>
                    Αναβαθμίστε το περιεχόμενο του τουριστικού σας καταλύματος σας, με την δύναμη της τεχνητής νοημοσύνης
                </Typography>
                <Button variant="contained" color="secondary" sx={{my: 2}}
                        onClick={() => navigate('/ai-content-creation')}>
                    <Typography variant="h6" gutterBottom sx={{ color: 'white'}}>
                        Ξεκινηστε  τωρα
                    </Typography>
                </Button>

                <Box sx={{display: 'flex', justifyContent: 'center', mt: 4}}>
                    <Card sx={{maxWidth: 345}}>
                        <CardMedia>
                            <AutoStoriesIcon sx={{fontSize: 80, color: 'primary.main'}}/>
                        </CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div" sx={{fontWeight: 'bold'}}>
                                Δημιουργία περιεχομένου με τεχνητή νοημοσύνη
                            </Typography>
                            <Typography variant="body1">
                                Αξιοποιήστε τη δύναμη της παραγωγικής τεχνητής νοημοσύνης για να δημιουργήσετε μοναδικές, ελκυστικές αφηγήσεις για τα τουριστικά σας καταλύματα.
                                Αναβαθμίστε το μάρκετινγκ και τις εμπειρίες των επισκεπτών σας με περιεχόμενο που ξεχωρίζει.
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Paper>
        </Container>
    );
};

export default HomePage;
