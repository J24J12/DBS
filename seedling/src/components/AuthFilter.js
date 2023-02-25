import React, { useContext } from 'react'
import { Outlet, Navigate } from "react-router-dom"
import { AuthContext } from '../context/AuthContext'
import { getCookie } from '../cookies'

const AuthFilter = () => {

    const { auth, setAuth } = useContext(AuthContext)
    if (!auth.id) {
        const auth2 = getCookie("auth")
        console.log(auth2)
        if (auth2) {
            setAuth({
                id: auth2
            })
        }
    }
    return (
        auth?.id ? <Outlet /> : <Navigate to="/login" replace />
    )
}

export default AuthFilter