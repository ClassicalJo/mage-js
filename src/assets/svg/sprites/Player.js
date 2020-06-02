import React from "react"
import HPBar from "./HPBar"

let Player = props => {
    let [width, height] = [75, 75]
    return (
        <g>
            <circle cx={props.cx + 125} cy={props.cy} r="10" fill="purple" transform={`rotate(${props.angle * 180 / Math.PI} ${props.cx} ${props.cy})`} />
            <HPBar
                cx={props.cx}
                cy={props.cy}
                r={props.r}
                hp={props.hp}
                maxHP={props.maxHP}
                angle={props.angle}
            />
            <use xlinkHref="#playerSprite" width={width} height={height} x={props.cx + width / -2} y={props.cy + height / -2 - 10} />
        </g>
    )
}

export default Player
