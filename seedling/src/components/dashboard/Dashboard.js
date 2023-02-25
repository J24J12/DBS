import React, {useContext} from 'react';
import {AuthContext} from '../../context/AuthContext';
import { Grid, Box, Button, Typography } from '@mui/material';
import BasicTable from './BasicTable';
import { useNavigate } from "react-router-dom";
import { deleteCookie } from '../../cookies';
import Header from './Header';


function DashboardContent() {
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
        <Box sx={{ margin: 2 }}>
            <Header />
            <BasicTable />
        </Box>
    );
}

export default DashboardContent;