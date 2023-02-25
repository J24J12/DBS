import { useEffect, useState } from 'react'
import { Button, TextField } from '@mui/material'

export const EditClaim = ({ id }) => {
    const [newExpenseDate, setNewExpenseDate] = useState('')
    const [newAmount, setNewAmount] = useState(0)
    const [newPurpose, setNewPurpose] = useState('')
    const [newStatus, setNewStatus] = useState('')
    const [newLastEditClaimDate, setNewEditClaimDate] = useState('')

    const handleEdit = async (e) => {
        e.preventDefault()
        try {
            // The below JSON data is subjected to change
            const editData = {
                newExpenseDate: newExpenseDate,
                newAmount: newAmount,
                newPurpose: newPurpose,
                newStatus: newStatus,
                newLastEditClaimDate: newLastEditClaimDate
            }
            // Insert POST reuqest
            console.log(editData)
        } catch (err) {
            console.log(`Error: ${err.message}`)
        }
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

                <TextField
                    id = "outlined-basic"
                    label = "New Status: "
                    variant= "outlined"
                    size = "small"
                    fullWidth
                    margin = "normal"
                    type = "text"
                    value={newStatus}
                    onChange ={(e)=>{setNewStatus(e.target.value)}}
                />
                <br/>

                {/* <label>Last Claimed Date:</label>
                <input
                    type = "date"
                    placeholder='Last Claimed Date'
                    value = {newLastEditClaimDate}
                    onChange ={(e)=>{setNewEditClaimDate(e.target.value)}}
                />
                <br/> */}
                <button type = "submit">Submit</button>
            </form>
        </div>
    )
}