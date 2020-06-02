import { Body } from 'matter-js'
import { useSelector, useDispatch } from 'react-redux'
import { setPlayerPosition, setPlayerAngle, showScenario } from "../../redux/actions"
import { useBlockTiles } from "../hooks/useBlockTiles"
import Player from '../bodies/player'
import Enemy from '../bodies/enemies'
import { useEndTurn } from '../hooks/useEndTurn'
import { useSetResult } from "../hooks/BattleHooks"

export let useTraining = world => {
    let board = useSelector(state => state.world.board)
    let player = useSelector(state => state.player)
    let dispatch = useDispatch()
    let tiles = useBlockTiles()
    let setResult = useSetResult()

    let result = {
        victory: () => { 
            console.log("Training Complete!")
            setResult.victory() 
            dispatch(showScenario(true))
        },
        defeat: () => { setResult.defeat() }
    }
    let battle = useEndTurn(result)
    

    function start() {
        
        let playerStart = { ...board[51] }
        let enemyStart = { ...board[12] }
        let newPlayer = new Player(playerStart, player.maxHP, player.speed, world)

        Body.setAngle(newPlayer.body, 270)
        dispatch(setPlayerAngle(newPlayer.body.angle))
        dispatch(setPlayerPosition(newPlayer.body.position))
        let enemy = new Enemy.Statue(enemyStart, world)
        newPlayer.add()
        enemy.add()
        Body.setAngle(enemy.body, 90)
        tiles.block(playerStart, enemyStart)
        setTimeout(battle, 0)

    }
    return start
}
