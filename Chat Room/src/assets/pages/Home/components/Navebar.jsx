import React from 'react'
import pfp from './images/pfp.jpg';
const Navebar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        Lama chat
      </div>
      <div className="user">
      <img src={pfp} alt="Profile Picture" />
        <span>Jhon</span>
        <button>logout</button>
      </div>
      
    </div>
  )
}

export default Navebar