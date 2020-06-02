import React from "react"
import HPBar from "./HPBar"
let Enemy = props => {
    return (
        <g>
            <text
                x={props.cx}
                y={props.cy + props.r + 20}
                fontSize="20"
                fontFamily="Arial Black"
                stroke="white"
                strokeWidth="0.5"
                textAnchor='middle'
                alignmentBaseline="central">
                {props.name}
            </text>
            <HPBar angle={props.angle} cx={props.cx} cy={props.cy} r={props.r} hp={props.hp} maxHP={props.maxHP} />
            <g transform={`rotate(${props.angle * 180/Math.PI} ${props.cx} ${props.cy})`}>
                <path fill="red"
                    d={`
                    M${props.cx} ${props.cy - props.r} 
                    L${props.cx + props.r * 1.5} ${props.cy} 
                    L${props.cx} ${props.cy + props.r}Z`} />
                <circle
                    cx={props.cx}
                    cy={props.cy}
                    r={props.r}
                    fill="red"
                />
            </g>

        </g>
    )
}

export default Enemy
