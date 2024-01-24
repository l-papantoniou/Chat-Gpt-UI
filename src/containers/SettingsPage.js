import React from 'react';
import {Container, Typography, Box, Paper, List, ListItem, ListItemText, Divider, Switch} from '@mui/material';
import {useThemeContext} from "./ThemeProvider";

const SettingsPage = () => {

    const {mode, toggleTheme} = useThemeContext();

    return (
        <Container maxWidth="md">
            <Box my={4}>
                <Typography variant="h4" gutterBottom>
                    Settings
                </Typography>
                <Paper elevation={3}>
                    <List component="nav" aria-label="mailbox folders">
                        <ListItem button>
                            <ListItemText primary="Account Settings" secondary="Manage your account details"/>
                        </ListItem>
                        <Divider/>
                        <ListItem button>
                            <ListItemText primary="Notification Preferences" secondary="Customize your notifications"/>
                        </ListItem>
                        <Divider/>

                        <ListItem button>
                            <ListItemText primary="Language Preferences" secondary="Select your preferred language"/>
                        </ListItem>
                        <Divider/>

                        <ListItem button>
                            <ListItemText primary="Privacy Settings" secondary="Manage your privacy options"/>
                        </ListItem>
                        <Divider/>

                        <ListItem button>
                            <ListItemText primary="Email Preferences" secondary="Customize email settings"/>
                        </ListItem>
                    </List>
                    <Divider />

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
    )
        ;
};

export default SettingsPage;
