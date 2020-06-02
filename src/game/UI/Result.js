import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useCommon } from "../hooks/useCommon"
import { setBattleResult } from '../../redux/actions'

let Result = () => {
    let viewBox = useSelector(state => state.screen.viewBox)
    let result = useSelector(state => state.battle.result)
    let common = useCommon()
    let dispatch = useDispatch()
    let width = viewBox.width / 2
    let height = viewBox.height / 4
    let fontSize = height * 9 / 10
    useEffect(() => {
        common.timeout(() => dispatch(setBattleResult(null)), 5000)
    }, [common, dispatch])
    
    switch (result) {
        case "Victory": return (
            <g>
                <rect
                    width={width}
                    height={height}
                    x={width / -2}
                    y={height / -2}
                    fill="#1101AB"
                    opacity="0.5"
                    stroke="white"
                    strokeWidth="30">
                </rect>
                <TitleText maxWidth={width} fontSize={fontSize} text="VICTORY!" />
            </g>
        )
        case "Defeat": return (
            <g>
                <rect
                    width={width}
                    height={height}
                    x={width / -2}
                    y={height / -2}
                    fill="maroon"
                    opacity="0.5"
                    stroke="white"
                    strokeWidth="30">
                </rect>
                <TitleText maxWidth={width} fontSize={fontSize} text="DEFEAT" />
            </g>
        )
        default: return <></>
    }
}

let TitleText = props => {
    let common = useCommon()
    useEffect(() => {
        let titleNodeList = document.querySelectorAll(".result-text-character")
        titleNodeList.forEach((key, index) => {
            common.timeout(() => key.beginElement(), index * 150)
        })
    }, [common])
    let fontSize = props.fontSize * props.text.length > props.maxWidth ? props.maxWidth / (props.text.length + 2) : props.fontSize
    let text = props.text.split("")
    return text.map((key, index) => (
        <text
            key={`result-title${index}`}
            fontFamily="Arial Black"
            alignmentBaseline="central"
            textAnchor="middle"
            fill="white"
            opacity="0"
            pointerEvents="none"
            fontSize={fontSize}
            x={(fontSize * text.length / -2) + (fontSize * index) + fontSize / 2}>
            {key}
            <animate className="result-text-character" attributeName="opacity" to="1" dur="0.1s" calcMode="discrete" begin="indefinite" fill="freeze" />
        </text>
    ))
}

export default Result
