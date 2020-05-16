import React from "react"
import Background from "../../assets/svg/UI/Background"
import { useSelector } from "react-redux"

let Menu = () => {
    let viewBox = useSelector(state => state.screen.viewBox)
    return (
        <React.Fragment>
            <Background
                height={viewBox.height}
                width={viewBox.height * 9 / 16}
                x={(viewBox.height * 9 / 16) / -2}
                y={viewBox.height / -2}
                fill="#1101AB"
                ry="20"
            />
        </React.Fragment>
    )
}

export default Menu
