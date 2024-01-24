// AppToolbar.js
import React from 'react';
import {Toolbar, Box, IconButton, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import HomeIcon from '@mui/icons-material/Home';
import AppDrawer from "./AppDrawer";
import {useNavigate} from "react-router-dom";
import {useThemeContext} from "../containers/ThemeProvider";
import {CircularTimer} from "./Timer";
import {useAuth} from "../shared/AuthContext";

const AppToolbar = ({drawerOpen, handleDrawerToggle, styles}) => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const handleHomeClick = () => {
        navigate('/'); // Navigate to homepage route
    };

    const {mode, toggleTheme} = useThemeContext();

    return (
        <Toolbar>
            {/* Drawer toggle button */}
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{mr: 2}}
            >
                <MenuIcon sx={{color: 'white'}}/>
            </IconButton>
            <AppDrawer
                open={drawerOpen}
                onToggleDrawer={handleDrawerToggle}
                styles={styles}
            />

            {/* Spacer to push the following items to the right */}
            <Box marginLeft={162} flexGrow={4}/>

            {/* Right-aligned items */}
            <IconButton onClick={handleHomeClick}>
                <HomeIcon sx={{color: 'white'}}/>
            </IconButton>

            <IconButton color="inherit" onClick={toggleTheme} style={{marginLeft: "10px"}}>
                {mode === 'dark' ? <Brightness7Icon sx={{color: 'white'}}/> : <Brightness4Icon sx={{color: 'white'}}/>}
            </IconButton>

            {/* Box to show logged-in user */}
            <Typography component="div" sx={{color: 'white', marginLeft: '40px', marginRight: "30px"}}>
                Logged in as:
                <br/>
                {user.username}
            </Typography>
            <CircularTimer initialTime={900} />
            {/* Add more icons or user display here */}
        </Toolbar>
    );
};

export default AppToolbar;
