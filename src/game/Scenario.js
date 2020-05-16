import React, { useEffect } from 'react'
import Board from "./scenario/Board"
import Grid from "./scenario/Grid"
import { useGetBoardLogic } from "../game/hooks/useGetBoardLogic"
import { useDispatch } from "react-redux"
import { updateBoard } from '../redux/actions'

let Scenario = () => {
    let layout = useGetBoardLogic()
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(updateBoard(layout))
    }, [dispatch])

    return (
        <React.Fragment>
            <Board />
            <Grid />
        </React.Fragment>
    )
}


export default Scenario
