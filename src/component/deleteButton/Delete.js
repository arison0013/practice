import React from 'react'
import "./Delete.css"


function Delete({onClick,className}) {
  return (
    <div className='buttonMain'>
      <button type="button" className={`btn btn-danger ${className}`} onClick={onClick}>Delete</button>
    </div>
  )
}

export default Delete
