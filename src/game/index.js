import React, { useEffect } from "react"
import { useResizeScreen } from "./hooks/useResizeScreen"
import { useDispatch, useSelector } from 'react-redux'
import { setPause } from "../redux/actions"
import Renderer from "./Renderer"
import UI from "./UI"
import BattleScenario from "./BattleScenario"
import Overworld from "./Overworld"
import { useAnimationFrame } from "./hooks/useAnimationFrame"


let Game = () => {
    let dispatch = useDispatch()
    let pause = useSelector(state => state.screen.pause)
    let showScenario = useSelector(state => state.world.showScenario)
    useResizeScreen()
    useAnimationFrame()
    useEffect(() => {
        let onKeyDown = e => { if (e.key === "Escape") dispatch(setPause(!pause)) }
        window.addEventListener("keydown", onKeyDown)
        return () => {
            window.removeEventListener("keydown", onKeyDown)
        }
    }, [pause, dispatch])
    return (
        <>

            {(showScenario) && <BattleScenario />}
            <Renderer />
            {(!showScenario) && <Overworld />}
            <UI />
        </>
    )
}

export default Game
