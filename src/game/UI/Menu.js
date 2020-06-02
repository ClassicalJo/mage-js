import React from "react"
import Background from "../../assets/svg/UI/Background"
import Overlay from "./Overlay"
import { useSelector } from "react-redux"
let list = [
    "ELEMENTAL RUNES GO FIRST",
    "(FU) FOR FIRE",
    "(VE) FOR WIND",
    "(GA) FOR WATER",
    "EARTH WITH (TI)",
    "COMBINE THEM WITH (KO)",
    "OR DIVIDE THEM WITH (SU)",
    "ADD (MU) FOR EXPLOSION",
    "AND FOR RAIN USE (LU)",
]
let Menu = () => {
    let viewBox = useSelector(state => state.screen.viewBox)
    return (
        <React.Fragment>
            <Overlay />
            <Background
                height={viewBox.height}
                width={viewBox.height * 9 / 16}
                x={(viewBox.height * 9 / 16) / -2}
                y={viewBox.height / -2}
                fill="#1101AB"
                ry="20"
            />
            <MenuList list={list} />
        </React.Fragment>
    )
}

let MenuList = props => {
    return (
        <>
            {props.list.map((key, index) => (
                <text
                    key={`menu${index}`}
                    x={0}
                    y={-500 + 50 * index}
                    fontSize="25"
                    fontFamily="Arial Black"
                    fill="white"
                    textAnchor="middle"
                    alignmentBaseline="central">
                    {key}
                </text>
            ))}
        </>
    )
}


export default Menu
