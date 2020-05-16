import React from "react"

let Enemy = props => {
    return (
        <circle
            cx={props.cx}
            cy={props.cy}
            r={props.r}
            fill="red"
        />
    )
}

export default Enemy
