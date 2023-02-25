import React from 'react';
import { Box } from '@mui/material';
import BasicTable from './BasicTable';
import Header from './Header';

function DashboardContent() {

    return (
        <Box sx={{ margin: 2 }}>
            <Header />
            <BasicTable />
        </Box>
    );
}

export default DashboardContent;