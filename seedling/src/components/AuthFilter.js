import React, { useContext } from 'react'
import { Outlet, Navigate } from "react-router-dom"
import AuthContext from '../context/AuthContext'

const AuthFilter = () => {
    const { auth } = useContext(AuthContext)
    return (
        auth?.id ? <Outlet /> : <Navigate to="/login" replace />
    )
}

export default AuthFilter