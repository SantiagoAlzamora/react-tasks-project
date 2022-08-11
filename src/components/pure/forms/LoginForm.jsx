import React from 'react'
import { useState } from 'react'


function LoginForm() {

    const initialCredentials = [
        {
            "user":'',
            "password":''
        }
    ]

    const [credentials, setCredentials] = useState(initialCredentials)

    return (
        <div>LoginForm</div>
    )
}


export default LoginForm
