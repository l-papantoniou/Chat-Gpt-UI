import {DataGrid, DataGridProps} from "@mui/x-data-grid";
import React from "react";

export const MuiDataGrid = (props) => {
    const {rows, columns, loading, ...rest} = props;

    const emptyRecords = [];
    new Array(8).fill(0).forEach((i, it) => {
        emptyRecords.push({id: it + 1});
    });

    return (
        <DataGrid
            loading={loading}
            autoHeight
            columns={columns}
            rows={loading ? emptyRecords : rows.length ? rows : []}
            componentsProps={{
                panel: {
                    sx: {
                        "& .MuiDataGrid-panelWrapper": {
                            width: {xs: "50%", sm: "100%"},
                        },
                        "& .MuiDataGrid-panel": {
                            width: {xs: "50%", sm: "550px"},
                        },
                    },
                },
                toolbar: {csvOptions: {utf8WithBom: true}},
                pagination: {
                    labelRowsPerPage: "Γραμμές ανά σελίδα",
                },
            }}
            getRowId={(rows) => rows.id}
            pageSize={10}
            disableSelectionOnClick
            {...rest}
        />
    );
};
