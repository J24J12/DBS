import React, {useContext} from 'react';
import {AuthContext} from '../../context/AuthContext';
import { Grid, Button, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { deleteCookie } from '../../cookies';

function Header() {
    const navigate = useNavigate();
    const {setAuth} = useContext(AuthContext)

    function handleAdd() {
        navigate("/add");
    }

    const logout = () => {    
        setAuth({})
        deleteCookie("auth")
        navigate("/login")
    }


    return (
        <Grid container spacing={2} justifyContent="space-between" sx={{ mb: 5 }}>
            <Grid item>
                <Typography variant="h4">View Insurance Claims</Typography>
            </Grid>
            <Grid item>
                <Button variant="outlined" sx={{ mr: 2 }} onClick={logout}>
                    Logout
                </Button>
                <Button variant="contained" onClick={handleAdd}>
                    Add
                </Button>
            </Grid>
        </Grid>
    );
}

export default Header;