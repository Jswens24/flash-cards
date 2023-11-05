import { useState } from 'react'
import './App.css'
import RoutesContainer from './RoutesContainer'
import homeImg from './assets/25694.png'
import { Link } from 'react-router-dom'

function App() {

  return (
    <div>
      <RoutesContainer />
      <Link to='/'>
        <img className='h-10 m-4 fixed' src={homeImg} />
      </Link>
    </div>
  )
}

export default App
