import React from 'react'

let Background = props => {
    return (
        <>
            <rect
                x={props.x}
                y={props.y}
                width={props.width}
                height={props.height}
                fill="black" />
        </>
    )
}

export default Background
