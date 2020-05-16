import React from 'react'
import { connect } from 'react-redux'
import Sprites from "../assets/svg/sprites"

let Renderer = props => {
    return props.bodies.map(key => renderBodies(key))
}

let renderBodies = key => {
    switch (key.label) {
        case "Circle Body": return (
            <Sprites.Circle
                key={key.id}
                cx={key.position.x}
                cy={key.position.y}
                r={key.circleRadius}
            />
        )
        case "Player": return (
            <Sprites.Player
                key={key.id}
                cx={key.position.x}
                cy={key.position.y}
                r={key.circleRadius}
            />
        )
        case "Enemy": return (
            <Sprites.Enemy
                key={key.id}
                cx={key.position.x}
                cy={key.position.y}
                r={key.circleRadius}
            />
        )
        default: return
    }

}
function mapStateToProps(state) {
    return {
        bodies: state.world.bodies,
    }
}
export default connect(mapStateToProps)(Renderer)
