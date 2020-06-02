import React from 'react'
import { useSelector } from "react-redux"
import Menu from "./UI/Menu"
import Spellbook from "./UI/Spellbook"
import Battle from "./UI/Battle"
import Move from "./UI/Move"
import Chat from "./UI/Chat"
import BattleMenu from './UI/BattleMenu'
import Result from "./UI/Result"

let UI = () => {
    let pause = useSelector(state => state.screen.pause)
    let spellbook = useSelector(state => state.spellbook.show)
    let battle = useSelector(state => state.battle.show)
    let move = useSelector(state => state.move.show)
    let showScenario = useSelector(state => state.world.showScenario)
    let battleMenu = useSelector(state => state.battle.showMenu)
    let result = useSelector(state => state.battle.result)
    return (
        <React.Fragment>
            {(battle) && <Battle />}
            {(spellbook) && <Spellbook />}
            {(move) && <Move />}
            {(battleMenu) && <BattleMenu />}
            {(showScenario) && <Chat />}
            {(pause) && <Menu />}
            {(result) && <Result />}
        </React.Fragment>
    )
}

export default UI
