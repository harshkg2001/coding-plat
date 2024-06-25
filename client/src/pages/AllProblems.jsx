import React from 'react'
import './AllProblems.scss'
import { Link } from'react-router-dom'

function AllProblems()
{
  return (
    <div className='all-problems'>
      AllProblems

      <Link to='/contribute' className='link'>
        <button className='add'>
          <h2 className='symbol'>+</h2>
        </button>
      </Link>
    </div>
  )
}

export default AllProblems
