import React from 'react';
import {Box, Button, Typography} from '@mui/material';

//styles
const avatarStyle = {
    backgroundColor: "#1bbd7e",
    marginTop: "20px",
};
const btnstyle = {margin: "8px 0"};

const LoginPage = () => {

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <Box textAlign="center" sx={{p: 5, border: "1px solid black"}}>
                <Typography>
                    Πρέπει να συνδεθείτε με τους προσωπικούς σας κωδικούς TaxisNet
                </Typography>
                <br/>
                <br/>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={() => {
                    }}
                >
                    <Typography>{"Είσοδος"}</Typography>
                </Button>
            </Box>
        </div>
    );
}
export default LoginPage;