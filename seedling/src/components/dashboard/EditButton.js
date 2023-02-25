import React from 'react';
import { 
    IconButton
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";

function EditButton(props) {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate(`edit/${props.claimID}`);
    };

    return (
        <IconButton onClick={handleClick} variant="contained"><EditIcon color="primary" /></IconButton>
    );
}

export default EditButton;