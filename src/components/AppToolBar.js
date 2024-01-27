import React, {useEffect, useState} from 'react';
import {Toolbar, Box, IconButton, Typography, Button} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import HomeIcon from '@mui/icons-material/Home';
import AppDrawer from "./AppDrawer";
import {useNavigate} from "react-router-dom";
import {useThemeContext} from "../containers/ThemeProvider";
import {CircularTimer} from "./Timer";
import {useAuth} from "../shared/AuthContext";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const AppToolbar = ({drawerOpen, handleDrawerToggle, styles}) => {
    const navigate = useNavigate();
    const {user, logout, isAuthenticated} = useAuth();
    const {mode, toggleTheme} = useThemeContext();

    return (
        <Toolbar>
            {/* Drawer toggle button */}
            {isAuthenticated &&
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{mr: 2}}
                >
                    <MenuIcon sx={{color: 'white'}}/>
                </IconButton>
            }
            <AppDrawer
                open={drawerOpen}
                onToggleDrawer={handleDrawerToggle}
                styles={styles}
            />

            {/* Spacer to push the following items to the right */}
            <Box marginLeft={160} flexGrow={4} sx={{display: 'flex', alignItems: 'center', gap: 2}}/>
            <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>

                {/* Right-aligned items */}
                <IconButton onClick={() => navigate('/')}>
                    <HomeIcon sx={{color: 'white'}}/>
                </IconButton>

                <IconButton color="inherit" onClick={toggleTheme} sx={{marginX: "15x"}}>
                    {mode === 'dark' ? <Brightness7Icon sx={{color: 'white'}}/> :
                        <Brightness4Icon sx={{color: 'white'}}/>}
                </IconButton>

                {/* Box to show logged-in user */}
                {isAuthenticated &&
                    <Typography component="div" sx={{color: 'white', marginX: "15px", fontWeight: "bold"}}>
                        User:
                        <br/>
                        {user.username}
                    </Typography>
                }
                <CircularTimer initialTime={1500} isAuthenticated={isAuthenticated} onTimeEnd={logout}
                               sx={{marginX: "15px"}}/>
                {/* Logout Button*/}
                <Button
                    variant="outlined"
                    startIcon={<ExitToAppIcon/>}
                    disabled={!isAuthenticated}
                    sx={{
                        borderColor: '#dad1d1', // Custom outline color
                        backgroundColor: 'rgb(60,83,115)', // Optional background color on hover
                        color: 'white',
                        marginX: "15px",
                        marginLeft: "0px",
                        fontWeight: 'bold',
                        '&:hover': {
                            borderColor: '#dad1d1', // Custom outline color on hover
                            backgroundColor: 'rgb(57,77,103)', // Optional background color on hover
                        },
                    }}
                    onClick={logout}
                >
                    Logout
                </Button>
            </Box>
        </Toolbar>
    )
        ;
};

export default AppToolbar;
