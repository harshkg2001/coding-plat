import React from 'react'
import './Navbar.scss'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../firebase/firebaseConfig.js'
import { Link } from 'react-router-dom'

function Navbar()
{
  async function signHandler(e) {
    const provider = new GoogleAuthProvider()
    return await signInWithPopup(auth, provider)
  }

  return (
    <div className='nav'>
      <div className='nav-content'>
        <div className='nav-left'>
          <Link className='link' to='/'>zcoders</Link>
        </div>
        
        <div className='nav-center'>
          <div className='nav-center-item'>
            <Link className='link' to='/allproblems'>Problems</Link>
          </div>
          <div className="nav-center-item">
            <Link className='link' to='/alldiscussions'>Discussions</Link>
          </div>
          <div className="nav-center-item">
            <Link className='link' to='/allcontests'>Contests</Link>
          </div>
        </div>
        
        <div className='nav-right'>
          <div className='sign-in-up' onClick={signHandler}>
            Sign In/Register
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
