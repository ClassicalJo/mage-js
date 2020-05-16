import { Bodies, World, Body } from 'matter-js'
import { useSelector } from 'react-redux'

export let useTutorial = world => {
    let board = useSelector(state => state.world.board)
    let start = () => {

        let player = Bodies.circle(board[0].x, board[0].y, 30, { label: "Player" })
        let enemy = Bodies.circle(board[63].x, board[63].y, 30, { label: "Enemy" })
        World.add(world, [player, enemy])
    }
    return start
}


