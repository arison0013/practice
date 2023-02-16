import React, { useState } from 'react'

const initialHearts = [null, null, null, null, null, null, null, null, null, null,];
const initialStars = [null, null, null, null, null];

function Heart() {
  const [hearts, setHearts] = useState(initialHearts);
  const [starts, setStarts] = useState(initialStars);

  const handleClick = (type, index) => {
    if (type == "star") {
      if (starts[index - 1] !== null && (starts[index] === null || starts[index] === undefined)) {
        setHearts(initialHearts);
        setStarts(initialStars);
      } else {
        let newStar = [null, null, null, null, null];
        let newHeart = [null, null, null, null, null, null, null, null, null, null,];
        for (let i = 1; i <= index; i++) {
          newStar[i - 1] = 1;
        }
        for (let i = 1; i <= index * 2; i++) {
          newHeart[i - 1] = 1;
        }
        setStarts(newStar);
        setHearts(newHeart);
      }
    } else {
      let newStar = [null, null, null, null, null];
      let newHeart = [null, null, null, null, null, null, null, null, null, null,];
      if (index % 2 === 0) {
        if (hearts[index - 1] !== null && (hearts[index] === null || hearts[index] === undefined)) {
          setHearts(initialHearts);
          setStarts(initialStars);
        } else {
          for (let i = 1; i <= index; i++) {
            newHeart[i - 1] = 1;
          }
          for (let i = 1; i <= index / 2; i++) {
            newStar[i - 1] = 1;
          }
        }
      } else {
        if (hearts[index - 1] !== null && (hearts[index + 1] === null || hearts[index + 1] === undefined)) {
          setHearts(initialHearts);
          setStarts(initialStars);
        } else {
          for (let i = 1; i <= index + 1; i++) {
            newHeart[i - 1] = 1;
          }
          for (let i = 1; i <= (index + 1) / 2; i++) {
            newStar[i - 1] = 1;
          }
        }
      }
      setStarts(newStar);
      setHearts(newHeart);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", border: "1px solid", height: "100vh", }} >
      <div>
        {hearts.map((item, index) => {
          return (
            <button key={index} onClick={() => handleClick("heart", index + 1)}>
              <img src={item ? "./images/heartFilled.png" : "./images/heart.png"} style={{ width: 50, height: 50 }} />
            </button>);
        })}
      </div>
      <div>
        {starts.map((item, index) => {
          return (<button key={index} onClick={() => handleClick("star", index + 1)}> <img src={item ? "./images/starFilled.png" : "./images/star.png"} 
          style={{ width: 50, height: 50 }} /> </button>);
        })}
      </div>
    </div>
  );
}

export default Heart
