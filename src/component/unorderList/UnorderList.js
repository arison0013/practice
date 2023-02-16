import React from 'react'

function UnorderList() {


    const arrayPeoples = [
        {name:"ben", age:24},
        {name:"Arison", age:20},
        {name:"Aston", age:22},
        {name:"Donald", age:28},
    ]

    const sortedArray = arrayPeoples.sort((a,b)=>a.age - b.age)
    console.log("object",sortedArray)

    const list = sortedArray.map((res,i)=>(
        <li key={`${res.name} - ${Math.floor(Math.random())}`}>
            <p>{res.name}</p>
            <p>{res.age}</p>
        </li>
    ))


    const Array1 = [1,2,3,3,4,4,5,5,5,5]
    const Array2 = [6,6,6,7,8,8,9,10,]

    const Array3 = [...Array1,...Array2]
    const sort = Array3.sort((a,b)=>(b-a));
    let unique = [...new Set(sort)];
    console.log("cobsile",unique)
  return (
    <div>
      <ul>{list}</ul>
      <p>{unique}</p>
    </div>
  )
}

export default UnorderList
