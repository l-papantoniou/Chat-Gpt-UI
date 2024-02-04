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
                    Δημιουργία περιεχομένου τουριστικών καταλυμάτων με την δύναμη του AI
                </Typography>
            </Box>

            <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 2, my: 4}}>
                <Card sx={{display: 'flex', alignItems: 'center', p: 2}}>
                    <CardMedia>
                        <DescriptionIcon sx={{fontSize: 40, color: 'secondary.main'}}/>
                    </CardMedia>
                    <CardContent>
                        <Typography variant="body1" paragraph>
                            Αναβαθμίστε την απήχηση του καταλύματός σας με περιεχόμενο σχεδιασμένο με τεχνητή νοημοσύνη,
                            το οποίο έχει σχεδιαστεί σχολαστικά για να να αποτυπώσει τη μοναδική χροιά της και τις
                            παροχές του καταλύματός σσας.
                        </Typography>
                    </CardContent>
                </Card>

                <Card sx={{display: 'flex', alignItems: 'center', p: 2}}>
                    <CardMedia>
                        <TranslateIcon sx={{fontSize: 40, color: 'secondary.main'}}/>
                    </CardMedia>
                    <CardContent>
                        <Typography variant="body1" paragraph>
                            Σπάστε τα γλωσσικά σύνορα και προσεγγίστε ένα παγκόσμιο κοινό με την προηγμένη μετάφραση AI,
                            προσαρμοσμένη για διαφορετικούς επισκέπτες.
                        </Typography>
                    </CardContent>
                </Card>

                <Card sx={{display: 'flex', alignItems: 'center', p: 2}}>
                    <CardMedia>
                        <TrendingUpIcon sx={{fontSize: 40, color: 'secondary.main'}}/>
                    </CardMedia>
                    <CardContent>
                        <Typography variant="body1" paragraph>
                            Παραμείνετε στην κορυφή των εξελίξεων, αξιοποιώντας τις γνώσεις της αγοράς με βάση την Τεχνητή Νοημοσύνη,
                            για να προσαρμόσετε τη στρατηγική περιεχομένου σας στις εξελισσόμενες προσδοκίες των επισκεπτών.
                        </Typography>
                    </CardContent>
                </Card>
            </Box>

            {/* Add more cards if needed to cover other aspects of your AI application */}
        </Container>
    )
}

export default AboutPage;
