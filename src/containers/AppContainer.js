import React from 'react';
import {AppBar, Toolbar, Typography, Box, Container, Grid} from '@mui/material';
import Logo from "../assets/Logo.png";
import Moto from "../assets/Moto.png";
import {useAppContainerStyles} from "../themes/AppContainerTheme";

export const AppContainer = ({children}) => {
    const styles = useAppContainerStyles();

    return (
        <>
            <AppBar position="static" sx={styles.appBar}>
                <Toolbar>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <img src={Logo} alt="Logo" style={{height: '88px', marginRight: '10px'}}/>
                        <img src={Moto} alt="Motto" style={{height: '55px'}}/>
                    </Box>
                </Toolbar>
            </AppBar>

            <Container style={{marginTop: '20px', marginBottom: '20px', flexGrow: 1}}>
                {children}
            </Container>

            <Box component="footer"
                 style={{textAlign: 'center', padding: '10px 0', width: '100%', backgroundColor: '#ffffff'}}>
                <Typography variant="body2">
                    © {new Date().getFullYear()} InnGenius. All rights reserved.
                </Typography>
            </Box>
        </>
    );
};


export default AppContainer;
