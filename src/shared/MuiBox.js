import React from "react";
import {styled} from "@mui/system";
import Box from "@mui/material/Box";

const Custom = styled(Box)({
    paddingTop: "20px",
    paddingBottom: "20px",
});

export const MuiBox = ({children}) => {
    return <Custom>{children}</Custom>;
};
