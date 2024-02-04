import {Box, CircularProgress, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";

export const Loading = ({initialMessage}) => {

    const [message, setMessage] = useState(initialMessage);

    const alternateMessage = "Λίγο ακόμα. Κρατηθείτε σφιχτά..."

    // Second alternate message
    const finalMessage = "Σχεδόν έτοιμο, σας ευχαριστούμε για την υπομονή σας..";

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setMessage(alternateMessage);
        }, 6000); // Change message after 4 seconds

        const timer2 = setTimeout(() => {
            setMessage(finalMessage);
        }, 12000); // Change message again after 8 seconds in total

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, [initialMessage]); // Depend on the initialMessage so this effect resets if initialMessage changes

    return (
        <Box
            position="fixed"
            top={0}
            left={0}
            width="100%"
            height="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
                backgroundColor: 'rgba(31,31,31,0.5)',
                zIndex: (theme) => theme.zIndex.drawer + 1,
                pointerEvents: 'none',
            }}
        >
            <CircularProgress size={80} sx={{color: 'orange'}} aria-label="Loading"/>
            <Typography variant="h6" sx={{mt: 2, ml: 2}}>
                {message}
            </Typography>
        </Box>

    )
}