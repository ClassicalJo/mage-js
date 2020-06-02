import React, { useEffect } from 'react'
import { useCommon } from '../hooks/useCommon'

let StartButton = props => {
    let opacityId = "opacity-start-button"
    let scaleYId = "scale-y-start-button"
    let scaleXId = "scale-x-start-button"
    let textId = "opacity-text-start-button"
    let common = useCommon()
    useEffect(() => {
        common.timeout(() => document.querySelector(`#${opacityId}`).beginElement(), 2500)
        common.timeout(() => document.querySelector(`#${scaleYId}`).beginElement(), 2550)
        common.timeout(() => document.querySelector(`#${scaleXId}`).beginElement(), 2700)
        common.timeout(() => document.querySelector(`#${textId}`).beginElement(), 3200)
    }, [opacityId, scaleYId, scaleXId, textId, common])
    return (
        <g>
            <rect
                fill="blue"
                opacity="0"
                width="200" height="50" x="-100" y="-25"
                transform="scale(0 0)"
                onClick={props.onClick}>
                <animate begin="mouseenter" attributeName="fill" to="rgb(70, 45, 255)" id="hover" fill="freeze" dur=".1s" calcMode="discrete" />
                <animate begin="mouseleave" attributeName="fill" to="blue" id="leaveHover" fill="freeze" dur=".1s" calcMode="discrete" />
                <animateTransform
                    id={scaleYId}
                    attributeName="transform"
                    type="scale"
                    to="0 5"
                    begin="indefinite"
                    fill="freeze"
                    additive="sum"
                    dur=".25s"
                />
                <animate
                    id={opacityId}
                    attributeName="opacity"
                    to="1"
                    begin="indefinite"
                    fill="freeze"
                    dur="0.1s"
                    calcMode="discrete"
                />

                <animateTransform
                    id={scaleXId}
                    attributeName="transform"
                    type="scale"
                    to="5 5"
                    begin="indefinite"
                    fill="freeze"
                    additive="replace"
                    dur=".5s"
                />
            </rect>
            <text
                fontFamily="Cinzel Decorative"
                textAnchor="middle"
                alignmentBaseline="central"
                fontSize="75"
                fill="white"
                opacity="0">
                BATTLE START
                <animate
                    id={textId}
                    attributeName="opacity"
                    to="1"
                    begin="indefinite"
                    calcMode="discrete"
                    dur=".1s"
                    fill='freeze'
                />
            </text>
        </g>
    )
}

export default StartButton
