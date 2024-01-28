import {Box, CircularProgress, Typography} from "@mui/material";
import React from "react";

export const Loading = ({message}) => {

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
            }}
        >
            <CircularProgress size={80} sx={{color: 'orange'}}/>
            <Typography variant="h6" sx={{mt: 2, ml: 2}}>
                {message}
            </Typography>
        </Box>

    )
}