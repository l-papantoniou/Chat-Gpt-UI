import React from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField} from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";

const TextDialogEditor = ({open, title, value, onChange, onClose, onSave}) => {
    return (
        <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title" fullWidth maxWidth="md">
            <DialogTitle id="form-dialog-title" sx={{m: 0, p: 2}}>
                {title}
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon/>
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="text"
                    label="Edit Text"
                    type="text"
                    fullWidth
                    multiline
                    rows={6}
                    variant="outlined"
                    value={value}
                    onChange={onChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="inherit">
                    Cancel
                </Button>
                <Button onClick={onSave} color="inherit">
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default TextDialogEditor;
