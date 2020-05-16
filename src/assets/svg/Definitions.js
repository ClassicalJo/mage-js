import React from "react"
import { connect } from "react-redux"

let Definitions = props => {
    let menu = {
        height: props.viewBox.height,
        width: props.viewBox.height * 9 / 16,
        x: (props.viewBox.height * 9 / 16) / -2,
        y: props.viewBox.height / -2
    }

    return (
        <defs>
            <filter
                id="menu-background-filter"
                x="0%"
                y="0%"
                width="100%"
                height="100%">
                <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.1 0.5"
                    numOctaves="1"
                    seed="1"
                />
                <feColorMatrix type="saturate" values="0" />
            </filter>

            <mask id="menu-background-mask"
                height={menu.height}
                width={menu.height}
                x={menu.x}
                y={menu.y}
            >
                <rect
                    height={menu.height}
                    width={menu.width}
                    x={menu.x}
                    y={menu.y}
                    fill="black"
                />
                <rect
                    height={menu.height}
                    width={menu.width}
                    x={menu.x}
                    y={menu.y}
                    fill="white"
                    rx="20"
                />
            </mask>
        </defs>
    )
}
function mapStateToProps(state) {
    return {
        viewBox: state.screen.viewBox
    }
}
export default connect(mapStateToProps)(Definitions)
