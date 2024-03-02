import React from 'react'
import "./Register.css"
import {Link}  from "react-router-dom"
import addImage from"./images/addImage.png";
import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import  {auth,storage}  from '../../../firbase.js';
import { 
  ref, 
  uploadBytesResumable, 
  getDownloadURL } from "firebase/storage";


export function Register() {
  const [err,setErr]=React.useState(false)
  const handleSubmit=async (e)=> {  
    e.preventDefault();
    const displayName=e.target[0].value;
    const email=e.target[1].value;
    const password=e.target[2].value;
    const file=e.target[3].files[0];
    
    try{
          const res= await createUserWithEmailAndPassword(auth, email, password)


const storageRef = ref(storage, displayName);

const uploadTask = uploadBytesResumable(storageRef, file);

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on(
  (error) => {
    setErr(true)
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
      await  updateProfile(res.user,{
        displayName,
        phoyoURL:downloadURL
      })
    });
  }
);
    }catch(err){
      setErr(true);
    }
    


  }
  return (
    <>
       <div className="formContainer">
        <div className="formWrapper">
            <span className='logo'>Lama Chat</span>
            <br />
            <span className='title'>Register</span>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Name'/>
                <input type="email" placeholder='E-mail'/>
                <input type="password" placeholder='Password' />
                <label htmlFor="file">
                  
                  <img className='uploadImg' src={addImage} alt="" />
                  <span>add images</span> 
                  </label>
                <input type="file" id='file'/>
                <button>Sign up</button>
                {err&& <span>Something went wrong</span> }
            </form>
            <p>Do you have an account? <Link to="/">Log in</Link></p>
        </div>
       </div>
    </>
  )
}

export default Register
