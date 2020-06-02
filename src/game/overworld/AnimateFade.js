import React from 'react'
let AnimateFade = () => {
    return (
        <animate
            id="fade-overworld-screen"
            attributeName="opacity"
            to="0"
            dur="0.5s"
            fill="freeze"
            begin="indefinite" />
    )
}
export default AnimateFade
