import React from 'react'
import "./Register.css"
import {Link}  from "react-router-dom"
import addImage from"./images/addImage.png";
export function Register() {
 

  return (
    <>
       <div className="formContainer">
        <div className="formWrapper">
            <span className='logo'>Lama Chat</span>
            <br />
            <span className='title'>Register</span>
            <form >
                <input type="text" placeholder='Name'/>
                <input type="email" placeholder='E-mail'/>
                <input type="password" placeholder='Password' />
                <label htmlFor="file">
                  
                  <img className='uploadImg' src={addImage} alt="" />
                  <span>add images</span> 
                  </label>
                <input type="file" id='file'/>
                <button>Sign up</button>
            </form>
            <p>Do you have an account? <Link to="/">Log in</Link></p>
        </div>
       </div>
    </>
  )
}

export default Register
