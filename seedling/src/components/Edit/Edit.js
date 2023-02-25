import { useEffect, useState } from 'react'
import { 
    Button, 
    TextField
} from '@mui/material'
import { useNavigate } from 'react-router'

export const EditClaim = ({ id }) => {
    const [newFirstName, setNewFirstName] = useState('')
    const [newLastName, setNewLastName] = useState('')
    const [newExpenseDate, setNewExpenseDate] = useState(' ')
    const [newAmount, setNewAmount] = useState(0)
    const [newPurpose, setNewPurpose] = useState('')
    const [newLastEditClaimDate, setNewEditClaimDate] = useState('')

    const navigate = useNavigate()

    const getCurrentDate = async() => {
        return new Date().toLocaleDateString();
    }

    const backToLastPage = async() => {
        navigate(-1)
        console.log("Went Back")
    }

    const handleEdit = async (e) => {
        e.preventDefault()
        try {
           
            // The below JSON data is subjected to change
            const editData = {
                newFirstName: newFirstName,
                newLastName: newLastName,
                newExpenseDate: newExpenseDate,
                newAmount: newAmount,
                newPurpose: newPurpose,
                newLastEditClaimDate: await getCurrentDate()
            }
            // Insert POST reuqest
            console.log(editData)
        } catch (err) {
            console.log(`Error: ${err.message}`)
        }

        setNewExpenseDate(' ')
        setNewAmount(0)
        setNewPurpose('')
        // setNewEditClaimDate('')
    }

    return (
        <div>
            <form onSubmit={handleEdit}>

                <TextField
                    id = "outlined-basic"
                    label = "First Name: "
                    variant= "outlined"
                    size = "small"
                    fullWidth
                    margin = "normal"
                    type="text"
                    value={newFirstName}
                    onChange = {(e)=>{setNewFirstName(e.target.value)}}
                />

                <br/>

                <TextField
                    id = "outlined-basic"
                    label = "Last Name: "
                    variant= "outlined"
                    size = "small"
                    fullWidth
                    margin = "normal"
                    type="text"
                    value={newLastName}
                    onChange = {(e)=>{setNewLastName(e.target.value)}}
                />

                <br/>

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

                <Button
                    variant="contained" 
                    color="primary" 
                    size="medium" 
                    type="submit" 
                    fullWidth 
                    margin="normal"
                > Submit </Button>
            </form>

            <Button
                style={{
                    marginTop: '10px'
                }}
                variant="contained" 
                color="secondary" 
                size="medium" 
                fullWidth 
                margin="normal"
                onClick={backToLastPage}
            > Back </Button>
        </div>
    )
}