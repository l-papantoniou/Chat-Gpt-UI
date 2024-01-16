import { Box, ClickAwayListener, IconButton, Tooltip } from "@mui/material";
import React, { useState } from "react";


export const MuiTooltip = (props) => {
    const [openTooltip, setOpenTooltip] = useState(false);

    const handleTooltipOpen = () => {
        setOpenTooltip(!openTooltip);
    };
    const handleTooltipClose = () => {
        setOpenTooltip(false);
    };

    return (
        <ClickAwayListener onClickAway={handleTooltipClose}>
            <Tooltip
                open={openTooltip}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                title={props.tooltiptitle}
                placement="right-end"
            >
                <IconButton onClick={handleTooltipOpen} color="secondary" size="small">
                    <Box
                        component="img"
                        sx={{
                            height: 22,
                            width: 22,
                        }}
                        alt="exclametion"
                        src="/o/mts-external-app/images/exclametion.svg"
                    />
                </IconButton>
            </Tooltip>
        </ClickAwayListener>
    );
};
