import {useTheme} from "@mui/material";

export const useAppContainerStyles = () => {

    const drawerWidth = 240; // Define the width of the drawer

    const appBarHeight = 155; // Assuming AppBar height is 64px

    const theme = useTheme();
    return {
        appBar: {
            backgroundColor: '#354e70',
            color: theme.palette.primary.contrastText,
            boxShadow: theme.shadows[7],
            borderRadius: '4px',
            top: '88px',
            zIndex: (theme) => theme.zIndex.drawer + 1
        },
        drawer: {
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
                position: 'fixed',
                boxSizing: 'border-box',
                borderRadius:'5px',
                top: `${155}px`, // Replace with the actual height of AppBa
                height: `calc(100% - ${155}px)`,
            },
            '& .MuiListItem-root': { // Add styles for list items
                margin: theme.spacing(2, 0), // Add space above and below each item
                borderRadius: theme.shape.borderRadius, // Optional: round corners
                '&:hover': {
                    backgroundColor:theme.palette.primary.light, // Color on hover
                },
            },
            '&.Mui-selected': { // When item is selected (optional)
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
                '&:hover': {
                    backgroundColor: "#6a7994", // Darken on hover when selected
                },
            }
        },
        layout: {
            position: 'fixed',
            top: 0, left: 0, right: 0, zIndex: 1299,
            backgroundColor:  theme.palette.background.default
        },
        logoFrame: {
            display: 'flex',
            alignItems: 'center'
        },
        logo: {
            height: '88px',
            marginRight: '10px'
        },
        moto: {
            height: '55px'
        },
        mainContent: {
            flexGrow: 1,
            padding: theme.spacing(3),
            marginTop: `${appBarHeight}px`,
            height: '100vh',
            transition: theme.transitions.create('marginLeft', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            // Remove the overflow hidden if you want to allow scrolling
            overflow: 'hidden',
        },

        footer: {
            textAlign: 'center',
            padding:
                '10px 0',
            width:
                '100%',
            backgroundColor:
                theme.palette.background.default
        }

        // content: {
        //     maxWidth: '',
        //     flexGrow: 1,
        //     padding: theme.spacing(3),
        //     transition: theme.transitions.create('margin', {
        //         easing: theme.transitions.easing.sharp,
        //         duration: theme.transitions.duration.leavingScreen,
        //     }),
        //     marginLeft: -drawerWidth,
        // },
        // contentShift: {
        //     transition: theme.transitions.create('margin', {
        //         easing: theme.transitions.easing.easeOut,
        //         duration: theme.transitions.duration.enteringScreen,
        //     }),
        //     marginLeft: 0,
        // },
    };
}