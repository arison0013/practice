import React, {useState } from 'react';
import Card from '../card/Card';
import 'bootstrap/dist/css/bootstrap.css';
import Delete from '../deleteButton/Delete';
import "../../App.css"
function CardsMain() {

  const list = [
    {
      id: "1",
      heading: "card1",
      color: "yellow"
    }, {
      id: "2",
      heading: "card2",
      color: "pink"

    }, {
      id: "3",
      heading: "card3",
      color: "blue"
    },
    {
      id: "4",
      heading: "card4",
      color: "violet"
    }
  ];
  const [cardDetails, setcardDetails] = useState(list);

  const deleteDiv = (id) => {
    const newitems = cardDetails.filter((r) => r.id !== id) // array naming
    setcardDetails(newitems)
  }

  const deleteAllDiv = () => {
    setcardDetails([])
  }
  return (
    <div className='outerMain'>
    {cardDetails.map((res, index) => (<Card  heading={res.heading} color={res.color} id={res.id} deleteDiv={deleteDiv} key={index} />))}
    {cardDetails.length !== 0 && <Delete onClick={deleteAllDiv} className="mt-3 mb-3" />}
  </div>
  )
}

export default CardsMain
