import React from 'react'
import pfp from './images/pfp.jpg';
const Search = () => {
  return (
      <div className="search">
        <div className="searchForm">
          <input type="text" placeholder='find a user'/>
        </div>
        <div className="userChat">
           <img src={pfp} alt="" id="profile-pic"/>
          <div className="userChatInfo">
           Jane
          </div>
        </div>
        
      </div>
    )
}

export default Search