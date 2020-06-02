import React from "react"
import { connect } from "react-redux"
import Player from "./definitions/playerDef"
let Definitions = props => {
    let menu = {
        height: props.viewBox.height,
        width: props.viewBox.height * 9 / 16,
        x: (props.viewBox.height * 9 / 16) / -2,
        y: props.viewBox.height / -2
    }
    let spellbook = {
        width: props.viewBox.width * 4 / 5,
        height: props.viewBox.height * 1 / 4,
        x: (props.viewBox.width * 4 / 5) / -2,
        y: (props.viewBox.height * 1 / 4) / -2,
    }

    return (
        <defs>
            <style type="text/css">
                {`@import url("https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&display=swap")`}
            </style>


            <radialGradient id="background-radial" cx="50%" cy="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="white" stopOpacity="1"></stop>
                <stop offset="100%" stopColor="black" stopOpacity="1" />
            </radialGradient>
            <filter id="spellbook-filter">
                <feTurbulence
                    {...spellbook}
                    baseFrequency="0.1"
                    numOctaves="5" />
            </filter>
            <filter id="shadow-blur">
                <feGaussianBlur stdDeviation="4" />
            </filter>
            <mask {...spellbook} id="spellbook-mask">
                <rect
                    {...spellbook}
                    fill="black"
                />
                <rect
                    {...spellbook}
                    fill="white"
                    rx="20"
                />
            </mask>
            <filter id="menu-filter">
                <feTurbulence
                    {...menu}
                    baseFrequency="0.1"
                    numOctaves="5" />
            </filter>
            <mask id="menu-background-mask" {...menu}>
                <rect
                    {...menu}
                    fill="black"
                />
                <rect
                    {...menu}
                    fill="white"
                    rx="20"
                />
            </mask>
            <Player />
        </defs>
    )
}
function mapStateToProps(state) {
    return {
        viewBox: state.screen.viewBox
    }
}
export default connect(mapStateToProps)(Definitions)
