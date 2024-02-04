import React from 'react';
import {Container, Typography, Box, Paper, List, ListItem, ListItemText, Divider, Switch} from '@mui/material';
import {useThemeContext} from "./ThemeProvider";

const SettingsPage = () => {

    const {mode, toggleTheme} = useThemeContext();

    return (
        <Container maxWidth="md">
            <Box my={4}>
                <Typography variant="h4" gutterBottom>
                    Ρυθμίσεις
                </Typography>
                <Paper elevation={3}>
                    <List component="nav" aria-label="mailbox folders">
                        <ListItem button>
                            <ListItemText primary="Ρυθμίσεις λογαριασμού" secondary="Διαχειριστείτε τα στοιχεία του λογαριασμού σας"/>
                        </ListItem>
                        <Divider/>
                        <ListItem button>
                            <ListItemText primary="Notification Preferences" secondary="Προτιμήσεις ειδοποιήσεων"/>
                        </ListItem>
                        <Divider/>

                        <ListItem button>
                            <ListItemText primary="Προτιμήσεις γλώσσας" secondary="Επιλέξτε τη γλώσσα προτίμησής σας"/>
                        </ListItem>
                        <Divider/>

                        <ListItem button>
                            <ListItemText primary="Ρυθμίσεις απορρήτου" secondary="Διαχειριστείτε τις επιλογές απορρήτου σας"/>
                        </ListItem>
                        <Divider/>

                        <ListItem button>
                            <ListItemText primary="Προτιμήσεις email" secondary="Προσαρμογή ρυθμίσεων email"/>
                        </ListItem>
                    </List>
                    <Divider/>

                    <ListItem>
                        <ListItemText primary="Dark Mode"/>
                        <Switch
                            edge="end"
                            onChange={toggleTheme}
                            checked={mode}
                        />
                    </ListItem>
                </Paper>
            </Box>
        </Container>
    );
};

export default SettingsPage;
