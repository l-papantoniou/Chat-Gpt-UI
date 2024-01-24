// Example styles, tailor these to fit your branding and desired aesthetics

import {useTheme} from "@mui/material";


export const useAboutPageStyles = () => {
    const theme = useTheme();
    return {
        hero: {
            backgroundImage: 'url(/path-to-your-image.jpg)', // Replace with path to your hero image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '50px 0',
            color: 'white',
        },
        card: {
            margin: '20px',
            minHeight: '150px',
        },
        icon: {
            backgroundColor: 'primary.main',
            height: '60px',
            width: '60px',
        },
        typography: {
            color: theme.palette.secondary.dark
        }
    };
}

