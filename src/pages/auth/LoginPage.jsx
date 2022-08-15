import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginForm from "../../components/pure/forms/LoginForm"
const LoginPage = () => {

    const [credentials, setCredentials] = useState(null)
    const navigate = useNavigate();
    const user = localStorage.getItem('user') || null;

    useEffect(() => {
        if(user){
            navigate("/dashboard")
        }
    })

    useEffect(()=>{
        if(credentials){
            const c = JSON.stringify(credentials)
            localStorage.setItem('user',c)
            navigate("/dashboard")
        }
    })


    return (
        <div>
            <h1>Login Page</h1>
            <LoginForm onSubmit={(e)=>(setCredentials(e))} />
            <Link to='/register' >Register</Link>
        </div>
    );
}

export default LoginPage;
