import { useEffect, useRef } from "react"
import { useBlockTiles } from "./useBlockTiles"
import { Body } from "matter-js"
import Target from "../bodies/targeting"
import { useCommon } from "./useCommon"
import { useDispatch, useSelector, shallowEqual } from "react-redux"
import {
    showMove,
    setPlayerPosition,
    setPlayerAngle,
    loadSpellbook,
    showBattleMenu,
    setPlayerMoved
} from "../../redux/actions"

export let useMove = () => {
    let dispatch = useDispatch()
    let bodies = useSelector(state => state.world.bodies, shallowEqual)
    let board = useSelector(state => state.world.board)
    let spells = useSelector(state => state.spellbook.spells)
    let player = useSelector(state => state.player)
    let isBusy = useRef()
    let t = useBlockTiles()
    let common = useCommon()
    useEffect(() => {
        function cleanup() {
            dispatch(showMove(false))
            dispatch(showBattleMenu(true))
        }
        function onClick(e) {
            if (isBusy.current !== true) {
                if (player.moved && e.target.attributes.tile) {
                    let playerBody = common.searchPlayer(bodies)
                    let tile = board[e.target.attributes.tile.value]
                    let position = { x: tile.x, y: tile.y }
                    let angle = Target.getAngle(playerBody.position, position)
                    Body.setAngle(playerBody, angle)
                    dispatch(setPlayerAngle(angle))

                    cleanup()
                }
                else if (e.target.attributes.tile) {
                    isBusy.current = true
                    window.removeEventListener("click", onClick)
                    let playerBody = common.searchPlayer(bodies)
                    let tile = board[e.target.attributes.tile.value]
                    if (tile.blocked && tile.x !== player.position.x && tile.y !== player.position.y) { return }
                    let target = { x: tile.x, y: tile.y }

                    t.unblock(common.searchTile(playerBody.position, board))
                    move(playerBody, target, playerBody.moveSpeed, () => {
                        dispatch(setPlayerPosition(playerBody.position))
                        dispatch(setPlayerMoved(true))
                        t.block(common.searchTile(playerBody.position, board))
                        isBusy.current = false
                        if (spells.length > 0) {
                            let copySpells = [...spells]
                            copySpells.forEach(key => key.origin = target)
                            dispatch(loadSpellbook(copySpells))
                        }
                    })
                }
            }

        }
        function move(player, target, n, callback) {
            let tile = common.searchTile(player.position, board)
            let remainingSteps = n
            if (remainingSteps === 0) {
                callback()
                return
            }
            let connections = []
            for (let i in tile.connections) {
                if (!isBlocked(tile.connections[i])) connections.push([i, common.getDistance(tile.connections[i], target)])
            }
            let sorted = connections.sort((a, b) => a[1] - b[1])
            if (remainingSteps < 2) sorted = sorted.filter(key => key[0] !== "top" && key[0] !== "bot" && key[0] !== "left" && key[0] !== "right")

            if (common.getDistance(player.position, target) <= sorted[0][1]) {
                return move(player, target, 0, callback)
            }

            let destination = sorted[0][0]

            if (
                destination === 'top' ||
                destination === "bot" ||
                destination === "left" ||
                destination === "right") {
                remainingSteps -= 2
            }
            else remainingSteps -= 1
            player.move(tile.connections[destination], 
                () => move(player, target, remainingSteps, callback))
        }

        function isBlocked(pos) {
            let target = common.searchTile(pos, board)
            if (target === -1) return true
            else return target.blocked
        }


        window.addEventListener("click", onClick)
        return () => {
            window.removeEventListener("click", onClick)
        }
    }, [spells, board, dispatch, t, player, common, bodies])
}
