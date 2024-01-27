import {Button} from "@mui/material";
import React from "react";
import {
    GridToolbarColumnsButton,
    GridToolbarContainer,
    GridToolbarDensitySelector,
    GridToolbarExport,
    GridToolbarFilterButton,
} from "@mui/x-data-grid";
import {useNavigate} from "react-router-dom";

export const CustomToolbar = () => {
    const navigate = useNavigate();
    return (
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <GridToolbarContainer>
                <GridToolbarColumnsButton/>
                <GridToolbarFilterButton/>
                <GridToolbarDensitySelector/>
                <GridToolbarExport/>
            </GridToolbarContainer>
            <Button
                className="formButton"
                variant="contained"
                onClick={() => navigate("/newaitima")}
            >
                Νέο Αίτημα
            </Button>
        </div>
    );
};
