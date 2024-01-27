import React, {useState, useEffect} from 'react';
import {Typography, Box, CircularProgress} from '@mui/material';
import {formatTime} from "../utils/formatTime";


// CircularTimer component
export const CircularTimer = ({initialTime, isAuthenticated, onTimeEnd}) => {
    // State to keep track of the time left
    const [timeLeft, setTimeLeft] = useState(initialTime);

    useEffect(() => {
        // Do not run the timer if the user is not authenticated
        if (!isAuthenticated) {
            setTimeLeft(initialTime);
            return;
        }

        // Set up a timer using setInterval
        const intervalId = setInterval(() => {
            setTimeLeft((prevTime) => {
                const updatedTime = prevTime - 1;
                // When time reaches zero, clear the interval and invoke the callback
                if (updatedTime <= 0) {
                    clearInterval(intervalId);
                    onTimeEnd();
                    return 0;
                }
                return updatedTime;
            });
        }, 1000);

        // Clear the interval on component unmount
        return () => clearInterval(intervalId);
    }, [isAuthenticated, initialTime, onTimeEnd]);

    return (
        <Box position="relative" display="inline-flex">
            <CircularProgress
                variant="determinate"
                value={timeLeft}
                size={50}
                thickness={3}
                sx={{color: "white"}}
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
                    {timeLeft > 0 ? formatTime(timeLeft) : "00:00"}
                </Typography>
            </Box>
        </Box>
    );
};
