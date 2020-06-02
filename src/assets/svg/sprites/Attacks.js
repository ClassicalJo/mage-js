import React from 'react'
let Attacks = {
    Slash: key => (
        <circle
            key={key.id}
            cx={key.position.x}
            cy={key.position.y}
            r={key.circleRadius}
            fill='white'
        />
    ),
    Shot: key => (
        <circle
            key={key.id}
            cx={key.position.x}
            cy={key.position.y}
            r={key.circleRadius}
            fill='white'
        />
    )
}
export default Attacks
