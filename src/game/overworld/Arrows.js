import React from 'react'

let Arrows = props => {
    return (
        <>
            <path
                id="leftArrow"
                transform={`translate(${props.x + 25} ${-props.y - 100})`}
                d={` M 0 0 L 100 -100 L 50 0 L 100 100 Z`}
                fill="white"
            />
            <rect
                width="100"
                height="200"
                fill="transparent"
                opacity="0.5"
                transform={`translate(${props.x + 25} ${-props.y - 200})`}
                onClick={() => props.onClick(-1)}
            />
            <path
                id="rightArrow"
                transform={`translate(${-props.x - 25} ${-props.y - 100})`}
                d={` M 0 0 L -100 -100 L -50 0 L -100 100 Z`}
                fill="white"
            />
            <rect
                width="100"
                height="200"
                fill="transparent"
                opacity="0.5"
                transform={`translate(${-props.x - 125} ${-props.y - 200})`}
                onClick={() => props.onClick(1)}
            />
        </>
    )
}
export default Arrows
