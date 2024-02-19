import React from 'react'
import Navbar from './Navebar'
import  Search  from './Search'
import  Chats  from './Chats'


const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Navbar/>
      <Search/>
      <Chats/>
      <Chats/>
    </div>
  )
}

export default Sidebar