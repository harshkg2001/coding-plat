import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-content">
        <div className="copyright">
          © 2024, zcoders. All rights reserved.
        </div>
        <div className="footer-links">
          <Link className='link' to='/'>
            Home
          </Link> 
          <Link className='link' to='/'>
            Jobs
          </Link> 
          <Link className='link' to='/'>
            Bug Bounty
          </Link> 
          <Link className='link' to='/'>
            Assessment
          </Link> 
          <Link className='link' to='/'>
            Students
          </Link> 
          <Link className='link' to='/'>
            Terms
          </Link> 
          <Link className='link' to='/'>
            Privacy Policy
          </Link> 
        </div>
      </div>
    </div>
  )
}

export default Footer
