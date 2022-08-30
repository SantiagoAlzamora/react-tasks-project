
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterForm from '../../components/pure/forms/RegisterForm';
import { registerUser } from '../../services/userService';
import '../../styles/login.scss'

const INITIAL_STATE={
    emailComplete:true,
    emailExists:false,
    passwordComplete:true,
    passwordShort:false,
}

const RegisterPage = () => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(INITIAL_STATE)

    async function register(values) {
        localStorage.clear()
        setErrorMessage(INITIAL_STATE)
        try {
            await registerUser(values)
            navigate('/login')
        } catch (error) {
            setErrorMessage(error.response.data)
        }

    }


    return (
        <div className='text-center'>
            <h1>Register Page</h1>
            <RegisterForm onSubmit={(e) => register(e)} errors={errorMessage} />
        </div>
    );
}

export default RegisterPage;
