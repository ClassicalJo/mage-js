import React from 'react'
import Overlay from './Overlay'
import { useSelector } from 'react-redux'
import { useSpellbook } from '../hooks/useSpellbook'

let Spellbook = () => {
    let viewBox = useSelector(state => state.screen.viewBox)
    let spellLength = useSelector(state => state.spellbook.length) + 2
    let word = useSpellbook()
    let maxWidth = viewBox.width * 4 / 5
    let maxHeight = viewBox.height * 1 / 4
    let letterSize = maxWidth / spellLength > 200 ? 200 : maxWidth / spellLength
    let sizeProps = {
        x: maxWidth / -2,
        y: maxHeight / -2,
        width: maxWidth,
        height: maxHeight,
        pointerEvents: "none",
    }
    let fade = () => (<animate className="spellLetter" attributeName="opacity" to="0" begin="indefinite" calcMode="discrete" dur="0.1s" fill='freeze' />)
    return (
        <>
            <Overlay />
            <rect
                {...sizeProps}
                fill="#1101AB"
                mask="url(#spellbook-mask)">
                {fade()}
            </rect>
            <rect
                {...sizeProps}
                filter="url(#spellbook-filter)"
                mask="url(#spellbook-mask)">
                {fade()}
            </rect>
            <rect
                {...sizeProps}
                stroke='white'
                fill='transparent'
                strokeWidth="30"
                mask="url(#spellbook-mask)">
                {fade()}
            </rect>
            {word.map((key, index) => (
                <text
                    key={`word${index}`}
                    x={((index + 1) - word.length) * (letterSize / 2) + (index * letterSize) / 2}
                    y="0"
                    textAnchor="middle"
                    alignmentBaseline="central"
                    fontSize={letterSize}
                    fontFamily="Arial Black">
                    {key}
                    <animate className="spellLetter" attributeName="fill" from="black" to="white" begin="indefinite" dur="1s" fill='freeze' />
                </text>
            ))}

        </>
    )
}


export default Spellbook
