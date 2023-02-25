import { useState } from 'react'

export const EditClaim = () => {
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
                <label>New Expense Date: </label>
                <input
                    type = "text"
                    placeholder='New Expense Date'
                    value = {newExpenseDate}
                    onChange ={(e)=>{setNewExpenseDate(e.target.value)}}
                />
                <br/>
                <label>New Amount: </label>
                <input
                    type = "number"
                    placeholder='New Amount'
                    value = {newAmount}
                    onChange ={(e)=>{setNewAmount(e.target.value)}}
                />
                <br/>
                <label>New Purpose: </label>
                <input
                    type = "text"
                    placeholder='New Purpose'
                    value = {newPurpose}
                    onChange ={(e)=>{setNewPurpose(e.target.value)}}
                />
                <br/>
                <label>New Status:</label>
                <input
                    type = "text"
                    placeholder='New Status'
                    value = {newStatus}
                    onChange ={(e)=>{setNewStatus(e.target.value)}}
                />
                <br/>
                <label>Last Claimed Date:</label>
                <input
                    type = "text"
                    placeholder='Last Claimed Date'
                    value = {newLastEditClaimDate}
                    onChange ={(e)=>{setNewEditClaimDate(e.target.value)}}
                />
                <br/>
                <button type = "submit">Submit</button>
            </form>
        </div>
    )
}