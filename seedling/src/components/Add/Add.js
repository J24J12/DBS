import { useState } from "react";
import dayjs from 'dayjs';
import { Box, Button, TextField, Container, Select, MenuItem } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export default function AddPage() {
    const [amount, setAmount] = useState("")
    const [purpose, setPurpose] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [status, setStatus] = useState("")
    const [expense, setExpenseDate] = useState(dayjs(Date.now()))
    const [insuranceId, setInsuranceId] = useState("")

    async function handleChangePassword(e) {
        e.preventDefault()
        console.log(firstName, lastName, amount, purpose, status)
    }

    return (
        <Container>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                    noValidate
                    autoComplete="off"
                    onSubmit={handleChangePassword}
                >
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={insuranceId}
                        label="Age"
                        onChange={(e) => setInsuranceId(e.target.value)}
                    >
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={30}>30</MenuItem>
                    </Select>
                    <TextField id="filled-basic" label="First Name" variant="filled" onChange={(e) => setFirstName(e.target.value)} />
                    <TextField id="filled-basic" label="Last Name" variant="filled" onChange={(e) => setLastName(e.target.value)} />
                    <DesktopDatePicker
                        label="Expense date"
                        inputFormat="MM/DD/YYYY"
                        value={expense}
                        onChange={(e) => setExpenseDate(e)}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    <TextField id="filled-basic" label="Amount" variant="filled" onChange={(e) => setAmount(e.target.value)} />
                    <TextField id="filled-basic" label="Purpose" variant="filled" onChange={(e) => setPurpose(e.target.value)} />
                    <TextField id="filled-basic" label="Status" variant="filled" onChange={(e) => setStatus(e.target.value)} />

                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                    >
                        Add Claim
                    </Button>
                </Box>
            </LocalizationProvider>

        </Container >
    );
}