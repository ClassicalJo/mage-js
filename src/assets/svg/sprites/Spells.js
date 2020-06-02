import React from 'react'
let elementColor = {
    earth: "brown",
    wind: "indigo",
    fire: "red",
    water: "blue",
    force: "grey",
    prismatic: "white",
    delta: "yellow",
    stone: "lightgray",
    sand: "goldenrod",
    magma: "maroon",
    frostfire: "cyan",
    lightning: "yellow",
    ice: "lightseagreen",
}

let Spells = {
    bolt: key => (
        <circle
            key={key.id}
            cx={key.position.x}
            cy={key.position.y}
            r={key.circleRadius}
            fill={elementColor[key.name.element]}
        />
    ),
    ball: key => (
        <circle
            key={key.id}
            cx={key.position.x}
            cy={key.position.y}
            r={key.circleRadius}
            fill={elementColor[key.name.element]}
        />
    ),
    rain: key => (
        <circle
            key={key.id}
            cx={key.position.x}
            cy={key.position.y - key.circleRadius - 150}
            r={key.circleRadius}
            fill={elementColor[key.name.element]}
        >
            <animateTransform
                id={`rain${key.id}`}
                attributeName="transform"
                type="translate"
                from="0 0"
                to="0 150"
                dur="1.5s"
                begin="indefinite"
                fill="freeze" />
        </circle>
    ),
}

export default Spells
