import { useState } from "react";
import dayjs from 'dayjs';
import { Box, Button, TextField, Container, Typography, Checkbox, FormControlLabel, FormLabel } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { get, post } from "../api/axios"
import InputAdornment from '@mui/material/InputAdornment';
import { Route, Link, Routes, useNavigate } from 'react-router-dom';

export default function AddForm() {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [expenseDate, setExpenseDate] = useState(dayjs(Date.now()))
    const [amount, setAmount] = useState("")
    const [purpose, setPurpose] = useState("")
    const [followUp, setFollowUp] = useState(true);
    const [prevClaimId, setPrevClaimId] = useState("");
    // const [status, setStatus] = useState("")
    // const [insuranceId, setInsuranceId] = useState("")

    async function handleChangePassword(e) {
        e.preventDefault()
        console.log(firstName, lastName, expenseDate.format('DD/MM/YYYY'), amount, purpose, followUp, prevClaimId)
        // post("localhost/add_claim", {
        //     first_name: firstName,
        //     last_name: lastName,
        //     date: expenseDate,
        //     claim_amt: amount,
        //     purpose: purpose,
        //     follow_up: followUp,
        //     prev_claim_id: prevClaimId
        // })
    }

    function handleBack() {
        navigate(-1);
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Container >
                <Box
                    justifyContent="center"
                    alignItems="center"
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '75%' },
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                    noValidate
                    autoComplete="off"
                    onSubmit={handleChangePassword}
                >
                    <Typography variant="h3" textAlign={"center"}>Add Insurance Claim</Typography>
                    {/* <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={insuranceId}
                        label="Age"
                        onChange={(e) => setInsuranceId(e.target.value)}
                    >
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={30}>30</MenuItem>
                    </Select> */}
                    <TextField id="filled-basic" label="First Name" variant="filled" onChange={(e) => setFirstName(e.target.value)} />
                    <TextField id="filled-basic" label="Last Name" variant="filled" onChange={(e) => setLastName(e.target.value)} />
                    <DesktopDatePicker
                        label="Expense date"
                        inputFormat="MM/DD/YYYY"
                        value={expenseDate}
                        onChange={(e) => setExpenseDate(e)}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    <FormControlLabel
                        value="start"
                        control={<Checkbox
                            checked={followUp}
                            onChange={(e) => setFollowUp(e.target.checked)}
                            inputProps={{ 'aria-label': 'controlled' }} />}
                        label="Start"
                        labelPlacement="start"
                    />
                    <TextField id="filled-basic" label="Amount" prefix="$" type="number" variant="filled" onChange={(e) => setAmount(e.target.value)}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }} />
                    <TextField id="filled-basic" label="Purpose" variant="filled" onChange={(e) => setPurpose(e.target.value)} />
                    <TextField id="filled-basic" label="Previous Claim ID" variant="filled" onChange={(e) => setPrevClaimId(e.target.value)} />

                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                    >
                        Add Claim
                    </Button>
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={handleBack}
                    >
                        Back
                    </Button>
                </Box>

            </Container >
        </LocalizationProvider>
    );
}