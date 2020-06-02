import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { showMove, showBattleMenu, showSpellbook } from '../../redux/actions'
let BattleMenuText = props => {
    return (
        <g>
            <text
                x={props.x}
                y={props.y}
                alignmentBaseline="central"
                fontFamily="Arial Black"
                fontSize="30"
                fill="white"
                pointerEvents="none">
                {props.children}
            </text>
            <rect onClick={props.onClick} width={props.width} height={props.height} x={props.x} y={props.y + props.height / -2} fill="transparent" />
        </g>
    )
}
let BattleMenu = () => {
    let viewBox = useSelector(state => state.screen.viewBox)
    let next = useSelector(state => state.battle.next)
    let dispatch = useDispatch()
    function move() {
        dispatch(showMove(true))
        dispatch(showBattleMenu(false))
    }
    function cast() {
        dispatch(showSpellbook(true))
        dispatch(showBattleMenu(false))
    }
    function end() {
        dispatch(showBattleMenu(false))
        next()
    }
    return (
        <>
            <rect
                width={viewBox.width / 4}
                height={240}
                x={viewBox.width / -2 + 10}
                fill="green"
                stroke="white"
                opacity="0.5"
                strokeWidth="10"
            />
            <BattleMenuText onClick={move} height={60} width={viewBox.width / 4 - 100} x={viewBox.width / -2 + 50} y={60}>MOVE</BattleMenuText>
            <BattleMenuText onClick={cast} height={60} width={viewBox.width / 4 - 100} x={viewBox.width / -2 + 50} y={120}>PREPARE SPELL</BattleMenuText>
            <BattleMenuText onClick={end} height={60} width={viewBox.width / 4 - 100} x={viewBox.width / -2 + 50} y={180}>CAST SPELL</BattleMenuText>
        </>
    )
}
export default BattleMenu
