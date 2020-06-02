import React from 'react'
import Ow from "./overworld/"
import { useSelector, useDispatch } from 'react-redux'
import { showScenario, updatePage } from "../redux/actions"
import Pages from "./overworld/History"

let Overworld = () => {
    let currentPage = useSelector(state => state.world.currentPage)
    let fights = useSelector(state => state.world.fights)
    let dispatch = useDispatch()
    let onClick = n => Pages[currentPage + n] !== undefined ? dispatch(updatePage(currentPage + n)) : dispatch(updatePage(currentPage))
    let startFight = () => dispatch(showScenario(true))
    return (
        <Ow.Screen onClick={onClick} fight={fights[currentPage]} startFight={startFight}>
            <Ow.Page title={Pages[currentPage].title} text={Pages[currentPage].text} />
        </Ow.Screen>
    )
}

export default Overworld
