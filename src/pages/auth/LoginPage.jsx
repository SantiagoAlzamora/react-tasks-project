import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from "../../components/pure/forms/LoginForm"
import '../../styles/login.scss'
import { loginUser } from '../../services/userService';
const LoginPage = () => {

    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("")

    async function login(values) {

        try {
            const { data } = await loginUser(values)
            localStorage.setItem('user', JSON.stringify(data.user))
            localStorage.setItem('token',JSON.stringify(data.token))
            navigate('/')
        } catch (error) {
            setErrorMessage(error.response.data.error)
            setTimeout(() => {
                setErrorMessage("")
            }, 5000)

        }

    }



    return (
        <div className='text-center'>
            <h1>Login Page</h1>
            <LoginForm onSubmit={(e) => (login(e))} error={errorMessage} />
        </div>
    );
}

export default LoginPage;
