import React from 'react'
import pfp from './images/pfp.jpg';

const Chats = () => {
  return (
    <div className="chats">
      <div className="userChat">
           <img src={pfp} alt="" id="profile-pic"/>
            <div className="userChatInfo">
             <span>
              Jane
             </span>
              <p>
                Hello
              </p>
            </div>
            
        </div>
    </div>
  )
}

export default Chats