import React from 'react';
import {
    TableContainer, 
    Table,  
    TableHead, 
    TableRow, 
    TableCell, 
    TableBody, 
    Paper,
    IconButton,
    TablePagination
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function createData(id, name, calories, fat, carbs, protein, isConnected) {
    return { id, name, calories, fat, carbs, protein, isConnected };
}
  
const data = [
    createData(1, "Frozen yoghurt", 159, 6.0, 24, 4.0, true),
    createData(2, "Ice cream sandwich", 237, 9.0, 37, 4.3, false),
    createData(3, "Eclair", 262, 16.0, 24, 6.0, false),
    createData(4, "Cupcake", 305, 3.7, 67, 4.3, false),
    createData(5, "Gingerbread", 356, 16.0, 49, 3.9, false)
];
  
function BasicTable() {
    const [rows, setRows] = React.useState(data);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
        <Paper sx={{ width: '100%' }}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Insurance Type</TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right">Policy Start Date</TableCell>
                            <TableCell align="right">Policy End Date</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                            key={row.name}
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                                <TableCell align="right">
                                    <IconButton variant="contained"><EditIcon color="primary" /></IconButton>
                                </TableCell>
                                <TableCell align="right">
                                    <IconButton variant="contained"><DeleteIcon color="primary" /></IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </TableContainer>
        </Paper>
    );
}

export default BasicTable;