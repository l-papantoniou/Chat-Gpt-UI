import React from 'react';
import {Divider, Drawer, List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {navigationItems} from '../statics/navigationItems'; // or wherever you store your items


const AppDrawer = ({open, onToggleDrawer, styles}) => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
        onToggleDrawer(false); // Close the drawer after navigation
    };

    return (
        <Drawer
            variant="persistent"
            anchor="left"
            open={open}
            sx={{...styles.drawer}}
        >
            <List>
                {navigationItems.map((item, id) => (
                    <ListItem button key={id} onClick={() => handleNavigation(item.route)}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
        </Drawer>
    );
};


export default AppDrawer;
