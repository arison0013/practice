import React, { useState } from 'react'
import Delete from '../deleteButton/Delete'
import "./Card.css";

function Card({ data}) {

    const [cardDetails, setcardDetails] = useState(data);

  const deleteDiv = (id) => {
    const newitem = cardDetails.filter((r) => r.id != id)
    setcardDetails(newitem)
  }

  const deleteAllDiv = () => {
    setcardDetails([])
  }

  return (
    <>
      <div className='outerMain'>
        {cardDetails.map((res, index) => (
          <div className='mainCard' style={{ backgroundColor: res.color }} key={index}>
            <div className='cardBody d-flex flex-column p-3 align-items-center'>
              <h1 className='cardHeading'>{res.heading}</h1>
              <div className='mt-5' onClick={() => deleteDiv(res.id)}><Delete /></div>
            </div>
          </div>))}
        {cardDetails.length!=0 && <div className='mt-2 mb-2' onClick={() => deleteAllDiv()}><Delete /></div>}
        </div>
        
     
    </>
  )
}


