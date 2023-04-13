import React from 'react'
import Navbar from '../components/Navbar'

import "./Home.scss"
import Searching from '../components/Searching'

const Home = () => {
  return (
    <div className='Home'>
        <Navbar />
        <Searching />
    </div>
  )
}

export default Home