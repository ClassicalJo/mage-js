import { useCommon } from "./useCommon"
import { useSelector, useDispatch } from 'react-redux'
import { showBattleMenu, battlePhaseForceNext, loadSpellbook } from '../../redux/actions'
import { showBattle, setPlayerMoved } from "../../redux/actions"
import { useContext, useRef } from "react"
import { worldContext } from "./useEngine"
import { useBlockTiles } from "./useBlockTiles"
import { Slash, Shot } from "../bodies/attacks"
import { useShowSpellTitle, useMakeSpellBody } from "./BattleHooks"
import { Body } from "matter-js"
import Target from "../bodies/targeting"

export let usePhase = () => {
    let common = useCommon()
    let t = useBlockTiles()
    let world = useContext(worldContext)
    let board = useRef()
    board.current = useSelector(state => state.world.board)
    let spells = useRef()
    spells.current = useSelector(state => state.spellbook.spells)
    let player = useRef()
    player.current = useSelector(state => state.player)
    let dispatch = useDispatch()
    let spellTitle = useShowSpellTitle()
    let spellBody = useMakeSpellBody()
    let phase = {
        start: function (nextPhase) {
            dispatch(showBattle(true))
            nextPhase()

        },
        enemy: function (enemy, nextPhase) {
            let g = common.stepGen()
            let next = () => schedule[g.next().value]()
            let schedule = [
                () => movePhase(enemy, next),
                () => attackPhase(enemy, next),
                nextPhase
            ]
            next()
        },
        player: function (nextPhase) {
            let g = common.stepGen()
            let next = () => schedule[g.next().value]()
            dispatch(battlePhaseForceNext(next))
            let schedule = [() => dispatch(showBattleMenu(true)), nextPhase]
            next()
        },
        cast: function (nextPhase) {
            let g = common.stepGen()
            let next = () => schedule[g.next().value]()
            let spellList = spells.current.map(key => [() => spellTitle(key, next), () => spellBody(key, next)])
            let schedule = [...spellList.flat(), nextPhase]
            next()
        },
        cleanup: function (nextPhase) {
            dispatch(setPlayerMoved(false))
            dispatch(loadSpellbook([]))
            nextPhase()
        }
    }
    return phase

    function attackPhase(enemy, callback) {
        if (enemy.hp > 0 && enemy.damage.amount > 0) {
            switch (enemy.behaviour) {
                case "Melee": {
                    if (common.getDistance(enemy.position, player.current.position) < 135) {
                        new Slash(player.current.position, enemy.damage, world, callback)
                    }
                    else callback()
                    break;
                }
                case "Ranged": {
                    new Shot(enemy.position, player.current.position, enemy.damage, world, callback)
                    break;
                }
                default: return

            }
        } else callback()

    }

    function movePhase(enemy, callback) {
        if (enemy.hp > 0) {
            t.unblock(common.searchTile(enemy.position, board.current))
            walk(enemy, enemy.moveSpeed, callback)
        }
        else callback()
    }

    function walk(enemy, n, callback) {
        let remainingSteps = n
        if (remainingSteps === 0) {
            Body.setAngle(enemy, Target.getAngle(enemy.position, player.current.position))
            t.block(common.searchTile(enemy.position, board.current))
            common.timeout(callback, 500)
            return
        }
        let tile = common.searchTile(enemy.position, board.current)
        let connections = []
        for (let i in tile.connections) {
            if (!isBlocked(tile.connections[i])) connections.push([i, common.getDistance(tile.connections[i], player.current.position)])
        }
        let sorted = connections.sort((a, b) => a[1] - b[1])

        switch (enemy.behaviour) {
            case "Ranged": {
                sorted.reverse()
                if (common.getDistance(enemy.position, player.current.position) >= sorted[0][1]) {
                    remainingSteps = 0
                    return walk(enemy, remainingSteps, callback)

                }
                break;
            }
            case "Melee": {
                if (common.getDistance(enemy.position, player.current.position) <= sorted[0][1]) {
                    remainingSteps = 0
                    return walk(enemy, remainingSteps, callback)
                }
                break;
            }
            default: break;
        }
        if (remainingSteps < 2) sorted = sorted.filter(key => key[0] !== "top" && key[0] !== "bot" && key[0] !== "left" && key[0] !== "right")
        let destination = sorted[0][0]
        if (
            destination === 'top' ||
            destination === "bot" ||
            destination === "left" ||
            destination === "right") {
            remainingSteps -= 2
        }
        else remainingSteps -= 1
        enemy.move(tile.connections[destination], () => walk(enemy, remainingSteps, callback))
    }

    function isBlocked(pos) {
        let target = common.searchTile(pos, board.current)
        if (target === -1) return true
        else return target.blocked
    }




}
