import {Grid} from "@mui/material";
import Logo from "../assets/Logo.png";
import Moto from "../assets/Moto.png";
import React from "react";

export const AppLogo = ({styles}) => {
    return (
        <>
            {/* Logo and Motto should be in their own container for alignment */}
            <Grid container direction="row" alignItems="flex-start" sx={{width: '100%'}}>
                <Grid item>
                    <img src={Logo} alt="App Logo" style={styles.appLogo}/>
                </Grid>
                <Grid item>
                    <img src={Moto} alt="App Motto" style={styles.appMoto}/>
                </Grid>
            </Grid>
        </>
    )
}