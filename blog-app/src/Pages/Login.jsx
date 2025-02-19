import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {

  const [userData, setUserData] = useState({
    email:'',
    password:'',
  })

  const changeInputHandler = (e) =>{
    setUserData(prevState=>{
      return{...prevState, [e.target.name] : e.target.value }
    })
  }

  return (
    <section className="login">
      <div className="container">
        <h2>Sign In</h2>
        <form action="" className='form login__form'>
          <p className='form__error-message'>This is error message</p>
          <input type="email" placeholder='Email' name='email' value={userData.email} onChange={changeInputHandler} autoFocus/>
          <input type="password" placeholder='Password' name='password' value={userData.password} onChange={changeInputHandler}/>
          <button type="submit" className='btn primary'>Login</button>
        </form>
        <small>Create A New Account? <Link to="/register">Sign Up</Link></small>
      </div>
    </section>
  )
}
