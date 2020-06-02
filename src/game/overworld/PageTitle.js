import React from "react"

let PageTitle = props => {
    return (
        <text
            fontSize='100'
            fontFamily="Cinzel Decorative"
            textAnchor="middle"
            alignmentBaseline="central"
            fill="white"
            pointerEvents="none">
            {props.title}
        </text>
    )
}

export default PageTitle
