import {Box, CircularProgress, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";

export const Loading = ({initialMessage}) => {

    const [message, setMessage] = useState(initialMessage);

    const firstAlternateMessage = "Still working on it, please wait a bit more...";
    const secondAlternateMessage = "Just a little more. Hang tight..."

    useEffect(() => {
        const firstTimer = setTimeout(() => {
            setMessage(firstAlternateMessage);

            // Set another timer for the second message change
            const secondTimer = setTimeout(() => {
                setMessage(secondAlternateMessage);
            }, 5000);

            // Clear the second timer when component unmounts or changes state
            return () => clearTimeout(secondTimer);
        }, 5000);

        // Clear the first timer when component unmounts or changes state
        return () => clearTimeout(firstTimer);
    }, [firstAlternateMessage, secondAlternateMessage]);

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