import React, { useContext } from 'react'
import Button from '../clickbutton/Button'
import Paragraph from '../paragraph/Paragraph'
import { commonContext } from "../contexts/ContextProvider";
import "../paragraph/Paragraph.css"

function ParaMain() {
    const { backgroundcolor, changeBackground } = useContext(commonContext);
    return (
        <div className='paraMain'>
            <Button name={"click here!"} onclick={() => changeBackground()} colorChange={backgroundcolor} />
            <Paragraph backgroundcolor={backgroundcolor} />
        </div>
    )
}

export default ParaMain
