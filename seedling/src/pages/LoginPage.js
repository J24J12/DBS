import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import LoginForm from '../components/Login/LoginForm'
import { Navigate } from 'react-router-dom'
import {Typography} from "@mui/material"
import "./LoginPage.css"

const LoginPage = () => {
    const { auth } = useContext(AuthContext)

    return (
        auth.id ? <Navigate to="/" replace /> :
            <main className='loginPage'>
                <Typography variant="h2">Seedling</Typography>
                <LoginForm />
            </main>

    )
}

export default LoginPage