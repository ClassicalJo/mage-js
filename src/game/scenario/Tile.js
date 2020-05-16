import React from 'react'

let Tile = props => {
    return (
        <path
            id={props.id}
            fill={props.fill}
            d={`
                M ${props.x - props.width / 2} ${props.y}
                L ${props.x} ${props.y - props.height / 2}
                L ${props.x + props.width / 2} ${props.y}
                L ${props.x} ${props.y + props.height / 2}
                Z`}>
            <animate
                attributeName="opacity"
                from="1"
                begin="mouseover"
                to="0.75"
                dur="0.01s"
                fill="freeze" />
            <animate
                attributeName="opacity"
                to="1"
                begin="mouseleave"
                from="0.75"
                dur="0.01s"
                fill="freeze" />
        </path>
    )
}

export default Tile
