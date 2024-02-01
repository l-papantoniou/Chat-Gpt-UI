import React from 'react';
import {Box, Card, CardContent, CardMedia, Container, Typography} from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description'; // Icon representing content creation
import TranslateIcon from '@mui/icons-material/Translate'; // Icon for translation services
import TrendingUpIcon from '@mui/icons-material/TrendingUp'; // Icon for market trends and insights
import {useAboutPageStyles} from "../themes/AboutPageTheme";

const AboutPage = () => {
    const styles = useAboutPageStyles();

    return (
        <Container component="main" maxWidth="lg">
            <Box style={styles.hero}>
                <Typography variant="h2" align="center" style={styles.typography}>
                    Empowering Hospitality with AI: Transform Your Content Strategy
                </Typography>
            </Box>

            <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 2, my: 4}}>
                <Card sx={{display: 'flex', alignItems: 'center', p: 2}}>
                    <CardMedia>
                        <DescriptionIcon sx={{fontSize: 40, color: 'secondary.main'}}/>
                    </CardMedia>
                    <CardContent>
                        <Typography variant="body1" paragraph>
                            Elevate your accommodation's appeal with AI-crafted content, meticulously designed to capture your unique brand voice and offerings.
                        </Typography>
                    </CardContent>
                </Card>

                <Card sx={{display: 'flex', alignItems: 'center', p: 2}}>
                    <CardMedia>
                        <TranslateIcon sx={{fontSize: 40, color: 'secondary.main'}}/>
                    </CardMedia>
                    <CardContent>
                        <Typography variant="body1" paragraph>
                            Break language barriers and reach a global audience with advanced AI translation, tailored for diverse visitors.
                        </Typography>
                    </CardContent>
                </Card>

                <Card sx={{display: 'flex', alignItems: 'center', p: 2}}>
                    <CardMedia>
                        <TrendingUpIcon sx={{fontSize: 40, color: 'secondary.main'}}/>
                    </CardMedia>
                    <CardContent>
                        <Typography variant="body1" paragraph>
                            Stay ahead of the curve by leveraging AI-driven market insights to adapt your content strategy to evolving guest expectations.
                        </Typography>
                    </CardContent>
                </Card>
            </Box>

                {/* Add more cards if needed to cover other aspects of your AI application */}
        </Container>
    )
}

export default AboutPage;
