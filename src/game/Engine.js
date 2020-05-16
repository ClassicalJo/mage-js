import {Engine} from "matter-js"
let GameEngine = Engine.create()
let world = GameEngine.world
world.gravity.y = 0

export default GameEngine


