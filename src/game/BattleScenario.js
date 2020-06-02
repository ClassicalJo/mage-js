import React from 'react'
import Board from "./scenario/Board"
import Grid from "./scenario/Grid"
import Start from "./scenario/Start"
import {useSelector} from 'react-redux'
import { useScene } from './scene'

let Scenario = () => {
    let startFight = useScene()
    let startButton = useSelector(state => state.world.showStartButton)
    return (
        <>
            <Board />
            <Grid />
            {(startButton) && <Start onClick={startFight} />}
        </>
    )
}


export default Scenario
