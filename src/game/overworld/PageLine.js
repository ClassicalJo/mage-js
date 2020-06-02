import React from 'react'

let PageLine = props => {
    return (
        <text
            x={props.width / -2 + (props.width / 2) * props.column}
            y={props.height / -2 + props.line * props.fontSize * 1.5 + props.fontSize}
            fontSize={props.fontSize}
            fontFamily="Cinzel Decorative"
            fill="white"
            pointerEvents="none">
            {props.content}
        </text>
    )
}

export default PageLine
