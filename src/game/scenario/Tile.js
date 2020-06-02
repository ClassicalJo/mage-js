import React from 'react'

let Tile = React.memo(props => {
    return (
        <path
            id={props.id}
            fill={props.fill}
            tile={props.tile}
            opacity={props.opacity}
            stroke="darkgreen"
            strokeWidth="5"
            transform="translate(0 -1000)"
            d={`
                M ${props.x - props.width / 2} ${props.y}
                L ${props.x} ${props.y - props.height / 2}
                L ${props.x + props.width / 2} ${props.y}
                L ${props.x} ${props.y + props.height / 2}
                Z`}>
            <animate
                attributeName="opacity"
                begin="mouseover"
                to="0.75"
                dur="0.01s"
                fill="freeze" />
            <animate
                attributeName="opacity"
                to="0.5"
                begin="mouseleave"
                from="0.75"
                dur="0.01s"
                fill="freeze" />
            <animateTransform
                className="board-tiles-fall"
                attributeName="transform"
                type="translate"
                to="0 0"
                calcMode="spline"
                keyTimes="0;1"
                keySplines={`${Math.random()} ${Math.random()} ${Math.random()} ${Math.random()}`}
                dur="2.5s"
                begin="indefinite"
                fill="freeze" />
        </path>
    )
})

export default Tile
