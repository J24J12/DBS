import { useEffect, useState } from 'react'
import { 
    Button, 
    FormControl, 
    MenuItem, 
    TextField, 
    Select, 
    Menu, 
    InputLabel,
} from '@mui/material'

export const EditClaim = ({ id }) => {
    const [newExpenseDate, setNewExpenseDate] = useState('')
    const [newAmount, setNewAmount] = useState(0)
    const [newPurpose, setNewPurpose] = useState('')
    const [newStatus, setNewStatus] = useState('')
    const [newLastEditClaimDate, setNewEditClaimDate] = useState('')

    const handleOptionChange = async (e) => {
        setNewStatus(e.target.value)
    }

    const getCurrentDate = async() => {
        return new Date().toLocaleDateString();
    }

    const handleEdit = async (e) => {
        e.preventDefault()
        try {
           
            // The below JSON data is subjected to change
            const editData = {
                newExpenseDate: newExpenseDate,
                newAmount: newAmount,
                newPurpose: newPurpose,
                newStatus: newStatus,
                newLastEditClaimDate: await getCurrentDate()
            }
            // Insert POST reuqest
            console.log(editData)
        } catch (err) {
            console.log(`Error: ${err.message}`)
        }

        setNewExpenseDate('')
        setNewAmount(0)
        setNewPurpose('')
        setNewStatus('')
        // setNewEditClaimDate('')
    }

    return (
        <div>
            <form onSubmit={handleEdit}>

                <TextField
                    id = "outlined-basic"
                    label = "New Expense Date: "
                    variant= "outlined"
                    size = "small"
                    fullWidth
                    margin = "normal"
                    type="date"
                    value={newExpenseDate}
                    onChange = {(e)=>{setNewExpenseDate(e.target.value)}}
                />
                <br/>

                <TextField
                    id = "outlined-basic"
                    label = "New Amount: "
                    variant= "outlined"
                    size = "small"
                    fullWidth
                    margin = "normal"
                    type = "number"
                    value={newAmount}
                    onChange ={(e)=>{setNewAmount(e.target.value)}}
                />
                <br/>
               
                <TextField
                    id = "outlined-basic"
                    label = "New Purpose: "
                    variant= "outlined"
                    size = "small"
                    fullWidth
                    margin = "normal"
                    type = "text"
                    value={newPurpose}
                    onChange ={(e)=>{setNewPurpose(e.target.value)}}
                />
                <br/>

                <FormControl variant="outlined" fullWidth margin="normal">
                    <InputLabel id="demo-simple-select-outlined-label">Select an option</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={newStatus}
                        onChange={handleOptionChange}
                        label="Select an option"
                    >
                    <MenuItem>
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value="pending">Pending</MenuItem>
                    <MenuItem value="approved">Approved</MenuItem>
                    <MenuItem value="rejected">Rejected</MenuItem>
                    </Select>
                </FormControl>

                <Button
                    variant="contained" 
                    color="primary" 
                    size="medium" 
                    type="submit" 
                    fullWidth 
                    margin="normal"
                > Submit </Button>
            </form>
        </div>
    )
}