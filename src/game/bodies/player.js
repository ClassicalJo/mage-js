import { GameBody } from '.';
import { Bodies } from 'matter-js'
class Player extends GameBody {
    constructor(origin, hp, speed, world) {
        super(world);
        this.body = Bodies.circle(origin.x, origin.y, 30, { 
            label: "Player", 
            isStatic: true, 
            hp: hp,
            maxHP: hp,
            moveSpeed: speed,
            remove: this.remove,
            move: this.move
        })
    }
}

export default Player
