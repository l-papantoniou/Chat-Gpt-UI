import React, {useState} from 'react';
import {AppBar, Toolbar, Typography, Box, Container, CssBaseline} from '@mui/material';
import Logo from "../assets/Logo.png";
import Moto from "../assets/Moto.png";
import DarkMoto from "../assets/dark-moto.png";
import {useAppContainerStyles} from "../themes/AppContainerTheme";
import AppToolbar from "../components/AppToolBar";
import {useThemeContext} from "./ThemeProvider";


export const AppContainer = ({children}) => {
    const {mode} = useThemeContext();

    const styles = useAppContainerStyles();

    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    // Close the drawer if the event is outside of the drawer
    const handleDrawerClose = (event) => {
        if (drawerOpen && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(false);
    };


    return (
        <>
            <CssBaseline/>
            <Box component="layout" style={styles.layout}>
                <Toolbar>
                    <Box component="log-frame" style={styles.logoFrame}>
                        <img src={Logo} alt="Logo" style={styles.logo}/>
                        {mode === "light" ? <img src={Moto} alt="Motto" style={styles.moto}/> :
                            <img src={DarkMoto} alt="DarkMoto" style={styles.moto}/>}
                    </Box>
                </Toolbar>
            </Box>
            <AppBar position="fixed" sx={styles.appBar}>
                <Toolbar>
                    <AppToolbar
                        drawerOpen={drawerOpen}
                        handleDrawerToggle={handleDrawerToggle}
                        styles={styles}
                    />
                    {/* Rest of the app bar items */}
                </Toolbar>
            </AppBar>

            {/* Main content */}
            <Box
                component="main"
                onClick={handleDrawerClose}
                sx={{...styles.mainContent, marginLeft: drawerOpen ? `${styles.drawer.width}px` : 0}}
            >
                <Container maxWidth="lg">
                    {children}
                </Container>
            </Box>
            <Toolbar/>

            {/* Footer */}
            <Box component="footer"
                 style={styles.footer} >
                <Typography variant="body2">
                    © {new Date().getFullYear()} InnGenius. All rights reserved.
                </Typography>
            </Box>

        </>
    );
};


export default AppContainer;
