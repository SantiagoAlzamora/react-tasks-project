import React, { useRef, useState } from 'react'


export default function RegisterForm({ onSubmit, errors }) {

  const email = useRef()
  const password = useRef()
  const password2 = useRef()
  const [equalPasswords, setEqualPasswords] = useState(true)

  console.log(errors);

  function register(e) {
    e.preventDefault()
    if (validatePasswords(password.current.value,password2.current.value)) {
      onSubmit({
        email:email.current.value,
        password:password.current.value
      })

    }else{
      setEqualPasswords(false)
      setTimeout(()=>{
        setEqualPasswords(true)
      },5000)
      
    }
  }
  function validatePasswords(pw1, pw2) {
    return pw1 === pw2
  }


  return (
    <form onSubmit={register} className='form-login'>
      <div>
        <input type="email" className='form-control' ref={email} placeholder='example@example.com' />
      </div>
      {errors.emailComplete ===false && <span>El email no puede estar vacio</span>}
      {errors.emailExists && <span>Este email ya existe</span>}
      <div>
        <input type="password" className='form-control' ref={password} placeholder='Password' />
      </div>
      {errors.passwordComplete === false && <span>La contraseña no puede estar vacia</span>}
      {errors.passwordShort && <span>La contraseña debe contener 6 o mas caracteres</span>}
      <div>
        <input type="password" className='form-control' ref={password2} placeholder='Password' />
      </div>
      {!equalPasswords && <span>Las contraseñas no coinciden</span>}
      <button type='submit' className='btn btn-primary'>Register</button>
    </form>
  )
}
