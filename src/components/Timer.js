import React, {useState, useEffect} from 'react';
import {Typography, Box, CircularProgress} from '@mui/material';

// Helper function to format time
const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

export const CircularTimer = ({initialTime}) => {
    const [timeLeft, setTimeLeft] = useState(initialTime);
    const [progress, setProgress] = useState(100);

    useEffect(() => {
        // Exit early when we reach 0
        if (!timeLeft) return;

        const intervalId = setInterval(() => {
            setTimeLeft((prevTime) => {
                // If time left is greater than 0, decrement it, otherwise return 0
                const updatedTime = prevTime - 1;
                return updatedTime > 0 ? updatedTime : 0;
            });
            setProgress((prevProgress) => {
                // Calculate the new progress
                const newProgress = prevProgress - (100 / initialTime);
                return newProgress > 0 ? newProgress : 0;
            });
        }, 1000);

        // Clear the interval if the time left is 0 to stop the timer
        if (timeLeft === 0) {
            clearInterval(intervalId);
        }

        // Clean up the interval on unmount
        return () => clearInterval(intervalId);
    }, [timeLeft, initialTime]);

    return (
        <Box position="relative" display="inline-flex">
            <CircularProgress
                variant="determinate"
                value={progress}
                sx={{color: "white"}}
                size={50}
                thickness={3}
            />
            <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Typography variant="caption" component="div" sx={{color: "white", padding: '5px', fontSize: '0.75em'}}>
                    {formatTime(timeLeft)}
                </Typography>
            </Box>
        </Box>
    );
};

