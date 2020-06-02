import React from 'react'
import { useMove } from "../hooks/useMove"

let Move = () => {
    useMove()
    let strokeWidth = 10
    let width = "Move".length * 50 + 100
    let height = (75 + (strokeWidth * 2)) * 4 / 3
    return (
        <g>
            <rect
                x={800 + width / -2}
                y={-450 + height / -2}
                width={width}
                height={height}
                fill="#1101AB"
                stroke="white"
                strokeWidth={strokeWidth}
            >
            </rect>
            <text
                fill="white"
                x={800}
                y="-450"
                alignmentBaseline="central"
                textAnchor="middle"
                fontFamily="Arial Black"
                fontSize="50"
                fontVariant="small-caps"
            >
                MOVE
            </text>
        </g>
    )
}

export default Move
