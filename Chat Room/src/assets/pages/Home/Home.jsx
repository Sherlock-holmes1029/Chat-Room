import React from 'react'
import Sidebar from './components/Sidebar'
import Chat from './components/Chat'
import './Home.css'

			 function Home() {
				let i=9
				return (
					<div className="home">
						<div className="container">
							<Sidebar/>
							<Chat/>
						</div>
					</div>
				)
			}

			export default Home

