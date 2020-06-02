import { useRef } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { usePhase } from "./usePhase"
import { useCommon } from './useCommon'

export let useEndTurn = battle => {
    let bodies = useRef()
    bodies.current = useSelector(state => state.world.bodies, shallowEqual)
    let common = useCommon()
    let phase = usePhase()
    return battlePhase

    function battlePhase() {
        let g = common.stepGen()
        let next = () => {
            let enemies = bodies.current.filter(key => key.label === "Enemy" && key.hp > 0)
            let players = bodies.current.filter(key => key.label === "Player")
            if (enemies.length === 0) common.timeout(() => battle.victory(), 1000)
            else if (players[0].hp <= 0) common.timeout(() => battle.defeat(), 1000)
            else schedule[g.next().value]()
        }
        let schedule = [() => phase.start(next), newTurn]
        function newTurn() {
            let characters = bodies.current
                .filter(key => key.label === "Player" || key.label === "Enemy")
                .sort((a, b) => a.moveSpeed - b.moveSpeed)
                .reverse()
                .map(key => (key.label === "Player") ? [() => phase.player(next), () => phase.cast(next)] : () => phase.enemy(key, next))

            schedule.push(
                ...characters.flat(),
                () => phase.cleanup(next),
                newTurn)
            next()
        }
        next()
    }
}


