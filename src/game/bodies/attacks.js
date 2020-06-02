import { GameBody } from ".";
import { Bodies } from "matter-js";

export class Slash extends GameBody {
    constructor(target, damage, world, callback) {
        super(world);
        this.body = Bodies.circle(target.x + 45, target.y - 27, 5, {
            label: "Attack",
            isSensor: true,
            name: "Slash",
            damage: damage,
            remove: this.remove,
            move: this.move,
        })
        this.add()
        this.move({ x: target.x - 45, y: target.y + 27 },
            () => {
                callback()
                this.remove()
            }
        )
    }
}

export class Shot extends GameBody {
    constructor(origin, target, damage, world, callback) {
        super(world);
        this.body = Bodies.circle(origin.x, origin.y, 5, {
            label: "Attack",
            isSensor: true,
            name: "Shot",
            damage: damage,
            remove: this.remove,
            move: this.move,
        })
        this.add()
        this.move(target,
            () => {
                callback()
                this.remove()})
    }
}


