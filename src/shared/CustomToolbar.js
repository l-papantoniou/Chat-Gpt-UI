import { Button, ToolbarProps } from "@mui/material";
import React from "react";
import {
    GridToolbarContainer,
    GridToolbarColumnsButton,
    GridToolbarFilterButton,
    GridToolbarDensitySelector,
    GridToolbarExport,
} from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";

export const CustomToolbar = () => {
    const navigate = useNavigate();
    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <GridToolbarContainer>
                <GridToolbarColumnsButton />
                <GridToolbarFilterButton />
                <GridToolbarDensitySelector />
                <GridToolbarExport />
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
