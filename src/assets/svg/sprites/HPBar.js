import React from 'react'

function fill(percent) {
    if (percent > 0.5) return "lightgreen"
    else if (percent > 0.1) return "yellow"
    return "red"
}

let HPBar = props => {
    let width = props.r + 50
    let height = width / 4
    let cx = props.cx + width / -2
    let cy = props.angle * 180 / Math.PI > -0.01 ? props.cy + height / -2 - props.r - 35 : props.cy + height / -2 + props.r + 35
    let hpRatio = props.hp / props.maxHP
    let filling = fill(hpRatio)
    return (
        <g>
            <rect
                width={width}
                height={height}
                x={cx}
                y={cy}
                fill="grey"
                opacity="0.5"
                pointerEvents="none">
            </rect>
            <rect
                width={hpRatio >= 0 ? (width * hpRatio) : 0}
                height={height}
                x={cx}
                y={cy}
                fill={filling}
                opacity="0.8"
                pointerEvents="none">
            </rect>
            <text
                fontFamily="Arial Black"
                fontSize={height}
                fill="white"
                x={props.cx}
                y={cy + height / 2}
                textAnchor="middle"
                alignmentBaseline="central">
                {props.hp}
            </text>

        </g>
    )
}
export default HPBar
