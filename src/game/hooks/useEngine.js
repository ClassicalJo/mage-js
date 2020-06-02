/* eslint-disable no-unused-vars */
import { Engine, Events } from "matter-js"
import React, { useState, useEffect } from "react"
import { setChatMessages } from "../../redux/actions"
import { useDispatch } from "react-redux"

let engine = Engine.create()
let world = engine.world
world.timer = 0
world.gravity.y = 0
export let worldContext = React.createContext(world)
    

export let useEngine = () => {
    let [gameEngine, setGameEngine] = useState(engine)
    let dispatch = useDispatch()
    
    useEffect(() => {
        function events() {
            world.timer += 0.016666
            world.timer = Math.round(world.timer * 100) / 100
        }
        function collisionEvents(e) {
            e.pairs.forEach(key => collisionEffect(key))
        }

        function collisionEffect(obj) {
            let pair = {}
            pair[obj.bodyA.label] = obj.bodyA
            pair[obj.bodyB.label] = obj.bodyB
            let order = Object.keys(pair).sort().join("")
            switch (order) {
                case "AttackPlayer": {
                    let attack = pair["Attack"]
                    let player = pair["Player"]
                    let totalDamage = calcDamage(attack.damage, player)
                    player.hp -= totalDamage
                    let message = `${pair["Attack"].name} attack dealt ${totalDamage} damage points to you!`
                    dispatch(setChatMessages(message))
                    break;
                }
                case "EnemyExploding": {
                    pair["Exploding"].explode(pair["Enemy"].position)
                    break;
                }
                case "EnemySpell": {
                    let totalDamage = 0
                    let spell = pair["Spell"]
                    let enemy = pair["Enemy"]

                    if (spell.combine) spell.damage.push(combinedExtraDamage)

                    spell.damage.forEach(key => {
                        totalDamage += calcDamage(key, enemy)
                    })

                    enemy.hp -= totalDamage
                    spell.remove()
                    if (enemy.hp <= 0) enemy.remove()

                    let message = `${pair["Spell"].name.element}${pair["Spell"].name.shape} dealt ${totalDamage} damage points!`
                    dispatch(setChatMessages(message))
                    break;
                }
                default: return
            }
        }
        Events.on(engine, "beforeUpdate", events)
        Events.on(engine, "collisionStart", e => collisionEvents(e))

        return () => {
            Events.off(engine, "beforeUpdate", events)
            Events.off(engine, "collisionStart", e => collisionEvents(e))
        }
    }, [dispatch])
    return gameEngine
}

let calcDamage = (source, receiver) => {
    let totalSourceDamage = 0
    for (let i = 0; i < source.amount; i++) {
        totalSourceDamage += Math.ceil(Math.random() * source.sides)
    }

    return totalSourceDamage
    //- RECEIVER RESISTANCES
}

let combinedExtraDamage = {
    source: "force",
    amount: 2,
    sides: 6,
}
