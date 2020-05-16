import React from 'react'

let Circle = props => {
    return (
        <circle
            cx={props.cx}
            cy={props.cy}
            r={props.r}
            fill="white"
        />
    )
}

export default Circle
