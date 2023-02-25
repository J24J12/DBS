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
import { useNavigate } from "react-router-dom";

function ModalDelete(props) {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    // TODO: HANDLE 
    const handleDelete = () => {
        const res = post('https://reqres.in/api/posts/1', props.claimID);
        if (res === "200") {
            navigate("/");
        } else {
            alert("Error with deleting claim");
            navigate("/");
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