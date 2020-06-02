import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

let SpellTitle = props => {
    let strokeWidth = 10
    let width = props.title.length * 50 + 100
    let height = (75 + (strokeWidth * 2)) * 4 / 3
    return (
        <g>
            <g>
                <rect
                    x={width / -2}
                    y={-450 + height / -2}
                    width={width}
                    height={height}
                    fill="#1101AB"
                    stroke="white"
                    strokeWidth="10"
                >
                </rect>
                <text
                    fill="white"
                    y="-450"
                    alignmentBaseline="central"
                    textAnchor="middle"
                    fontFamily="Arial Black"
                    fontSize="50"
                    fontVariant="small-caps"
                >
                    {props.title}
                </text>
            </g>
        </g>
    )
}
let Battle = () => {
    let showTitle = useSelector(state => state.battle.showTitle)
    let showStart = useSelector(state => state.battle.showStart)
    let title = useSelector(state => state.battle.title)
    useEffect(() => {
    }, [showStart, showTitle, showStart])
    return (
        <g>
            {(showStart) && <React.Fragment>
                <g>
                    <rect
                        x="-250"
                        y="-100"
                        width="500"
                        height="200"
                        fill="black">
                    </rect>
                    <text fill="white" alignmentBaseline="central" textAnchor="middle" fontFamily="Arial Black" fontSize="50">BATTLE</text>
                </g>
            </React.Fragment>}
            {(showTitle) && <SpellTitle title={title} />}
        </g>

    )
}
export default Battle
