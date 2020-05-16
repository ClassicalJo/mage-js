import React from "react"
import { useSelector } from "react-redux"

let Overlay = () => {
    let viewBox = useSelector(state => state.screen.viewBox)
    return (
        <rect
            width={viewBox.width}
            height={viewBox.height}
            x={viewBox.width / -2}
            y={viewBox.height / -2}
            fill="black"
            opacity="0.2"
        />
    )
}

export default Overlay
