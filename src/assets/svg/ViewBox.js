import React from 'react'
import Definitions from "./Definitions"
import { connect } from "react-redux"

let ViewBox = props => {
    return (
        <svg
            id="main-svg"
            viewBox={`${props.width / -2} ${props.height / -2} ${props.width} ${props.height}`}
            preserveAspectRatio="xMidYMid meet">
            <Definitions />
            <rect
                fill="black"
                width="10000"
                height="10000"
                x="-5000"
                y="-5000" />
            <rect
                fill="url(#background-radial)"
                width={props.width}
                height={props.height}
                x={props.width / -2}
                y={props.height / -2}>

            </rect>
            <rect
                fill='transparent'
                stroke="white"
                strokeWidth="3"
                width={props.width}
                height={props.height}
                x={props.width / -2}
                y={props.height / -2}
            />
            {props.children}
        </svg>
    )
}

function mapStateToProps(state) {
    return {
        ...state.screen.viewBox,
    }
}

export default connect(mapStateToProps)(ViewBox)
