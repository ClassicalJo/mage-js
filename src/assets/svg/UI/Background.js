import React from 'react'

let Background = props => {
    return (
        <React.Fragment>
            <rect
                height={props.height}
                width={props.width}
                x={props.x}
                y={props.y}
                fill="#1101AB"
                stroke="white"
                strokeWidth="30"
                mask="url(#menu-background-mask)">
            </rect>
        </React.Fragment>
    )

}
export default Background
