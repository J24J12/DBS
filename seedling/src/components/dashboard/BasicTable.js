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
import data from './mockData'

// TODO: GET DATA FOR DASHBOARD AND PUT INTO VARIABLE DATA

const headers = [
    "First Name",
    "Last Name",
    "Expense Date",
    "Amount",
    "Purpose",
    "Follow Up",
    "Previous Claim ID",
    "Status",
    "Last Edit Claim Date",
    "",
    "",
    ""
]
  
function BasicTable() {
    const [rows, setRows] = React.useState(data);
    const [headerRows, setHeaderRows] = React.useState(headers);

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    function convertDateTime(isoStr) {
        const date = new Date(isoStr);
        const timestamp = date.getTime();
        const dateCopy = new Date(timestamp);
        const newDateString = dateCopy.toString().replace(" GMT+0800 (Singapore Standard Time)", "")
        return newDateString
    }

    return (
        <Paper sx={{ width: '100%' , overflow: 'hidden'}}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {headerRows.map((header) => (
                                <TableCell>{header}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => (
                            <TableRow
                            key={row.name}
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.FirstName}
                                </TableCell>
                                <TableCell>{row.LastName}</TableCell>
                                <TableCell>{convertDateTime(row.ExpenseDate)}</TableCell>
                                <TableCell>{row.Amount}</TableCell>
                                <TableCell>{row.Purpose}</TableCell>
                                <TableCell>{row.Followup}</TableCell>
                                <TableCell>{row.PreviousClaimID}</TableCell>
                                <TableCell>{row.Status}</TableCell>
                                <TableCell>{row.LastEditClaimDate}</TableCell>
                                <TableCell>
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