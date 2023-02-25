import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'
import "./LoginPage.css"
import AddForm from '../components/Add/Add'

const LoginPage = () => {
    const { auth } = useContext(AuthContext)

    return (
        !auth.id ? <Navigate to="/login" replace /> :
            <main className='AddPage'>
                <AddForm />
            </main>
    )
}

export default LoginPage