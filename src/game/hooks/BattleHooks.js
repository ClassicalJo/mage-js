import { setBattleResult, setPlayerMoved, updatePage, loadSpellbook } from "../../redux/actions"
import { useDispatch, useSelector, shallowEqual } from "react-redux"
import { useCommon } from "./useCommon"
import { setBattleTitle, showBattleTitle, showStartButton, updateFight, showScenario, showBattle } from "../../redux/actions"
import { Bolt, Exploding, Rain } from '../bodies/spells'
import { worldContext } from "./useEngine"
import { useContext, useRef } from "react"

export let useSetResult = () => {
    let dispatch = useDispatch()
    let common = useCommon()
    let currentPage = useSelector(state => state.world.currentPage)
    let world = useContext(worldContext)
    let result = {
        victory: () => {
            dispatch(setBattleResult("Victory"))
            common.timeout(() => {
                dispatch(setPlayerMoved(false))
                dispatch(updateFight(currentPage))
                dispatch(updatePage(currentPage + 1))
                dispatch(loadSpellbook([]))
                dispatch(setBattleResult(null))
                dispatch(showBattle(false))
                for (let i = world.bodies.length - 1; i >= 0; i--) world.bodies[i].remove()
            }, 2000)
            common.timeout(() => {
                dispatch(loadSpellbook([]))
                dispatch(showScenario(false))
                dispatch(showStartButton(true))
            }, 2500)
        },
        defeat: () => {
            dispatch(setBattleResult("Defeat"))
            common.timeout(() => {
                dispatch(setPlayerMoved(false))
                dispatch(setBattleResult(null))
                dispatch(showBattle(false))
                for (let i = world.bodies.length - 1; i >= 0; i--) world.bodies[i].remove()
            }, 2000)
            common.timeout(() => {
                dispatch(showScenario(false))
                dispatch(showStartButton(true))
            }, 2500)
        }
    }
    return result
}

export let useShowSpellTitle = () => {
    let common = useCommon()
    let dispatch = useDispatch()
    function show(spell, nextPhase) {
        let g = common.stepGen()
        let next = () => schedule[g.next().value]()
        let schedule =
            [
                () => common.next(() => dispatch(setBattleTitle(spell.name.element[0].toUpperCase() + spell.name.element.slice(1) + spell.name.shape)), next),
                () => common.fnTimeoutNext(() => dispatch(showBattleTitle(true)), next, 500),
                () => common.fnTimeoutNext(() => dispatch(showBattleTitle(false)), next, 500),
                nextPhase,
            ]
        next()
    }

    return show
}

export let useMakeSpellBody = () => {
    let bodies = useSelector(state => state.world.bodies, shallowEqual)
    let player = useRef()
    player.current = useSelector(state => state.player)
    let world = useContext(worldContext)
    let common = useCommon()
    function make(spell, next) {
        let target = {
            x: player.current.position.x + Math.cos(player.current.angle),
            y: player.current.position.y + Math.sin(player.current.angle),
        }
        let meta = {
            maximize: spell.maximize,
            empower: spell.empower,
            combine: spell.combine
        }
        switch (spell.target[spell.target.length - 1]) {
            case "single": {
                new Bolt(spell.origin, target, spell.damage, spell.name, meta, world, next)
                break;
            }
            case "ball": {
                new Exploding(spell.origin, target, spell.damage, spell.name, meta, world, next)
                break;
            }
            case "all": {
                bodies.forEach(key => {
                    if (key.label === "Enemy") new Rain(key.position, spell.damage, spell.name, meta, world)
                })
                common.timeout(next, 3000)
                break;
            }
            default: return
        }
    }

    return make
}
