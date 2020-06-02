import React from 'react'
import { useSelector } from 'react-redux'
import Sprites from "../assets/svg/sprites"

let Renderer = () => {
    let bodies = useSelector(state => state.world.bodies)
    return bodies.map(key => renderBodies(key))
}

let renderBodies = key => {
    switch (key.label) {
        case "Spell": return Sprites.Spells[key.name.shape](key)
        case "Attack": return Sprites.Attacks[key.name](key)
        case "Exploding": {
            return Sprites.Spells["bolt"](key)
        }
        case "Circle Body": return (
            <Sprites.Circle
                key={key.id}
                body={key.id}
                cx={key.position.x}
                cy={key.position.y}
                r={key.circleRadius}
            />
        )
        case "Player": return (
            <Sprites.Player
                body={key.id}
                key={key.id}
                hp={key.hp}
                maxHP={key.maxHP}
                cx={key.position.x}
                cy={key.position.y}
                r={key.circleRadius}
                angle={key.angle}
            />
        )
        case "Enemy": return (
            <Sprites.Enemy
                key={key.id}
                body={key.id}
                hp={key.hp}
                maxHP={key.maxHP}
                cx={key.position.x}
                cy={key.position.y}
                r={key.circleRadius}
                angle={key.angle}
                name={key.name}
            />
        )
        default: return
    }

}

export default Renderer
