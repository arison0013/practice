import React, { createContext, useState } from 'react'
export const commonContext = createContext();

function ContextProvider(props) {
    const [backgroundcolor, setBackgroundcolor] = useState({
        bg: "#dee2e6",
        text: "black"
    })

    const changeBackground = () => {
        backgroundcolor.bg === "#dee2e6" ? setBackgroundcolor({ bg: "purple", text: "yellow" }) : setBackgroundcolor({ bg: "#dee2e6", text: "black" })

    }
    return (
        <div>
            <commonContext.Provider value={{ backgroundcolor, changeBackground }}>
                {props.children}
            </commonContext.Provider>
        </div>
    )
}

export default ContextProvider
