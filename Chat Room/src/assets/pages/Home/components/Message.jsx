import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src="https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <span>
          just now
        </span>
      </div>
      <div className="messageConent">
        <p>Hello</p>
        <img src="https://images.pexels.com/photos/2861798/pexels-photo-2861798.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>
    </div>
  )
}

export default Message