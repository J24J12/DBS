import React from 'react';
import { 
    Dialog, 
    Button, 
    DialogActions, 
    DialogContent, 
    DialogContentText, 
    DialogTitle,
    IconButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { post } from "../api/axios";

function ModalDelete(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    // TODO: HANDLE 
    const handleDelete = () => {
        const res = post(`/delete/<int:${props.claimID}>`, '');
        if (res.includes("status-200")) {
            window.location.reload();
        } else {
            alert("Error with deleting claim");
        }
    }

    return (
      <div>
        <IconButton variant="contained" onClick={handleClickOpen}><DeleteIcon color="primary" /></IconButton>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            Delete ClaimID
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Do you want to delete ClaimID {props.claimID}?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleDelete} autoFocus>
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}

export default ModalDelete;