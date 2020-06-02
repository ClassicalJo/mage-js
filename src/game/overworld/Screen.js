import React from 'react'
import { useSelector } from 'react-redux'
import Ow from "./index"

let Screen = props => {
    let viewBox = useSelector(state => state.screen.viewBox)
    let backgroundProps = {
        x: viewBox.width / -2,
        y: viewBox.height / -2,
        width: viewBox.width,
        height: viewBox.height,
        fill: "black",
    }
    return (
        <g>
            <Ow.Background {...backgroundProps} />
            {props.children}
            <Ow.Arrows {...backgroundProps} onClick={props.onClick} />
            {(props.fight) && <rect x={viewBox.width / 2 - 125} y={viewBox.height / 2 - 200} width="100" height="200" fill="transparent" onClick={props.startFight} />}
            <Ow.AnimateFade />
        </g>
    )
}
export default Screen
