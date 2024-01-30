import {Box, CircularProgress, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";

export const Loading = ({initialMessage}) => {

    const [message, setMessage] = useState(initialMessage);

    const alternateMessage = "Just a little more. Hang tight..."

    useEffect(() => {
        const timer = setTimeout(() => {
            setMessage(alternateMessage);
        }, 6000);

        return () => clearTimeout(timer);
    }, [alternateMessage]);

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