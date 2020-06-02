import { useSelector, useDispatch } from "react-redux"
import { useEndTurn } from "../hooks/useEndTurn"
import { useContext } from "react"
import { worldContext } from "../hooks/useEngine"
import { useBlockTiles } from "../hooks/useBlockTiles"
import { Body } from "matter-js"
import { setPlayerPosition, setPlayerAngle, showStartButton, setSpellbookLength } from "../../redux/actions"
import Player from '../bodies/player'
import Enemy from '../bodies/enemies'
import { useSetResult } from "../hooks/BattleHooks"

export let useScene = () => {
    let currentPage = useSelector(state => state.world.currentPage)
    let player = useSelector(state => state.player)
    let board = useSelector(state => state.world.board)
    let world = useContext(worldContext)
    let allFights = useSelector(state => state.world.fights)
    let dispatch = useDispatch()
    let setResult = useSetResult()
    let tiles = useBlockTiles()
    let battle = useEndTurn(setResult)

    function start() {
        dispatch(showStartButton(false))
        fights[allFights[currentPage]].start(player, board, tiles, world, dispatch)
        setTimeout(battle, 500)
    }
    return start
}

let fights = {
    "training": {
        start: (player, board, tiles, world, dispatch) => {
            let playerStart = { ...board[51] }
            let enemyStart = { ...board[12] }
            let newPlayer = new Player(playerStart, player.maxHP, player.speed, world)

            Body.setAngle(newPlayer.body, -90 * Math.PI / 180)
            dispatch(setPlayerAngle(newPlayer.body.angle))
            dispatch(setPlayerPosition(newPlayer.body.position))
            let enemy = new Enemy.Statue(enemyStart, world)
            enemy.body.hp = 1
            newPlayer.add()
            enemy.add()
            Body.setAngle(enemy.body, 90 * Math.PI / 180)
            tiles.block(playerStart, enemyStart)
        }
    },
    "training2": {
        start: (player, board, tiles, world, dispatch) => {
            let playerStart = { ...board[51] }
            let enemyStart = { ...board[12] }
            let newPlayer = new Player(playerStart, player.maxHP, player.speed, world)

            Body.setAngle(newPlayer.body, -90 * Math.PI / 180)
            dispatch(setPlayerAngle(newPlayer.body.angle))
            dispatch(setPlayerPosition(newPlayer.body.position))
            dispatch(setSpellbookLength(4))
            let enemy = new Enemy.Statue(enemyStart, world)
            newPlayer.add()
            enemy.add()
            Body.setAngle(enemy.body, 90 * Math.PI / 180)
            tiles.block(playerStart, enemyStart)
        }
    },
    "training3": {
        start: (player, board, tiles, world, dispatch) => {
            let playerStart = { ...board[51] }
            let enemyStart = { ...board[12] }
            let newPlayer = new Player(playerStart, player.maxHP, player.speed, world)
            dispatch(setSpellbookLength(6))
            Body.setAngle(newPlayer.body, -90 * Math.PI / 180)
            dispatch(setPlayerAngle(newPlayer.body.angle))
            dispatch(setPlayerPosition(newPlayer.body.position))
            let enemy = new Enemy.Elf(enemyStart, world)
            enemy.body.moveSpeed = 0
            enemy.body.name = "Caster Statue"
            Body.setStatic(enemy.body, true)
            newPlayer.add()
            enemy.add()
            Body.setAngle(enemy.body, 90 * Math.PI / 180)
            tiles.block(playerStart, enemyStart)
        }
    },
    "training4": {
        start: (player, board, tiles, world, dispatch) => {
            let playerStart = { ...board[51] }
            let enemyStart = { ...board[4] }
            let gargoyleLeft = { ...board[11] }
            let gargoyleRight = { ...board[13] }
            let newPlayer = new Player(playerStart, player.maxHP, player.speed, world)
            dispatch(setSpellbookLength(8))
            Body.setAngle(newPlayer.body, -90 * Math.PI / 180)
            dispatch(setPlayerAngle(newPlayer.body.angle))
            dispatch(setPlayerPosition(newPlayer.body.position))
            let enemy = new Enemy.Elf(enemyStart, world)
            let garg = new Enemy.Warg(gargoyleLeft, world)
            garg.body.name = "Gargoyle"
            let oyle = new Enemy.Warg(gargoyleRight, world)
            oyle.body.name = "Gargoyle"

            enemy.body.moveSpeed = 0
            enemy.body.name = "Caster Statue"
            Body.setStatic(enemy.body, true)
            newPlayer.add()
            enemy.add()
            garg.add()
            oyle.add()
            Body.setAngle(enemy.body, 90 * Math.PI / 180)
            tiles.block(playerStart, enemyStart)
        }
    }
}
