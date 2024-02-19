import React from 'react'
import add from './images/add.png'
import more from './images/more.png'
import video from './images/video.png'
import Messages from './Messages'
import Inputs from './Inputs'
const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>
          Jane
        </span>
        <div className="chatIcons">
          <img src={video} alt="" />
          <img src={add} alt="" />
          <img src={more} alt="" />
        </div>  
      </div>
      <Messages/>
      <Inputs/>
    </div>
  )
}

export default Chat