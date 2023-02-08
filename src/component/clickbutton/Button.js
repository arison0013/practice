import React from 'react'
import "./Button.css"

function Button({ name, onclick, colorChange }) {
    return (
        <div className='btnMain'>
            <button type="button"
                className="btn btn-light border border-dark"
                style={{ backgroundColor: colorChange.bg, color: colorChange.text }}
                onClick={() => onclick()}>
                {name}
            </button>
        </div>
    )
}

export default Button
