import React, { useState } from 'react'
const intialheart = [null, null, null, null, null, null, null, null, null, null,]
const intialstar = [null, null, null, null, null]
function My() {
    const [star, setStar] = useState(intialstar);
    const [heart, setHeart] = useState(intialheart);

    const handleClick = (type, index) => {
        if (type == "star") {
            if (star[index - 1 !== null && (star[index + 1] === null || star[index + 1] === undefined)]) {
                setStar(intialstar);
                setHeart(intialheart);

            } else {
                let newHeart = [null, null, null, null, null, null, null, null, null, null,];
                let newStar = [null, null, null, null, null];
                for (let i = 1; i <= index; i++) {
                    newStar[i - 1] = 1
                }
                for (let i = 1; i <= index * 2; i++) {
                    newHeart[i - 1] = 1
                }
                setHeart(newHeart)
                setStar(newStar)
            }

        } else {

                
        }
    }



    return (
        <div>
            <div>
                {heart.map((item, index) => (
                    <button onClick={handleClick("heart", index + 1)}><img src={item ? "filledheart" : "nonfilledherat"} alt={item ? "filledheart" : "nonfilledherat"} /></button>
                ))

                }
            </div>
            <div>
                {star.map((item, index) => (
                    <button onClick={()=>handleClick("star", index + 1)}><img src={item ? "filledstar" : "nonfilledstar"} alt={item ? "filledstar" : "nonfilledstar"} /></button>
                ))

                }
            </div>

        </div>
    )
}

export default My
