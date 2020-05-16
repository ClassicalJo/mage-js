import React from 'react'
import { useSelector } from "react-redux"
import Menu from "./UI/Menu"
import Overlay from './UI/Overlay'

let UI = () => {
    let pause = useSelector(state => state.screen.pause)
    return (pause) && (
        <React.Fragment>
            <Overlay/>
            <Menu />
        </React.Fragment>
    )
}

export default UI
