import React, { useEffect } from "react"
import ViewBox from "../assets/svg/ViewBox"
import { connect } from "react-redux"
import { updateBodies, setPause } from "../redux/actions"
import { Engine } from "matter-js"
import GameEngine from "./Engine"
import { useAnimationFrame } from "./hooks/useAnimationFrame"
import { useResizeScreen } from "./hooks/useResizeScreen"
import { useTutorial } from './scene/useTutorial'
import Renderer from "./Renderer"
import UI from "./UI"
import Scenario from "./Scenario"

let Game = props => {
    let { svg, viewBox, pause } = { ...props }
    useAnimationFrame(() => updateCycle(props))
    useResizeScreen()
    let start = useTutorial(GameEngine.world)
    useEffect(() => {
        let onKeyDown = e => {
            if (e.key === "Escape") props.dispatch(setPause(!pause))
        }
        window.addEventListener("keydown", onKeyDown)
        return () => {
            window.removeEventListener("keydown", onKeyDown)
        }
    }, [svg, viewBox, pause])
    return (
        <ViewBox>
            <circle cx={-500} cy={-500} onClick={start} r="50" fill="blue" />
            <Scenario />
            <Renderer />
            <UI />
        </ViewBox>
    )
}

let updateCycle = props => {
    Engine.update(GameEngine)
    let bodies = [...GameEngine.world.bodies]
    props.dispatch(updateBodies(bodies))
}

function mapStateToProps(state) {
    return {
        position: state.mouse.position,
        svg: state.screen.svg,
        pause: state.screen.pause,
        viewBox: state.screen.viewBox,
        bodies: state.world.bodies
    }
}

export default connect(mapStateToProps)(Game)
