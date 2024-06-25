import React, { useState } from 'react'
import './AllProblems.scss'
import { Link } from'react-router-dom'
import data from '../data.json'

function AllProblems()
{
  const [currPage, setCurrPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);
  const lastIndex = currPage*postPerPage;
  const firstIndex = lastIndex-postPerPage;
  const maxPage = Math.ceil(data.length/postPerPage);
  const arr=data.slice(firstIndex, lastIndex);

  function handleChange(e)
  {
    console.log(e.target.value);
    setPostPerPage(e.target.value);
    setCurrPage(1);
  }

  return (
    <div className='all-problems'>
      <div className="heading">
        <h1>All Problems</h1>
      </div>
      {
        arr.map((problem, idx) => (
          <div key={idx} className='problem-card'>
            <p className='problem-name'>
              {problem.id}. {problem.name}
            </p>
          </div>
        ))
      }
      <select value={postPerPage} onChange={handleChange} className='select'>
        <option value="5">5/page</option>
        <option value="10">10/page</option>
        <option value="25">25/page</option>
      </select>

      <div className='pagination'>
        <button className='button' onClick={() => setCurrPage(Math.max(1, currPage-1))}>Prev</button>
        <span className='curr-page'>{currPage}/{maxPage}</span>
        <button className='button' onClick={() => setCurrPage(Math.min(maxPage, currPage+1))}>Next</button>
      </div>

      <Link to='/contribute' className='link'>
        <button className='add'>
          <h2 className='symbol'>+</h2>
        </button>
      </Link>
    </div>
  )
}

export default AllProblems
