import { Body } from 'matter-js'
import { useSelector, useDispatch } from 'react-redux'
import { setPlayerPosition, setPlayerAngle } from "../../redux/actions"
import { useBlockTiles } from "../hooks/useBlockTiles"
import Player from '../bodies/player'
import Enemy from '../bodies/enemies'
import { useEndTurn } from '../hooks/useEndTurn'

export let useTutorial = world => {
    let board = useSelector(state => state.world.board)
    let player = useSelector(state => state.player)
    let dispatch = useDispatch()
    let tiles = useBlockTiles()
    let battle = useEndTurn()
    function start() {
        let playerStart = { ...board[63] }
        let enemyStart = { ...board[0] }
        let enemy2Start = { ...board[15] }
        let newPlayer = new Player(playerStart, player.maxHP, player.speed, world)

        Body.setAngle(newPlayer.body, 270)
        dispatch(setPlayerAngle(newPlayer.body.angle))
        dispatch(setPlayerPosition(newPlayer.body.position))
        let enemy = new Enemy.Elf(enemyStart, world)
        Body.setAngle(enemy.body, 90)
        let enemy2 = new Enemy.Warg(enemy2Start, world);
        [newPlayer, enemy, enemy2].forEach(key => key.add())
        tiles.block(playerStart, enemyStart, enemy2Start)
        setTimeout(battle, 0)
    }
    return start
}
