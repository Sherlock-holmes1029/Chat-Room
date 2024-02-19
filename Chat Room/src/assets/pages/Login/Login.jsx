import React from 'react'
import { Link } from "react-router-dom"
import "./Login.css"

export function Login() {
 

  return (
    <>
      <div className="formContainer">
        <div className="formWrapper">
            <span className='logo'>Lama Chat</span>
            <br />
            <span className='title'>Register</span>
            <form >
                <input type="email" placeholder='E-mail'/>
                <input type="password" placeholder='Password' />
                <button>Sign in</button>
            </form>
            <p>Don't have an account? <Link to="/Register">Register</Link></p>
        </div>
       </div>
    </>
  )
}

export default Login
