import React, { useRef } from 'react';

function LoginForm({ onSubmit,error }) {

    const email = useRef()
    const password = useRef()

    function submitLogin(e) {
        e.preventDefault()
        onSubmit({
            email:email.current.value,
            password:password.current.value
        })
    }

    return (
        <form onSubmit={submitLogin} className='form-login'>

            <div>
                <input type="email" className='form-control' ref={email} placeholder='example@example.com' />
            </div>

            <div>
                <input type="password" placeholder='Password' ref={password} className='form-control'/>
            </div>
            {error && error}
            <button type='submit' className='btn btn-primary'>Login</button>

        </form>
    );
}


export default LoginForm;
