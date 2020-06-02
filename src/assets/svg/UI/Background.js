import React from 'react'

let Background = props => {

    return (
        <>
            <rect
                {...props}
                fill="#1101AB"
                mask="url(#menu-background-mask)" />
            <rect
                {...props}
                fill="#1101AB"
                stroke="white"
                strokeWidth="30"
                filter="url(#menu-filter)" 
                mask="url(#menu-background-mask)" />

            <rect
                {...props}
                fill="transparent"
                stroke="white"
                strokeWidth="30"
                mask="url(#menu-background-mask)" />
        </>
    )

}
export default Background
