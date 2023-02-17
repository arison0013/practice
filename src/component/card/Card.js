import React from 'react'
import Delete from '../deleteButton/Delete'
import "./Card.css";

function Card({ heading, id, color, deleteDiv }) {
  return (
      <div className='mainCard' style={{ backgroundColor: color }}>
        <div className='cardBody d-flex flex-column p-3 align-items-center'>
          <h1 className='cardHeading'>{heading}</h1>
          <Delete onClick={()=>deleteDiv(id)} className='mt-5' />
        </div>
      </div>
  )
}

export default Card
