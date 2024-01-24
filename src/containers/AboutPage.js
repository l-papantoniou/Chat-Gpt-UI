import React from 'react';
import {Box, Container, Typography, Card, CardContent, Grid, Avatar, CardMedia} from '@mui/material';
import HotelIcon from '@mui/icons-material/Hotel';
import AdbIcon from '@mui/icons-material/Adb'; // An example icon. Replace with an icon that represents AI or ChatGPT
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import {BarChart, Group, RocketLaunch} from "@mui/icons-material";
import {useAboutPageStyles} from "../themes/AboutPageTheme";

// const styles = {
//     hero: {
//         backgroundImage: 'url(/path-to-your-image.jpg)', // Replace with path to your hero image
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         padding: '50px 0',
//         color: 'white',
//     },
//     card: {
//         margin: '20px',
//         minHeight: '150px',
//     },
//     icon: {
//         backgroundColor: 'primary.main',
//         height: '60px',
//         width: '60px',
//     },
// };

const AboutPage = () => {
    const styles = useAboutPageStyles();
    return (
        <Container component="main" maxWidth="lg">
            <Box style={styles.hero}>
                <Typography variant="h2" align="center" style={styles.typography} >
                    Revolutionizing Hospitality: AI-Driven Content for Your Hotel's Future
                </Typography>
            </Box>

            <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 2, my: 4}}>
                <Card sx={{display: 'flex', alignItems: 'center', p: 2}}>
                    <CardMedia>
                        <HotelIcon sx={{fontSize: 40, color: 'secondary.main'}}/>
                    </CardMedia>
                    <CardContent>
                        <Typography variant="body1" paragraph>
                            Craft and enhance your hotel's profile with AI-driven content creation tools, ensuring
                            your hotel stands out in the market.
                        </Typography>
                    </CardContent>
                </Card>

                <Card sx={{display: 'flex', alignItems: 'center', p: 2}}>
                    <CardMedia>
                        <AdbIcon sx={{fontSize: 40, color: 'secondary.main'}}/>
                    </CardMedia>
                    <CardContent>
                        <Typography variant="body1" paragraph>
                            Continuous innovation keeps your brand at the forefront, ensuring you're always one step
                            ahead in hospitality.
                        </Typography>
                    </CardContent>
                </Card>

                <Card sx={{display: 'flex', alignItems: 'center', p: 2}}>
                    <CardMedia>
                        <BusinessCenterIcon sx={{fontSize: 40, color: 'secondary.main'}}/>
                    </CardMedia>
                    <CardContent>
                        <Typography variant="body1" paragraph>
                            Simplify complex tasks, from managing bookings to handling customer inquiries, with our
                            intelligent platform.
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
            <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 2, my: 4}}>
                <Card sx={{display: 'flex', alignItems: 'center', p: 2}}>
                    <CardMedia>
                        <BarChart sx={{fontSize: 40, color: 'secondary.main'}}/>
                    </CardMedia>
                    <CardContent>
                        <Typography variant="body1" paragraph>
                            Tailored recommendations and data-driven insights help you carve out a niche for your hotel
                            company in a saturated market.
                        </Typography>
                    </CardContent>
                </Card>

                <Card sx={{display: 'flex', alignItems: 'center', p: 2}}>
                    <CardMedia>
                        <RocketLaunch sx={{fontSize: 40, color: 'secondary.main'}}/>
                    </CardMedia>
                    <CardContent>
                        <Typography variant="body1" paragraph>
                            Leverage the latest advancements in AI technology, like ChatGPT, to optimize your hotel
                            operations and guest services.
                        </Typography>
                    </CardContent>
                </Card>

                <Card sx={{display: 'flex', alignItems: 'center', p: 2}}>
                    <CardMedia>
                        <Group sx={{fontSize: 40, color: 'secondary.main'}}/>
                    </CardMedia>
                    <CardContent>
                        <Typography variant="body1" paragraph>
                            Join a growing network of forward-thinking hoteliers revolutionizing the guest experience
                            with InnGenius.
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Container>
    )
}

export default AboutPage;