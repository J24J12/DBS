import React from 'react';
import {Grid, Box, Button, Typography} from '@mui/material';
import BasicTable from './BasicTable';

function DashboardContent() {
    return(
        <Box sx={{margin: 2}}>
            <Grid container spacing={2} justifyContent="space-between" sx={{mb: 5}}>
                <Grid item>
                   <Typography variant="h4">View Insurance Claims</Typography>
                </Grid>
                <Grid item>
                    <Button variant="outlined" sx={{mr: 2}}>
                        Logout
                    </Button>
                    <Button variant="contained">
                        Add
                    </Button>
                </Grid>
            </Grid>
            <BasicTable />
        </Box>  
    );
}

export default DashboardContent;