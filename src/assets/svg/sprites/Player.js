import React from "react"

let Player = props => {
    return (
        <circle
            cx={props.cx}
            cy={props.cy}
            r={props.r}
            fill="#306BAC"
        />
    )
}

export default Player
