import React from 'react'
import image from './images/image.png';
import attach from './images/attachment.png'

const Inputs = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something..."/>
      <div className="send">
        <img src={attach} alt="" />
        <input type="file"style={{display:"none"}} />
        <label htmlFor="file">
          <img src={image} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Inputs